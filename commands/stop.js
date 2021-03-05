const { sendError } = require("../util/functions");

exports.execute = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return sendError('You should join a voice channel before using this command!', message.channel);
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send('There is nothing playing to be stopped!', message.channel)
    message.react('✅')
    queue.songs = []
    queue.connection.dispatcher.end('Stopped!')
}

exports.help = {
    name: 'stop',
    aliases: [],
    usage: 'stop',
    category: 'music'
}