const { sendError } = require("../util/functions");

exports.execute = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return sendError('You should join a voice channel before using this command!', message.channel);

    let queue = message.client.queue.get(message.guild.id)

    if(!args[0]) return message.channel.send({
        embed: {
            description: 'The current volume is set to: ' + queue.volume
        }
    })

    if(args[0] > 10) return sendError('You can only change the volume from 1/10!', message.channel)

    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    queue.volume = args[0]
    message.channel.send({
        embed: {
            description: 'Volume is set to ' + args[0]
        }
    })
}

exports.help = {
    name: 'volume',
    aliases: [],
    usage: 'volume <volumeLevel>',
    category: 'music'
}