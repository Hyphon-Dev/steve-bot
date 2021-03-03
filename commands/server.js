const { sendError } = require('../util/functions')
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

exports.execute = (client, message, args) => {
    fetch('https://api.mcsrvstat.us/2/' + args[0])
    .then(res => res.json())
    .then(json => {
        console.log(json)
        if(json.ip == "") {
            return sendError('The ip or hostname ' + args[0] + " doesn't exits!")
        } else {
            fetch('https://api.mcsrvstat.us/icon/' + args[0])
            .then(pic => {
            const ServerEmbed = new MessageEmbed()
            .setTitle(`${args[0]}'s server info`)
            .setThumbnail(pic)
            .addField('Hostname:', json.hostname)
            .addField('Version:', json.version)
            .addField('Players:', `${json.players.online}/${json.players.max}`)
            .addField('MOTD:', json.motd.clean)
            message.channel.send(ServerEmbed)
            }
        )}
    })
}

exports.help = {
    name: 'server',
    aliases: ['mcserver'],
    usage: 'server <server_address>',
    category: 'minecraft_info'
}