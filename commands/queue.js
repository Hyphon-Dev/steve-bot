const { MessageEmbed } = require('discord.js');
const { sendError } = require('../util/functions');

exports.execute = async (client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return sendError('You should join a voice channel before using this command!', message.channel);
    const queue = message.client.queue.get(message.guild.id)
    let status;
    if(!queue) status = 'There is nothing in queue!'
    else status = queue.songs.map(x => '• ' + x.title + ' -Requested by ' + `<@${x.requester.id}>`).join('\n')
    if(!queue) np = status
    else np = queue.songs[0].title
    if(queue) thumbnail = queue.songs[0].thumbnail
    else thumbnail = message.guild.iconURL()
    let embed = new MessageEmbed()
    .setTitle('Queue')
    .setThumbnail(thumbnail)
    .setColor('GREEN')
    .addField('Now Playing', np, true)
    .setDescription(status)
    message.channel.send(embed)
}

exports.help = {
    name: 'queue',
    aliases: [],
    usage: 'queue',
    category: 'music'
}