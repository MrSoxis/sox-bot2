const Discord=require('discord.js');
const superagent = require("superagent");
const snekfetch = require("snekfetch");
module.exports.run=async(bot,message,args)=>{
  var api="https://www.loups-garous-en-ligne.com/api/profile.php?user="+args[0]+"&fields=id,title,gender,signature,points,isPremium,hamlet,activity,mdj,roles";
    snekfetch.get(api).then(r=>{
        var data=r.body;
        return message.channel.send(data.file);
    };
};
module.exports.help={
    name:"cat"
};
