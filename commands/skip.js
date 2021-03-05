const { sendError } = require("../util/functions");

exports.execute = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return sendError('You should join a voice channel before using this command!', message.channel);
    let queue = message.client.queue.get(message.guild.id)
    if(!queue){ return sendError('There is nothing in the queue right now! add using `steve play <songName>`', message.channel)
}
    if(queue.songs.length !== 0) {
        message.react('✅')
        queue.connection.dispatcher.end('Okie skipped!')
    }
}

exports.help = {
    name: 'skip',
    aliases: [],
    usage: 'skip',
    category: 'music'
}