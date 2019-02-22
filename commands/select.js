const Discord=require('discord.js');

module.exports.run=async(bot,message,args)=>{
    let selectedUser = message.guild.member(message.mentions.users.first()||message.guild.get(args[0]));
    if (!selectedUser){
        return message.channel.send("L'utilisateur n'existe pas");
    }
    let usericon=selectedUser.user.displayAvatarURL;
     let role=selectedUser.roles;
    let selection = new Discord.RichEmbed()
        .setDescription("Utilisateur sélectionné")
        .setColor('#4C0B5F')
        .setThumbnail(usericon)
        .addField("Cible :",`${selectedUser}`)
        .addField("A rejoins le serveur le ",selectedUser.joinedAt)
        .addField("Roles ","");
    return message.channel.send(selection);
};
module.exports.help={
    name:"select"
};