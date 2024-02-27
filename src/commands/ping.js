/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'ping',
		description: 'View the bot and Discord API response time',
	},
	async execute(interaction) {
		const client = interaction.client

		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms\nWebsocket heartbeat: ${client.ws.ping}ms`);
	},
};
