const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
if(!args[0]) message.channel.send('Informe o numero minimo')
if(!args[1]) message.channel.send('informe o numero maximo')



  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
 }
  
let seq = []
let al = 0
for (let i ; i< args[1]; i+=1 ){
  
  while(seq.indexOf(al)!= -1){
    al = getRandomInt(args[0], args[1])
  }
  seq.push(al)
  
}


  message.delete()
  message.channel.send(seq);
};