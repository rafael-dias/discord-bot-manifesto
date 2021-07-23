const Discord = require("discord.js");

exports.run = async(client, message, args) => {



    let everyoneRole = msg.guild.roles.cache.find(r => r.name === '@everyone');

    message.guild.channels.create('gank', {
        type: 'text',
        permissionOverwrites: [{
            id: everyoneRole.id,
            deny: ['VIEW_CHANNEL'],
        }, ],
    })


};