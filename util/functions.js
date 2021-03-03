const { MessageEmbed } = require("discord.js")

exports.sendError = (err, channel) => {
    if (err == null || channel == null) return console.error("[sendError]: Invalid Arguments! Usage: sendError(err, channel)");
    const errorEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('❌ERROR')
    .setFooter('steve bot')
    .setDescription('An error has occurred!')
    .addField('Error:', err)
    .setTimestamp()
    channel.send(errorEmbed)
}