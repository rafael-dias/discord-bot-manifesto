const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  function z(n) {
  return ('0' + n).slice(-2);
}
 
  const date = new Date()
  let utc = z(date.getUTCHours()) + ':' + z(date.getUTCMinutes());

  
  message.delete().catch(O_o => {});
  message.channel.send(':alarm_clock: **'+utc+'** utc');
};