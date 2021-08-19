const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {


    if (args[0] == '' && args[1] == '') {
        return message.channel.send('Mencione um usuário e informe o nick do jogo').then(msg => msg.delete({
            timeout: 3000
        }))
    }

    if (message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_NICKNAMES") && message.guild.members.cache.get(message.author.id).hasPermission("CHANGE_NICKNAME")) {

        let target = message.mentions.users.first()
        let member = message.guild.members.cache.get(target.id)
        console.log('[args]', args[0]);

        const nick = member.displayName
        console.log(nick);
        if (nick.indexOf('[MA]') != -1) {
            const nickRmSx = nick.split('[MA]')[1].trim();
            const nickname = '[IN] ' + nickRmSx
            member.setNickname(nickname)
        }

        var roleInativo = member.guild.roles.cache.find(role => role.name === "Inativos");
        var roleMembros = member.guild.roles.cache.find(role => role.name === "Membros");
        member.roles.remove(roleMembros);
        member.roles.add(roleInativo);

        message.delete()
        message.channel.send('✅ Usuário Inativo!').then(msg => msg.delete({
            timeout: 2000
        }))

    } else {
        message.channel.sendMessage("Você não tem permissão para registrar um membro").then(msg => msg.delete({
            timeout: 2000
        }));
    }
};