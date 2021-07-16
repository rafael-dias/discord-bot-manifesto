const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {


    if (message.member.roles.cache.some(role => role.name === 'Moderadores') || message.member.roles.cache.some(role => role.name === 'Administradores')) {

        let membros = args.join('\n')


        let mensagem = `
\`Obrigações da Guild\`

Precisamos de uma justificativa por estar online durante um conteudo mandatório e não estar presente.

Requisição ao(s) seguinte(s) membro(s):

${membros}

\`.......................\`
`

        message.delete().catch(O_o => {});
        message.channel.send(mensagem);
    }
}