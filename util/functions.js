const { MessageEmbed } = require("discord.js")

exports.sendError = (err, channel) => {
    const errorEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('ERROR')
}