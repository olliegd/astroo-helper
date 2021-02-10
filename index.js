require('dotenv').config()
const { Client } = require('discord.js');
const client = new Client();
const Discord = require('discord.js')
client.on('ready', () =>{
    console.log(client.user.tag + ' Has Logged In Succesfully.')
})

const fs = require("fs");
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.on('message', message => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(client.commands.get(command)) {
        client.commands.get(command).execute(client, message, args, Discord)
    }
});

client.login(process.env.BOT_TOKEN)
