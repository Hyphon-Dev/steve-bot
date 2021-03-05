const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");
const sendError = require('../util/functions')

exports.execute = async(client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("There is nothing playing.", message.channel).catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title} :(`;
    } catch (error) {
      lyrics = `No lyrics found for ${queue.songs[0].title} :(`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setTitle(`Lyrics For ${queue.songs[0].title}`)
      .setDescription(lyrics)
      .setColor("GREEN")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
}

exports.help = {
  name: 'lyrics',
  aliases: [],
  usage: 'lyrics',
  category: 'music'
}