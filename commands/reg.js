const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    if (message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_NICKNAMES") && message.guild.members.cache.get(message.author.id).hasPermission("CHANGE_NICKNAME")) {

        let target = message.mentions.users.first()
        let member = message.guild.members.cache.get(target.id)
        const nickname = '[MA] ' + args[1];
        member.setNickname(nickname)

        var role = member.guild.roles.cache.find(role => role.name === "Membros");
        member.roles.add(role);

        message.delete()
    } else {
        message.channel.sendMessage("Você não tem permissão para registrar um membro");
    }
};