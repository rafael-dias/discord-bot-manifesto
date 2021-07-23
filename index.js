const express = require('express');
const app = express();


// console.log(process.env)
const mySecret = process.env['manifesto2021']

app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos





client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') {
        const channel = client.channels.cache.find(channel => channel.name === 'dm-bot')
        msg = `

\` De: \` ${message.author}

\` Conteúdo: \`

${message}

\`.......................\`
`
        channel.send(msg)

        return;
    }




    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
        console.error('Erro:' + err);
    }
});

const avalon = require('./avalon/reacoes')


const request = require("request");
client.on('messageReactionAdd', async(reaction_orig, user) => {


    if (reaction_orig.message.author.id === '741043625827500142' && user.id != reaction_orig.message.author.id) {
        const url = "https://script.google.com/macros/s/AKfycbz6wd51Ag148uVx2FzDhREgfiXY93WF-saKXaptjV_kK2LpPYsP8ezhNmNVW6uBGxaN/exec"



        // console.log('[INDEX REACT]:', reaction_orig);
        // console.log('[INDEX USER]:', user);
        let funcao = ''
        if (reaction_orig._emoji.name == '1_') {
            funcao = 1
        }
        if (reaction_orig._emoji.name == '2_') {
            funcao = 2
        }
        if (reaction_orig._emoji.name == '3_') {
            funcao = 3
        }
        if (reaction_orig._emoji.name == '4_') {
            funcao = 4
        }
        if (reaction_orig._emoji.name == '5_') {
            funcao = 5
        }
        if (reaction_orig._emoji.name == '6_') {
            funcao = 6
        }
        if (reaction_orig._emoji.name == '7_') {
            funcao = 7
        }
        if (reaction_orig._emoji.name == '8_') {
            funcao = 8
        }
        if (reaction_orig._emoji.name == '9_') {
            funcao = 9
        }
        if (reaction_orig._emoji.name == '10') {
            funcao = 10
        }
        if (reaction_orig._emoji.name == '11') {
            funcao = 11
        }
        if (reaction_orig._emoji.name == '12') {
            funcao = 12
        }
        if (reaction_orig._emoji.name == '13') {
            funcao = 13
        }
        if (reaction_orig._emoji.name == '14') {
            funcao = 14
        }
        if (reaction_orig._emoji.name == '15') {
            funcao = 15
        }
        if (reaction_orig._emoji.name == '16') {
            funcao = 16
        }
        if (reaction_orig._emoji.name == '17') {
            funcao = 17
        }
        if (reaction_orig._emoji.name == '18') {
            funcao = 18
        }
        if (reaction_orig._emoji.name == '19') {
            funcao = 19
        }
        if (reaction_orig._emoji.name == '20') {
            funcao = 20
        }


        // console.log('NOME NICK: ', reaction_orig.message.guild.members.cache.get(user.id).displayName);
        reaction_orig.message.channel
            .send(`:small_blue_diamond: *registrando sua vaga...*`).then(msg => msg.delete({
                timeout: 2000
            }))
        request({
                method: "GET",
                url: url,
                json: true,
                qs: {
                    avalon: true,
                    usuario: reaction_orig.message.guild.members.cache.get(user.id).displayName,
                    funcao: funcao
                }
            },
            (err, res, body) => {
                if (err) {
                    console.log(err);
                    return;
                }

                //    if(reaction_orig.message == )
                // console.log('[retorno gas]:', body)
                // console.log('[body.idmsg]:', body.idmsg)
                // console.log('[body.idmsg[0]]:', body.idmsg[0][0])

                if (reaction_orig.message.id == body.idmsg[0][0]) {

                    const msg = `**Dg Avalon Fullclear ${body.tier[0][0]}**

Mapa: \` ${body.mapa[0][0]} \`
Dia: \` ${body.dia[0][0]} \`
Hora: \` ${body.hora[0][0]} \`

<:1:867950823165009920> Tank martelo: \` ${body.funcao1[0][0]} \`
<:2:867950824800792596> Tank cambriana: \` ${body.funcao2[0][0]} \`
<:3:867950825220218962> Tank suporte: \` ${body.funcao3[0][0]} \`
<:4:867950825564147794> Healer tank: \` ${body.funcao4[0][0]} \`
<:5:867950825731932201> Arcano 1: \` ${body.funcao5[0][0]} \`
<:6:867950826344316938> Arcano 2: \` ${body.funcao6[0][0]} \`
<:7:867950829947220028> Healer pt 1: \` ${body.funcao7[0][0]} \`
<:8:867950838142873650> Healer pt 2: \` ${body.funcao8[0][0]} \`
<:9_:867950838180630558> Raíz férrea: \` ${body.funcao9[0][0]} \`
<:10:867950838071586849> Chama - sombra + corta cura: \` ${body.funcao10[0][0]} \`
<:11:867950837039783997> Melee dps: \` ${body.funcao11[0][0]} \`
<:12:867950838239354900> Frost 1: \` ${body.funcao12[0][0]} \`
<:13:867950838201581578> Frost 2: \` ${body.funcao13[0][0]} \`
<:14:867950838180614234> Ranged dps 1: \` ${body.funcao14[0][0]} \`
<:15:867950838184824902> Ranged dps 2: \` ${body.funcao15[0][0]} \`
<:16:867950838256136262> Ranged dps 3: \` ${body.funcao16[0][0]} \`
<:17:867950838310637688> Ranged dps 4: \` ${body.funcao17[0][0]} \`
<:18:867950838243532811> Ranged dps 5: \` ${body.funcao18[0][0]} \`
<:19:867950838268715019> Ranged dps 6: \` ${body.funcao19[0][0]} \`
<:20:867950838356774912> Ranged dps 7: \` ${body.funcao20[0][0]} \`
   
 ..................
    `
                    reaction_orig.message.edit(msg)

                }

            });
        // console.log('[INDEX REACT]:', reaction_orig);
        // the reaction is coming from the same user who posted the message
        // console.log('reagiu a mensagem do bot');
        return;
    }

})

