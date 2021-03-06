const { MessageEmbed } = require('discord.js');
const { sendError } = require('../util/functions');
exports.execute = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return sendError('You should join a voice channel before using this command!', message.channel);
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return sendError('There is nothing playing right now!', message.channel)
    message.channel.send({
        embed:{
            title: 'Now Playing',
            description: queue.songs[0].title + ' Requested By: ' + '<@' + queue.songs[0].requester + '>',
            color: 'YELLOW',
            thumbnail: queue.songs[0].thumbnail
        }
    })
}

exports.help = {
    name: 'np',
    aliases: ['nowplaying'],
    usage: 'np',
    category: 'music'
}