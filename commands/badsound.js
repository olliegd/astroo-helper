module.exports = {
    name: 'badsound',
    description: "Displays the support message for the invite issue",
    execute(message, args, Discord) {
        message.delete();
        if (message.author.bot) return;
        let embed = new Discord.MessageEmbed()
        .setAuthor('So, the sound is glitching..')
        .addField('Find information and troubleshooting problems here:', '[Astroo Music Docs - Sound Glitching](https://astroo.party/sound.is.glitching.html)')
        message.channel.send(embed)
          }

    }