client.on('messageReactionRemove', async(reaction_orig, user) => {
    if (reaction_orig.message.author.id === '741043625827500142' && user.id != reaction_orig.message.author.id) {
        const url = "https://script.google.com/macros/s/AKfycbz6wd51Ag148uVx2FzDhREgfiXY93WF-saKXaptjV_kK2LpPYsP8ezhNmNVW6uBGxaN/exec"

        let funcao = ''
        if (reaction_orig._emoji.name == '1_') {
            funcao = 1
        }
        if (reaction_orig._emoji.name == '2_') {
            funcao = 2
        }
        if (reaction_orig._emoji.name == '3_') {
            funcao = 3
        }
        if (reaction_orig._emoji.name == '4_') {
            funcao = 4
        }
        if (reaction_orig._emoji.name == '5_') {
            funcao = 5
        }
        if (reaction_orig._emoji.name == '6_') {
            funcao = 6
        }
        if (reaction_orig._emoji.name == '7_') {
            funcao = 7
        }
        if (reaction_orig._emoji.name == '8_') {
            funcao = 8
        }
        if (reaction_orig._emoji.name == '9_') {
            funcao = 9
        }
        if (reaction_orig._emoji.name == '10') {
            funcao = 10
        }
        if (reaction_orig._emoji.name == '11') {
            funcao = 11
        }
        if (reaction_orig._emoji.name == '12') {
            funcao = 12
        }
        if (reaction_orig._emoji.name == '13') {
            funcao = 13
        }
        if (reaction_orig._emoji.name == '14') {
            funcao = 14
        }
        if (reaction_orig._emoji.name == '15') {
            funcao = 15
        }
        if (reaction_orig._emoji.name == '16') {
            funcao = 16
        }
        if (reaction_orig._emoji.name == '17') {
            funcao = 17
        }
        if (reaction_orig._emoji.name == '18') {
            funcao = 18
        }
        if (reaction_orig._emoji.name == '19') {
            funcao = 19
        }
        if (reaction_orig._emoji.name == '20') {
            funcao = 20
        }

        reaction_orig.message.channel
            .send(`:small_blue_diamond: *removendo sua vaga...*`).then(msg => msg.delete({
                timeout: 2000
            }))
        request({
                method: "GET",
                url: url,
                json: true,
                qs: {
                    avalon: true,
                    remover: true,
                    usuario: reaction_orig.message.guild.members.cache.get(user.id).displayName,
                    funcao: funcao
                }
            },
            (err, res, body) => {
                if (err) {
                    console.log(err);
                    return;
                }



                if (reaction_orig.message.id == body.idmsg[0][0]) {

                    const msg = `**Dg Avalon Fullclear ${body.tier[0][0]}**

Mapa: \` ${body.mapa[0][0]} \`
Dia: \` ${body.dia[0][0]} \`
Hora: \` ${body.hora[0][0]} \`

<:1:867950823165009920> Tank martelo: \` ${body.funcao1[0][0]} \`
<:2:867950824800792596> Tank cambriana: \` ${body.funcao2[0][0]} \`
<:3:867950825220218962> Tank suporte: \` ${body.funcao3[0][0]} \`
<:4:867950825564147794> Healer tank: \` ${body.funcao4[0][0]} \`
<:5:867950825731932201> Arcano 1: \` ${body.funcao5[0][0]} \`
<:6:867950826344316938> Arcano 2: \` ${body.funcao6[0][0]} \`
<:7:867950829947220028> Healer pt 1: \` ${body.funcao7[0][0]} \`
<:8:867950838142873650> Healer pt 2: \` ${body.funcao8[0][0]} \`
<:9_:867950838180630558> Raíz férrea: \` ${body.funcao9[0][0]} \`
<:10:867950838071586849> Chama - sombra + corta cura: \` ${body.funcao10[0][0]} \`
<:11:867950837039783997> Melee dps: \` ${body.funcao11[0][0]} \`
<:12:867950838239354900> Frost 1: \` ${body.funcao12[0][0]} \`
<:13:867950838201581578> Frost 2: \` ${body.funcao13[0][0]} \`
<:14:867950838180614234> Ranged dps 1: \` ${body.funcao14[0][0]} \`
<:15:867950838184824902> Ranged dps 2: \` ${body.funcao15[0][0]} \`
<:16:867950838256136262> Ranged dps 3: \` ${body.funcao16[0][0]} \`
<:17:867950838310637688> Ranged dps 4: \` ${body.funcao17[0][0]} \`
<:18:867950838243532811> Ranged dps 5: \` ${body.funcao18[0][0]} \`
<:19:867950838268715019> Ranged dps 6: \` ${body.funcao19[0][0]} \`
<:20:867950838356774912> Ranged dps 7: \` ${body.funcao20[0][0]} \`
   
 ..................
    `
                    reaction_orig.message.edit(msg)
                }




            })


    }
    console.log('removeu reação');

})



client.login(mySecret); //Ligando o Bot caso ele consiga acessar o token