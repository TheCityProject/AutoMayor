import process from 'node:process';
import { EmbedBuilder } from 'discord.js';

/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'about',
		description: 'View information about this bot',
	},
	async execute(interaction) {
		const days = Math.floor(interaction.client.uptime / 86_400_000).toString();
		const hours = Math.floor((interaction.client.uptime / 3_600_000) % 24).toString();
		const minutes = Math.floor((interaction.client.uptime / 60_000) % 60).toString();
		const seconds = Math.floor((interaction.client.uptime / 1_000) % 60).toString();
		const aboutEmbed = new EmbedBuilder()
			.setTitle(`About ${interaction.client.user.username}`)
			.setDescription(`Currently under construction`)
			.addFields(
				{ name: 'Version', value: `${process.env.npm_package_version}`, inline: true },
				{ name: 'Uptime', value: `${days.padStart(2, '0')}d, ${hours.padStart(2, '0')}h, ${minutes.padStart(2, '0')}m, ${seconds.padStart(2, '0')}s`, inline: true },
				{ name: `Additional Links`, value: `[GitHub](https://github.com/TheCityProject/AutoMayor)` },
			)
		
		return interaction.reply({ embeds: [aboutEmbed] });
	},
};
