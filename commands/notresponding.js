module.exports = {
    name: 'notresponding',
    description: "Displays the support message for the not responding issue",
    execute(message, args, Discord) {
        message.delete();
        if (message.author.bot) return;

        let embed = new Discord.MessageEmbed()
        .setAuthor('So, the bot isn\'t responding?')
        .addField('Find information and troubleshooting problems here:', '[Astroo Music Docs - Not Responding](https://astroo.party/help.noresponse.html)')
        message.channel.send(embed)
          
    }
}