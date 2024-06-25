const skillList = require('./skills.json');

module.exports = {
	name: 'skill',
	description: 'Performs a certain skill.',
	args: true,
	usage: '<skill-name>',
	execute(message, args) {
		var randomNumber = Math.floor(Math.random() * 101);

		for (var i = 0; i < skillList.length; i++) {
			if (args[0] === skillList[i].command) {
				if (skillList[i].name === "Recarm" || skillList[i].name === "Samarecarm") {
						return message.channel.send('You revive ' + skillList[i].area + ' with ' + skillList[i].HP + ' HP recovered!');
						break;
				} else if (skillList[i].element === "Healing") {
					if (skillList[i].HP === "") {
						return message.channel.send('You cure ' + skillList[i].type + ' for ' + skillList[i].area + '!');
						break;
					} else {
						return message.channel.send('You restore ' + skillList[i].HP + ' HP to ' + skillList[i].area + '!');
						break;
					}
				} else if (randomNumber <= 10) {
					return message.channel.send('You miss the attack!');
					break;
				} else if (randomNumber >= 90) {
					return message.channel.send(skillList[i].type + ' ' + skillList[i].element + ' damage to ' + skillList[i].area + ', and it\'s a CRITICAL HIT! You deal ' + (skillList[i].HP * 2) + ' damage.');
					break;
				} else {
					return message.channel.send(skillList[i].type + ' ' + skillList[i].element + ' damage to ' + skillList[i].area + '! You deal ' + skillList[i].HP + ' damage.');
					break;
				}
			}
		}
	},
};