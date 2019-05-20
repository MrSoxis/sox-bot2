const Discord=require('discord.js');
const superagent = require("superagent");
const snekfetch = require("snekfetch");
module.exports.run=async(bot,message,args)=>{
  var api="https://dog.ceo/api/breeds/image/random";
    snekfetch.get(api).then(r=>{
        var data=r.body;
        if(data.status=="success"){
      message.delete();
     return message.channel.send("Voici un chien pour toi :heart:", {
    file: data.message
    });};
    });
};
module.exports.help={
    name:"dog"
};
