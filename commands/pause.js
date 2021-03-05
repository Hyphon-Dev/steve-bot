const { sendError } = require("../util/functions");

exports.execute = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return sendError('You should join a voice channel before using this command!', message.channel);
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return sendError('There is nothing playing right now to pause!', message.channel)
    if(queue.playing !== false)
    queue.connection.dispatcher.pause()
    message.react('⏸')
    message.channel.send('Paused The music!')
}

exports.help = {
    name: 'pause',
    aliases: [],
    usage: 'pause',
    category: 'music'
}