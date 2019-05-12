const Discord=require('discord.js');
const fs = require('fs');
const bot = new Discord.Client({disableEveryone : true});
const maintenance=1;
const banGuild={"548459117581303809":"Cheh"};
const banUser=["398967090461147137"];
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
    if(maintenance==1){
        bot.user.setActivity("En maintenance");
    }
    else{
    bot.user.setActivity("Soulever ta soeur | ?help si t'es perdu mon khey");
    };
});


bot.on('message',async message=>{
    if(message.author.bot) return;
    if (message.channel.type === 'dm')return;
    let prefix=process.env.PREFIX;
    let messageArray=message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content==="?ping"){return message.channel.send("Pong :ping_pong: ");};
    if(command.slice(0,1)==prefix){
        if(maintenance==1){
          if (message.guild.id != "548459117581303809"){
            return message.channel.send("Bot en maintenance, oups :$");
          }
        };
        if(banGuild.includes(message.guild.id)){return message.channel.send("Bot indisponible sur ce serveur, raison : "+banGuild[message.guild.id)];};
        if(banUser.includes(message.author.id)){ message.react('🖕'); return message.author.createDM().then(channel=>{
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
