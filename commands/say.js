const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.reply(
            "você não tem permissão para `Gerenciar Mensagens` aqui"
        );


    const sayMessage = args.join(' ');
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage).then((message) => {

        // console.log(['SAY MESSAGE: ', message]);

    });
};