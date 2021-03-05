const { sendError } = require("../util/functions");

exports.execute = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) sendError('You should join a voice channel before using this command!', message.channel);
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return sendError('There is nothing playing right now to resume!', message.channel)
    if(queue.playing !== false)
    queue.connection.dispatcher.resume()
    message.react('▶')
    message.channel.send('Resumed The music!')
}

exports.help = {
    name: 'resume',
    aliases: [],
    usage: 'resume',
    category: 'music'
}