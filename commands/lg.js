const Discord=require('discord.js');
const superagent = require("superagent");
const snekfetch = require("snekfetch");
module.exports.run=async(bot,message,args)=>{
  var api="https://www.loups-garous-en-ligne.com/api/badges.php?pseudo="+args[0];
  snekfetch.get(api).then(r=>{
      var x=(r.body.toString('utf8'));
      var user=JSON.parse(x);
      if(user.error===0){
          var prem ="";
          if(user.premium==="true") prem="Prenium";
          else prem = "Non prenium";
          var sx = "";
          if(user.sexe===1) sx = "Homme";
          else sx = "Femme";
          let embed = new Discord.RichEmbed()
              .setDescription('Profil LGEL')
              .setColor('#B40404')
              .addField('Pseudo : ', args[0])
              .addField('Points : ',user.points)
              .addField("Statut ",prem)
              .addField("Sexe ",sx)
              .addField("Talent Fun : ",user.talentFun)
              .addField("Talent Serieuse : ",user.talentSerieuse);

          return message.channel.send(embed);
      }
      else message.channel.send('Joueur introuvable');
  });

};
module.exports.help={
    name:"lg"
};