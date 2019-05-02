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
        .addField("?help","Informations du bot (lol tu l'utilises là)")
        .addField("?serveur",'Informations sur le serveur (c grave useless mais jfaisais des tests ok)')
        .addField("?lg + [pseudo]","Retourne des informations sur un joueur lgel")
        .addField("?lginfo + pseudo lgel","Retourne les informations complètes d'un joueur")
        .addField("?top","Retourne le top des joueurs d'hier")
        .addField("?stats + [pseudo]","Retourne les points que tu est en train de faire aujourd'hui, attention ça revient à 0 à minuit");    
    message.author.createDM().then(channel=>{
        return channel.send(embed);
    }).catch(console.error);
};
module.exports.help={
    name:"help"
};
