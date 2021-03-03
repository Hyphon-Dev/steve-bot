const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch');
const chalk = require('chalk');
const log = console.log;
const { sendError } = require('../util/functions')

exports.execute = (client, message, args) => {
    const skinEmbed = new MessageEmbed()
    .setTimestamp()
    .setFooter("Requested by: " + message.author.tag)

    fetch('https://playerdb.co/api/player/minecraft/' + args[0])
    .then(res => res.json())
    .then(json => {
        if (json.code == 'minecraft.api_failure') {
            return sendError('The username ' + args[0] + ' does not exist!', message.channel)
        } 
        skinEmbed.setTitle(`${args[0]}'s Avatar`)
        skinEmbed.setImage("https://mc-heads.net/body/" + json.data.player.id)
        log(json)
        message.channel.send(skinEmbed)
        }    
    )}

exports.help = {
    name: 'skin',
    aliases: ['mcskin'],
    usage: 'mcskin <mc_username>',
    category: 'minecraft_info'
}