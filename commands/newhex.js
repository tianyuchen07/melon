module.exports = {
	name: '',
	description: '',
	execute(message, args) {
        if (message.channel.type !== 'dm'){return message.reply('please use this command in a DM with Melon.')}
		const mid = message.author.id
		if (typeof confess[mid] == 'undefined') {
			confess[mid] = [];
			var hexCode = randomHex()
			const hexData = {
				"hexCode": hexCode
			}
			confess[mid].push(hexData);
			save(confess, "confess.json")
			const hexDemo = new Discord.MessageEmbed()
				.setColor(confess[mid][confess[mid].length - 1].hexCode)
				.setTitle("Confession")
				.setDescription('This is what your confession message will look like, the color on the left is based on your new hex code.')
			message.reply(hexDemo)
		}
		if (typeof confess[mid] !== 'undefined') {
				var hexCode = randomHex()
				delete confess[mid][confess[mid].length - 1].hexCode
				const hexData = {
					"hexCode": hexCode
				}
				confess[mid].push(hexData);
				save(confess, "confess.json")
				const hexDemo = new Discord.MessageEmbed()
					.setColor(confess[mid][confess[mid].length - 1].hexCode)
					.setTitle('Confession')
					.setDescription('This is what your confession message will look like, the color on the left is based on your new hex code.')
				message.reply(hexDemo)
		}
	}
    }
};
