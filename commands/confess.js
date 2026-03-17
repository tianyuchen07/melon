module.exports = {
	name: '',
	description: '',
	execute(message, args) {
        		if (message.channel.type !== 'dm'){return message.reply(`please DM Melon with your confession message using \`lon confess <confession>\``)}
		if(!args[0]) return message.channel.send("Please send a message to confess.")
		const confessMessage = args.slice(0).join(" ")
		const mid = message.author.id
		if (typeof confess[mid] == 'undefined') {
			confess[mid] = [];
			var newHex = randomHex()
			var hexData = {
				"hexCode": newHex
			}
			confess[mid].push(hexData);
			save(confess, "confess.json")
			const confessionEmbed = new Discord.MessageEmbed()
				.setColor(confess[mid][confess[mid].length - 1].hexCode)
				.setTitle("Confession")
				.setDescription(confessMessage)
		client.channels.cache.get('741881172908310559').send(confessionEmbed)
		message.reply("Your confession has been sent!")
		}
		else{
			const confessionEmbed = new Discord.MessageEmbed()
				.setColor(confess[mid][confess[mid].length - 1].hexCode)
				.setTitle("Confession")
				.setDescription(confessMessage)
		client.channels.cache.get('741881172908310559').send(confessionEmbed)
		message.reply("Your confession has been sent!")
		}
    }
};
