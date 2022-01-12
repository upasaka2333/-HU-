const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '好耶') {
        msg.reply('好耶');
    }
});

client.login('OTMwODAyOTU0Mjc2MDc3NTc4.Yd7LzQ.ZHIbbHdfb-i1frTTMOo1ehhdBWs');