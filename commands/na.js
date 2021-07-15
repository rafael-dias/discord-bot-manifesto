const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    if (!args[0]) message.channel.send('Informe o numero minimo')
    if (!args[1]) message.channel.send('informe o numero maximo')



    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    let seq = []
    let al = 0
    for (let i = 1; i <= Number(args[1]); i += 1) {
        seq.push('` ' + i + ' `')

    }

    //--numeroaleatorio 1 10

    seq = shuffle(seq)

    message.delete()
    message.channel.send(seq.join(' '));
};