let { groupSettingUpdate } = require('@adiwajshing/baileys-md')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': 'not_announcement',
		'buka': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'tutup': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2But(m.chat, `
ejemplo:
*${usedPrefix + command} abril*
*${usedPrefix + command} clone*
	`.trim(), 'configuracion grupos', 'abril', '.grupo abierto', 'clone', '.grupos clone')
		throw false
	}
	await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['grupo <abril/clone>']
handler.tags = ['grupo']
handler.command = /^(grupo|grupo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
