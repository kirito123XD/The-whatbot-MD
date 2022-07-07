let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text, usedPrefix}) => {
	let notreply = '𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚞𝚗 𝚖𝚎𝚗𝚜𝚊𝚓𝚎!'
	if (!m.quoted) throw notreply
	let notemo = `📍 𝙴𝚓𝚎𝚖𝚙𝚕𝚘 𝚍𝚎 𝚞𝚜𝚘:\n${usedPrefix}react 🗿`
	if (!text) throw notemo
conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `${text}`}}, { messageId: m.id })
 }
 handler.help = ['react <emoji>']
handler.tags = ['tools']
handler.command = /^(react)$/i

module.exports = handler
