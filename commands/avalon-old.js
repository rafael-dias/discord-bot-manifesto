const Discord = require('discord.js');
const request = require("request");

module.exports.run = async(client, message, args) => {

    const canal = client.channels.fetch(message.channel.id)

    //args:  tier / mapa/ dia / hora
    //--avalon 6.2 'Longfen Arms' 23/07 21h

    let tier = '',
        mapa = '',
        dia = '',
        hora = ''

    if (!args || args.length != 5) {
        let alerta = `:small_orange_diamond: Insira as informações corretas:

\`--avalon \` \`tier\` \`nome-do-mapa\` \`dia\` \`hora\`  \`ip\`  (**nome do mapa n pode conter espaço*)

ex: --avalon 6.2 longfen-arms 01/01 00h`
        message.delete({
            timeout: 10000
        })
        return message.channel.send(alerta).then(msg => msg.delete({
            timeout: 10000
        }))
    }

    tier = args[0]
    mapa = args[1]
    dia = args[2]
    hora = args[3]
    ip = args[4]


    let ultimamsg = canal.lastMessageID

    // console.log(ultimamsg)



    const url = "https://script.google.com/macros/s/AKfycbw1bdidXyKKzRsnjuBrjFfMwIaiKphhL4rHkv59TCp19Ze-mcHpMmtqt-nXsKVxbJ4/exec"
    const msg = `**Dg Avalon Fullclear ${tier}** @here

Mapa: \` ${mapa} \`
Dia: \` ${dia} \`
Hora: \` ${hora} \`
IP: \` ${ip} \`

Builds: <#770027301386977330>

<:1:867950823165009920> Tank martelo: \`  \`
<:2:867950824800792596> Tank cambriana: \`  \`
<:3:867950825220218962> Tank suporte: \`  \`
<:4:867950825564147794> Healer tank: \`  \`
<:5:867950825731932201> Arcano 1: \`  \`
<:6:867950826344316938> Arcano 2: \`  \`
<:7:867950829947220028> Healer pt 1: \`  \`
<:8:867950838142873650> Healer pt 2: \`  \`
<:9_:867950838180630558> Raíz férrea: \`  \`
<:10:867950838071586849> Chama - sombra + corta cura: \`  \`
<:11:867950837039783997> Melee dps: \`  \`
<:12:867950838239354900> Frost 1: \`  \`
<:13:867950838201581578> Frost 2: \`  \`
<:14:867950838180614234> Ranged dps 1: \`  \`
<:15:867950838184824902> Ranged dps 2: \`  \`
<:16:867950838256136262> Ranged dps 3: \`  \`
<:17:867950838310637688> Ranged dps 4: \`  \`
<:18:867950838243532811> Ranged dps 5: \`  \`
<:19:867950838268715019> Ranged dps 6: \`  \`
<:20:867950838356774912> Ranged dps 7: \`  \`

...
   
    `
    message.delete()
    message.channel.send(msg).then((message) => {


        request({
                method: "GET",
                url: url,
                json: true,
                qs: {
                    id: message.channel.lastMessageID,
                    mapa: mapa,
                    dia: dia,
                    tier: tier,
                    hora: hora,
                    ip: ip
                }
            },
            (err, res, body) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // console.log(message.channel.lastMessageID)

                const emoji = ['867950823165009920', '867950824800792596', '867950825220218962', '867950825564147794', '867950825731932201', '867950826344316938', '867950829947220028', '867950838142873650', '867950838180630558', '867950838071586849', '867950837039783997', '867950838239354900', '867950838201581578', '867950838180614234', '867950838184824902', '867950838256136262', '867950838310637688', '867950838243532811', '867950838268715019', '867950838356774912']
                for (const i in emoji) {
                    message.react(emoji[i])
                }
            });

    })







    // request({
    //         method: "GET",
    //         url: url,
    //         json: true,
    //     },
    //     (err, res, body) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         console.log(body);
    //         // let info = 

    //     }
    // );

    // const msg = await message.channel.send("Beep");
    // msg.edit("Boop");
    // you can do whatever you want with the msg variable; it returns the normal message object.
    // msg.react("👋")
    // function z(n) {
    //     return ('0' + n).slice(-2);
    // }

    // const date = new Date()
    // let utc = z(date.getUTCHours()) + ':' + z(date.getUTCMinutes());


    // message.delete().catch(O_o => {});
    // message.channel.send('` 🕕 ' + utc + ' utc `');
};