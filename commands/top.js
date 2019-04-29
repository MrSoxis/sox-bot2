const Discord=require('discord.js');
const snekfetch = require("snekfetch");
module.exports.run=async(bot,message,args)=>{
    var api="https://lgelinfos.fr/api/top";
    snekfetch.get(api).then(r=>{
        var data=r.body;
        let embed = new Discord.RichEmbed()
            .setDescription('Top du '+data.date)
            .setColor('#B40404')
            .setThumbnail("https://www.loups-garous-en-ligne.com/stuff/facebook/carte2.png")
            .addField(":trophy: :first_place:  1ER :first_place:  :trophy:",data.top[0].playername+"\nAvec un total de **"+data.top[0].points+"** pour **"+data.top[0].parties+"** parties ! EXCEPTIONNEL THE BOSS !")
            .addField(":second_place: 2E :second_place:",data.top[1].playername+"\nAvec un total de **"+data.top[1].points+"** pour **"+data.top[1].parties+"** parties ! Une deuxième place bien méritée !")
            .addField(":third_place: 3E :third_place: ",data.top[2].playername+"\nAvec un total de **"+data.top[2].points+"** pour **"+data.top[2].parties+"** parties ! La famosa medaille de bronze")
        ;
        return message.channel.send(embed);
    });

};
module.exports.help={
    name:"top"
};
