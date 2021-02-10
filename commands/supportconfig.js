const { executionAsyncResource } = require("async_hooks")

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    let embed = new Discord.MessageEmbed()
        .setAuthor('Support.')
        .setColor('000000')
        .addField('Commands', 'Run to get a list of commands.', true)
        .addField("Moderation", 'Only Staff can run this command.', true)
        .addField("Fun", `Get a list of fun commands.`, true)
        .addField('Who Are We?', 'Project demi is a range of softwares founded in December 2020. Check #about for more information.', true)
        .addField('Purchase', 'You can purchase demi products, head over to #website for more. ', true)
        .addField('Resellers', 'Looking to resell demi SB? Feel free to contact Lycolt / Staff Member for further assistance.', true)
        .setTimestamp()
        .setFooter(`Demi Support Bot`);

    message.channel.send(embed);
};

module.exports.help = {
    name: "help"
};

console.log('Supportconfig | Loaded')