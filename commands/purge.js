const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Purge inactive users!'),
    async execute(interaction) {
        console.log({ interaction });
    },
};