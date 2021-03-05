# Steve Bot

This is Steve Bot a **work in progress** discord bot wroten in JavaScript

## Features To Come
*Moderation*
*Economy Game*
*better README file*

## 🤝 Contributing

To get this repository: 
1: [Fork the repository](https://github.com/Hyphon-Dev/steve-bot/fork)
2: Clone your fork: `Clone your fork: git clone https://github.com/your-username/steve-bot.git`
3: Create your feature branch: `git checkout -b my-new-feature`
4: Commit your changes: `git commit -am 'Add some feature'`
5: Push to the branch: `git push origin my-new-feature`
6: Submit a pull request

To add a command just make a pull request and use this template for a command:
```js
// requires
    const module = require('module')
//

// command
exports.execute = (client, message, args) => {
    // code
}
//

// info
exports.help = {
    name: 'command',
    aliases: ['aliases'],
    usage: 'command <howToUse>',
    category: 'bot_info, minecraft_info, eco, moderation, music'
}
//
```
