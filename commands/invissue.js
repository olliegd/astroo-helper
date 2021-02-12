module.exports = {
    name: 'invissue',
    description: "Displays the support message for the invite issue",
    execute(message, args, Discord) {
        message.delete();
        if (message.author.bot) return;

        let embed = new Discord.MessageEmbed()
        .setAuthor('You cant invite the bot into the server.')
        .addField('Find information and troubleshooting problems here:', '[Astroo Music Docs - Cant Invite](https://astroo.party/help.inviting.html)')
        message.channel.send(embed)
         

    }
}