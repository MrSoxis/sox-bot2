const Discord=require('discord.js');

module.exports.run=async(bot,message,args)=>{
    let serverLogo = message.guild.iconURL;
    let embed = new Discord.RichEmbed()
        .setDescription('Informations sur le serveur')
        .setColor('#4C0B5F')
        .setThumbnail(serverLogo)
        .addField('Nom du serveur', message.guild.name)
        .addField('Créer le ',message.guild.createdAt)
        .addField('Nombre de membres',message.guild.memberCount)
        .addField(message.author.username+" a rejoins le serveur le",message.member.joinedAt);
    return message.channel.send(embed);
};

module.exports.help={
    name:"serveur"
};


