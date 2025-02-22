require('dotenv').config()
const { Client } = require('discord.js');
const client = new Client();
const Discord = require('discord.js')
client.on('ready', () =>{
    console.log(client.user.tag + ' Has Logged In Succesfully.')
})

const fs = require('fs')
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(process.env.BOT_PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.BOT_PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(client.commands.get(command)) {
        client.commands.get(command).execute(message, args, Discord)
    }
});

client.on('message', message =>{
    if(message.content.startsWith('1')){
        message.delete();
        let em = new Discord.MessageEmbed()
        .setAuthor('You cant invite the bot into the server.')
        .addField('Find information and troubleshooting problems here:', "[Astroo Music Docs - Cant Invite](https://astroo.party/help.inviting.html)")
        message.channel.send(embed=em).then(msg => {
            msg.delete({ timeout:10000 })
          })
    }
})

client.on('message', message =>{
    if(message.content.startsWith('2')){
        message.delete();
        let em = new Discord.MessageEmbed()
        .setAuthor('The bot is not responding.')
        .addField('Find information and troubleshooting problems here:', '[Astroo Music Docs - No Response](https://astroo.party/help.inviting.html)')
        message.channel.send(embed=em).then(msg => {
            msg.delete({ timeout:10000 })
          })
    }
})

client.on('message', message =>{
    if(message.content.startsWith('3')){
        message.delete();
        let em = new Discord.MessageEmbed()
        .setAuthor('You cant here astroo/the sound is glitchy.')
        .addField('Find information and troubleshooting problems here:', '[Astroo Music Docs - No Sound/Glitching](https://astroo.party/help.noresponse.html)')
        message.channel.send(embed=em).then(msg => {
            msg.delete({ timeout:10000 })
          })
    }
})

client.on('message', message =>{
    if(message.content.startsWith('4')){
        message.delete()
        let em = new Discord.MessageEmbed()
        .setAuthor('So, your problem wasn\'t listed here..')
        .addField('Find information and troubleshooting problems here:', '[Astroo Music Docs - Extra Support](https://astroo.party/help.html)')
        message.channel.send(embed=em).then(msg => {
            msg.delete({ timeout:10000 })
          })
    }
})

client.login(process.env.BOT_TOKEN)
