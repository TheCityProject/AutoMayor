import { EmbedBuilder, GuildMember } from 'discord.js';

/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'avatar',
		description: "View a user's profile picture",
		options: [
			{
				name: 'type',
				description: 'The version of the profile picture to view',
				required: 'true',
				type: 3,
				choices: [
					{
						name: 'Global',
						value: 'global'
					},
					{
						name: 'Server',
						value: 'server'
					}
				],
			},
			{
				name: 'user',
				description: 'The user to view',
				type: 6,
			}
		]
	},
	async execute(interaction) {
		const avatarType = interaction.options.getString('type')
		const userTarget = interaction.options.getUser('user') ?? interaction.user;
		const avatarEmbed = new EmbedBuilder()
			.setTitle(`${userTarget.displayName}'s Avatar`)
			switch (avatarType) {
				case 'global':
					avatarEmbed.setImage(userTarget.displayAvatarURL({ dynamic: true, size: 512 }))
				break;
				case 'server':
					if (userTarget instanceof GuildMember) {
						avatarEmbed.setImage(userTarget.displayAvatarURL({ dynamic: true, size: 512 }))
					} else {
						avatarEmbed.setImage(interaction.guild.members.resolve(userTarget).displayAvatarURL({ dynamic: true, size: 512 }))
					}

				break;
				default:
					// nothing
			}
		
		return interaction.reply({ embeds: [avatarEmbed] });
	},
};
