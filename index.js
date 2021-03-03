const Discord = require('discord.js')
const client = new Discord.Client({ "disableMentions": "true" })
const config = require('./botConfig.js')
const fs = require('fs')
const db = require('quick.db')
const chalk = require('chalk')
const log = console.log;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.db = db;
client.config = config;
client.shop = {
    "diamond": {
        price: 500,
        id: 1
    }
}

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command); 
        log(chalk.bgYellow.bold.black(`Attempting to load ${command.help.name}.`))
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});

client.login(client.config.token)