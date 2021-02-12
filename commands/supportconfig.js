module.exports = {
    name: 'supportconfig',
    description: "Displays the support message",
    execute(message, args, Discord) {
        message.delete();
        if (message.author.bot) return;

        let embed = new Discord.MessageEmbed()
            .setAuthor('Astroo Support.')
            .setColor('039dfc')
            .addFields(
                {name: '1.', value: ' ***I cant invite the bot to my server.***', },
                {name: '2', value: '***Astroo isn\'t responding***', },
                {name: '3', value: '***I cant hear Astroo or the sound is glitching. ***'},
                {name: '4', value: '***My issue isn\'t listed here.***'}
            )


        message.channel.send(embed);
    }
}
