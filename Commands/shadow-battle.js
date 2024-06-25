const Discord = require('discord.js');
const shadowList = require('./shadows.json');

module.exports = {
	name: 'shadow-battle',
	description: 'Spawns a shadow for battling.',
	execute(message, args) {
		const shadow = shadowList[Math.floor(Math.random() * shadowList.length)];
		const hpTotal = shadow.hp;

		const shadowBattle = new Discord.RichEmbed()
			.setColor('#ed1c24')
			.setAuthor('A new shadow appears!', 'https://vignette.wikia.nocookie.net/megamitensei/images/5/54/Metaverse_Navigator.png')
			.setTitle(shadow.name)
			.setDescription('HP: ' + shadow.hp + '/' + hpTotal)
			.setThumbnail(shadow.thumbnail)
			.addField('Elements', shadow.elements, true)
			.addField('Skills', shadow.skills, true)
			
		message.channel.send(shadowBattle);
	},
};