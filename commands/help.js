const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    // message.delete()
    let msg = `
    AJUDA MANIFESTO bot
    comandos:
    \`--utc\` exibe o horário utc atual
    \`--na\` \`inicio\` \`fim\` exibe sequencia de números aleatórios 
        ex: --na 1 5 // sera enviado uma sequencia semelhante a [4,5,2,1,3]
    \`--arma\` exibe o nome de uma arma aleatória do albion
    `
    message.channel.send(msg);
};