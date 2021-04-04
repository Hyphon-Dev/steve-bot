const { MessageEmbed } = require('discord.js');
const { sendError } = require('../util/functions')

exports.execute = async (client, message, args) => {
    if (!args[0]) return sendError('No user identifyed!', message.channel)
    let user = message.mentions.members.first();
    if (user == undefined) return sendError('User not found!', message.channel)
    let reason = args[1] || "Unspecifyed"

    const sendUSerEmbed = new MessageEmbed()
    .setTitle(`You have been banned from ${message.guild.name}`)
    .addField('Banned by:', message.author)
    .addField(`Reason:`, reason)

    user.send()
}

exports.help = {
    name: 'ban',
    aliases: [],
    usage: 'ban <user> [reason]',
    category: 'moderation'
}