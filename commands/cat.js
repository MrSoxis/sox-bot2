const Discord=require('discord.js');
const superagent = require("superagent");
const snekfetch = require("snekfetch");
module.exports.run=async(bot,message,args)=>{
  var api="https://aws.random.cat/meow";
    snekfetch.get(api).then(r=>{
        var data=r.body;
      message.delete();
     return message.channel.send("Voici un chat pour toi :heart:", {
    file: data.file
    });
    });
};
module.exports.help={
    name:"cat"
};
