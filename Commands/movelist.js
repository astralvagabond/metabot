const Discord = require('discord.js');

module.exports = {
	name: 'movelist',
	description: 'Shows all available skills for use.',
	execute(message, args) {
		const moveList = new Discord.RichEmbed()
			.setColor('#ed1c24')
			.setAuthor('Current movelist', 'https://vignette.wikia.nocookie.net/megamitensei/images/5/54/Metaverse_Navigator.png')
			.addField('Physical', 'Lunge \n Cleave \n Giant Slice \n Assault Dive \n Megaton Raid \n Sword Dance \n Brave Blade \n God\'s Hand', true)
			.addField('\u200b', 'Vajra Blast \n Vicious Strike \n Heat Wave \n Vorpal Blade \n Gigantomachia \n Rising Slash \n Deadly Fury', true)
			.addField('Gun', 'Snap \n One-shot Kill \n Triple Down \n Riot Gun', true)
			.addField('Fire', 'Agi \n Agilao \n Agidyne \n Inferno \n Maragi \n Maragion \n Maragidyne \n Blazing Hell', true)
			.addField('Ice', 'Bufu \n Bufula \n Bufudyne \n Diamond Dust \n Mabufu \n Mabufula \n Mabufudyne \n Ice Age', true)
			.addField('Electric', 'Zio \n Zionga \n Ziodyne \n Thunder Reign \n Mazio \n Mazionga \n Maziodyne \n Wild Thunder', true)
			.addField('Wind', 'Garu \n Garula \n Garudyne \n Panta Rhei \n Magaru \n Magarula \n Magarudyne \n Vacuum Wave', true)
			.addField('Psychic', 'Psi \n Psio \n Psiodyne \n Psycho Force \n Mapsi \n Mapsio \n Mapsiodyne \n Psycho Blast', true)
			.addField('Nuclear', 'Frei \n Freila \n Freidyne \n Atomic Flare \n Mafrei \n Mafreila \n Mafreidyne \n Cosmic Flare', true)
			.addField('Bless', 'Kouha \n Kouga \n Kougaon \n Makouha \n Makouga \n Makougaon \n Divine Judgement', true)
			.addField('\u200b', 'Hama \n Mahama \n Hamaon \n Mahamaon \n Shining Arrows \n Angel\'s Lance', true)
			.addField('Almighty', 'Megido \n Megidola \n Megidolaon \n Black Viper \n Morning Star \n Life Drain', true)
			.addField('Curse', 'Eiha \n Eiga \n Eigaon \n Maeiha \n Maeiga \n Maeigaon \n Demonic Decree', true)
			.addField('\u200b', 'Mudo \n Mamudo \n Mudoon \n Mamudoon \n Abyssal Wings \n Reaper\'s Hand', true)
			.addField('Buffs', 'Tarukaja \n Rakukaja \n Matarukaja \n Marakukaja \n Heat Riser \n Charge \n Concentrate \n Dekunda', true)
			.addField('Debuffs', 'Tarunda \n Rakunda \n Matarunda \n Marakunda \n Debilitate \n Dekaja', true)
			.addField('Ailments', 'Makajama \n Makajamaon \n Dormina \n Lullaby \n Evil Touch \n Evil Smile', true)
			.addField('\u200b', 'Ominous Words \n Abysmal Surge \n Taunt \n Wage War \n Marin Karin \n Brain Jack', true)
			.addField('Healing', 'Dia \n Diarama \n Diarahan \n Media \n Mediarama \n Mediarahan \n Recarm \n Samarecarm', true)
			.addField('\u200b', 'Baisudi \n Patra \n Energy Drop \n Amrita Drop \n Mabaisudi \n Me Patra \n Energy Shower \n Amrita Shower', true)
			.addField('\u200b', '\u200b', true)

	message.channel.send(moveList);

	},
};