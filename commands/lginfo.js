const Discord=require('discord.js');
const superagent = require("superagent");
const snekfetch = require("snekfetch");
module.exports.run=async(bot,message,args)=>{
    var api="https://www.loups-garous-en-ligne.com/api/profile.php?user="+args[0]+"&fields=id,title,gender,signature,points,isPremium,hamlet,activity";
    snekfetch.get(api).then(r=>{
        var user=r.body;
        if(user.error){
            return message.channel.send("Utilisateur introuvable");
        }
        else{
            var prem ="";
            if(user.isPremium) prem="Premium";
            else prem = "Non premium";
            var sx = "";
            if(user.gender==="male") sx = "Homme";
            else sx = "Femme";
            var signature = user.signature;

            let embed = new Discord.RichEmbed()
                .setDescription('Profil LGEL')
                .setColor('#B40404')
                .addField('Pseudo : ', args[0])
                .addField("Titre : "+user.title,"Signature : "+signature.replace(/&#39;/g, '\''))
                .addField("Sexe ",sx)
                .addField('Points : ',user.points)
                .addField("Statut ",prem);
                if(user.hamlet) {
                    var hameau = user.hamlet;
                    embed.addField("Hameau ", "------------")
                        .addField("Nom :"+ hameau.name, "Tag : [" + hameau.tag + "]")
                        .addField("Role", hameau.role)
                        .addField("Top : "+hameau.currentRank, "Points : "+hameau.points)
                        .setThumbnail("https://www.loups-garous-en-ligne.com"+hameau.picture)
                        .addField("Nombre de membres", hameau.membersCount);
                    message.channel.send("https://www.loups-garous-en-ligne.com"+hameau.picture);
                }


            return message.channel.send(embed);
        }
    });

};
module.exports.help={
    name:"lginfo"
};
