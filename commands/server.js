const { sendError } = require('../util/functions')
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

exports.execute = (client, message, args) => {
    try {
    fetch('https://api.mcsrvstat.us/2/' + args[0])
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.ip == "") {
                return sendError('The ip or hostname ' + args[0] + " doesn't exits!", message.channel)
            } else {
                const ServerEmbed = new MessageEmbed()
                .setTitle(`${args[0]}'s server info`)
                .setThumbnail('https://api.mcsrvstat.us/icon/' + args[0])
                .addField('Hostname:', json.hostname)
                .addField('Version:', json.version)
                .addField('Players:', `${json.players.online}/${json.players.max}`)
                .addField('MOTD:', json.motd.clean)
                if (json.online == true) {
                    ServerEmbed.setColor('GREEN')
                } else {
                    ServerEmbed.setColor('RED')
                }
                message.channel.send(ServerEmbed)
            }
        })
    }
    catch(e) {
        return sendError(e, message.channel)
    }
    
}

exports.help = {
    name: 'server',
    aliases: ['mcserver'],
    usage: 'server <server_address>',
    category: 'minecraft_info'
}