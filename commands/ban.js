const { MessageEmbed } = require('discord.js');
const { sendError } = require('../util/functions')

exports.execute = async (client, message, args) => {
    if (!args[0]) return sendError('No user identifyed!', message.channel)
    let user = message.mentions.members.first();
    if (user == undefined) return sendError('User not found!', message.channel)
    let amountDays = args[1] || 'perm'
    let banReason = args[2] || "Unspecifyed"
    var d = new Date()

    const sendUserEmbed = new MessageEmbed()
    .setTitle(`You have been banned from ${message.guild.name}`)
    .addField('Banned by:', message.author)
    .addField(`Reason:`, reason)
    .addField(`Banned On:`, `${d.getMonth}/${d.getDay}/${d.getFullYear} at ${d.getTime}`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))

    user.send(sendUserEmbed).then(function(){
        if (!days == 'perm') {
            user.ban({ days: amountDays, reason: banReason})
        } else if(days == 'perm') {
            user.ban({ reason: banReason })
        }
    })
}

exports.help = {
    name: 'ban',
    aliases: [],
    usage: 'ban <user> [days] [reason]',
    category: 'moderation'
}