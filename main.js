const Discord=require('discord.js');
const fs = require('fs');
const bot = new Discord.Client({disableEveryone : true});

const banGuild=[];
const banUser=[];
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
    bot.user.setActivity("Soulever ta soeur | ?help si t'es perdu mon khey");
});


bot.on('message',async message=>{
    if(message.author.bot) return;
    if (message.channel.type === 'dm')return;
    let prefix=process.env.PREFIX;
    let messageArray=message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command.slice(0,1)==prefix){
        if(banGuild.includes(message.guild.id)){return message.channel.send("Serveur banni noraj, n'hésitez pas à kick le bot ");};
        if(banUser.includes(message.author.id)){ message.react(":middle_finger:"); return message.author.createDM().then(channel=>{
            return channel.send("Mdr t ban");
            }).catch(console.error);};
        let commandFile = bot.commands.get(command.slice(prefix.length));
        if(commandFile){
            bot.channels.get("551357009128194050").send("Commande: "+command+" | Utilisateur + ID : "+message.author.username+" "+message.author.id +" | Server :"+message.guild.name+"| ID : "+message.guild.id);
            commandFile.run(bot,message,args);        
        }
    };
});
bot.login(process.env.BOT_TOKEN);
