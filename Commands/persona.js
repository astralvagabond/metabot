module.exports = {
	name: 'persona',
	description: 'Summons a Persona, based on the method specified.',
	args: true,
	usage: '<method>',
	execute(message, args) {
		if (args[0] === 'evoker') {
			return message.channel.send('You point your Evoker to your head and pull the trigger, releasing your Persona!')
		} else if (args[0] === 'card') {
			return message.channel.send('The card representing your Arcana appears and you crush it, releasing your Persona!')
		} else if (args[0] === 'mask') {
			return message.channel.send('You rip off your mask as it\'s covered in blue flames, releasing your Persona!')
		}
	}
}