const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {
  message.delete();
const content = args.join(" ");
const nickName = message.guild.members.cache.get(message.author.id).displayName


  let embed = new Discord.MessageEmbed() 
    .setColor(`#4cd8b2`) 
    .setTitle(`AVALON -  ${nickName}`) 
    .setDescription(`
    1️⃣ tank -

    2️⃣ healer -
    
    `)
    .setFooter(`• Autor: ${nickName}` );
 
 const emoji = ['1️⃣','2️⃣']
 await message.channel.send(embed)
  .then(function (message) {
    for(const i in emoji){
       message.react(emoji[i])       
      }
            }).catch(function() {
              //Something
             });

client.on('messageReactionAdd', (reaction_orig, user) => {
  if (reaction_orig.message.author.id === user.id) {
    // the reaction is coming from the same user who posted the message
    return;
  }

  manageBoard(reaction_orig);
});

function manageBoard(x){
console.log(x)
}
 

};

