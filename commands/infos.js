const Discord=require('discord.js');

module.exports.run=async(bot,message,args)=>{
    let botIcon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setDescription('Informations du bot')
        .setColor('#B40404')
        .setThumbnail(botIcon)
        .addField('Nom du bot', bot.user.username)
        .addField('Créer par','Soxis le boss')
        .addField("Commandes:","-------------")
        .addField("?infos","Informations du bot")
        .addField("?serveur",'Informations sur le serveur')
        .addField("?select + @User","Selectionne un utilisateur et retourne ses infos")
        .addField("?lg + pseudo lgel","Retourne des informations sur un joueur lgel")
        .addField("?lginfo + pseudo lgel","Retourne les informations complètes d'un joueur");    
    message.author.createDM().then(channel=>{
        return channel.send(embed);
    }).catch(console.error);
};
module.exports.help={
    name:"infos"
};
