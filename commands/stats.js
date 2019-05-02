const Discord=require('discord.js');
const snekfetch = require("snekfetch");
module.exports.run=async(bot,message,args)=>{
    var api="https://lgelinfos.fr/api/stats/"+args[0];
    snekfetch.get(api).then(r=>{
        var data=r.body;
        if(data.error){
            message.channel.send("Error : "+data.error);
        }
        else {
            let commentary;
            if(data.points<50){
                commentary="Peut mieux faire"
            }
            else if(data.points<200){
                commentary="Bonne perf"
            }
            else {
                commentary="Là t'as abusé"
            }
            if(data.realName="Soxisse"){
                commentary = ":crown Quelles stats de boss ! :crown:";    
            }
            let msgRatio="";
            if(data.parties>0){
                let ratio=Math.floor((data.points/data.parties)*10)/10;
                msgRatio="Ratio : "+ratio;
            }
            let embed = new Discord.RichEmbed()
                .setDescription('Points journalier de ' + data.realName)
                .setColor('#B40404')
                .setThumbnail("https://www.loups-garous-en-ligne.com/stuff/facebook/carte2.png")
                .addField(data.points+" points en "+data.parties+ " parties "+"\n\t\t\t"+msgRatio,commentary)
            ;
            return message.channel.send(embed);
        }

    });

};
module.exports.help={
    name:"stats"
};
