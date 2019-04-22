const Discord=require('discord.js');
const fs = require('fs');
const bot = new Discord.Client({disableEveryone : true});

bot.commands = new Discord.Collection();

fs.readdir('./commands/',(err,files)=>{
    if(err)console.log(err);
   let jsFile= files.filter(f=>f.split('.').pop()==='js');
   if(jsFile.length<=0){
       console.log("Je ne trouve pas la commande");
       return;
   }
   jsFile.forEach((f,i)=>{
       let props = require(`./commands/${f}`)
       bot.commands.set(props.help.name,props);
   });
});
bot.on('ready',async()=>{
    console.log("On est là");
    bot.user.setActivity("Soulever ta soeur");
});


bot.on('message',async message=>{
    if(message.author.bot) return;
    if (message.channel.type === 'dm')return;
    let prefix=process.env.PREFIX;
    if((message.author.id=="413801175444357131")|| (message.author.id=="301780093578248193")||(message.author.id=="450411701683093515")|| (message.author.id=="426422683081769000")){
        if((message.content.includes(".gif"))||(message.content.includes("tenor"))){
            message.delete();
            message.channel.send("Désolé, mais t'es privé de Gif");
        }
    }
    let messageArray=message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let commandFile = bot.commands.get(command.slice(prefix.length));
    if(commandFile){
        bot.channels.get("551357009128194050").send("Commande: "+command+" | Utilisateur + ID : "+message.author.username+" "+message.author.id +" | Server :"+message.guild.name+"| ID : "+message.guild.id);
        commandFile.run(bot,message,args);        
    }
});
bot.login(process.env.BOT_TOKEN);
