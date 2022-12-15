const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Purge inactive users!'),
    async execute(interaction) {
        // TODO: check if user is admin?

        await interaction.member.guild.members.fetch();
        const role = interaction.member.guild.roles.cache.find(role => role.name === 'unverified');
        console.log(role.members);

        await Promise.all(role.members.map(member => member.kick()))

        interaction.reply(`Purged ${role.members.length} members`);
    },
};