const Discord = require('discord.js');
module.exports = (client) => {

    client.on('messageReactionAdd', async(reaction_orig, user) => {
        console.log('[INDEX REACT]:', reaction_orig);
        console.log('[INDEX USER]:', user);
        if (reaction_orig.message.author.id === user.id) {
            // the reaction is coming from the same user who posted the message
            return;
        }

    })

}