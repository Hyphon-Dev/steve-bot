const { MessageEmbed } = require('discord.js')

exports.execute = (client, message, args) => {
    const helpEmbed = new MessageEmbed()
    .setTitle(`Steve Commands`)
    .setDescription(`Total Commands: ${client.commands.size}`)
    .setTimestamp()
    .setColor(`RANDOM`)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

    const helpEmbed2 = new MessageEmbed()
    .setTitle(`Steve Commands`)
    .setDescription(`Total Commands: ${client.commands.size}`)
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setColor(`RANDOM`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

        var msg = "```Steve Commands\nbot info -- 🤖\nminecraft info -- ⛏\neco/gambling -- 🎴\nmoderation -- 🔨\nmusic -- 🎶```";
        helpEmbed.addField(`Categorys:`, msg)
        message.channel.send(helpEmbed).then(m => {
            m.react("🤖");
            m.react("⛏");
            m.react("🎴");
            m.react("🔨");
            m.react("🎶");
            const filter = (reaction, user) => {
                return [`🤖`, `⛏`, `🎴`, `🔨`, `🎶`].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            m.Reactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
            
                    if (reaction.emoji.name === '🤖') {
                        client.commands.forEach(cmd => {
                            if (cmd.help.category == 'bot_info') {
                            helpEmbed2.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix} ${cmd.help.usage}\``, true);
                            }
                        })
                        m.delete().then(() => {
                            message.channel.send(helpEmbed2)
                        })
                    } else if (reaction.emoji.name == '⛏') {
                        client.commands.forEach(cmd => {
                            if (cmd.help.category == 'minecraft_info') {
                            helpEmbed2.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix} ${cmd.help.usage}\``, true);
                            }
                        })
                        m.delete().then(() => {
                            message.channel.send(helpEmbed2)
                        })
                    } else if (reaction.emoji.name == '🎴') {
                        client.commands.forEach(cmd => {
                            if (cmd.help.category == 'eco') {
                            helpEmbed2.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix} ${cmd.help.usage}\``, true);
                            }
                        })
                        m.delete().then(() => {
                            message.channel.send(helpEmbed2)
                        })
                    } else if (reaction.emoji.name == '🔨') {
                        client.commands.forEach(cmd => {
                            if (cmd.help.category == 'moderation') {
                            helpEmbed2.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix} ${cmd.help.usage}\``, true);
                            }
                        })
                        m.delete().then(() => {
                            message.channel.send(helpEmbed2)
                        })
                    } else if (reaction.emoji.name == '🎶') {
                        client.commands.forEach(cmd => {
                            if (cmd.help.category == 'music') {
                            helpEmbed2.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix} ${cmd.help.usage}\``, true);
                            }
                        })
                        m.delete().then(() => {
                            message.channel.send(helpEmbed2)
                        })
                    }
                })
                .catch(collected => {
                    console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
                    m.reply('Reaction Timeout!');
                });
            }
        )}


exports.help = {
    name: 'help',
    aliases: [],
    usage: 'help [command]',
    category: 'bot_info'
}