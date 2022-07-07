let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝚎𝚕 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚕𝚊 𝚛𝚎𝚐𝚒𝚘𝚗', m)

	axios.get(`https://tobz-api.herokuapp.com/api/jamdunia?lokasi=${text}&apikey=BotWeA`).then ((res) => {
	 	let hasil = `𝙷𝚘𝚛𝚊 𝚛𝚎𝚐𝚒𝚘𝚗𝚊𝚕 *${text}*\n\n𝙴𝚗 𝚙𝚞𝚗𝚝𝚘 : ${res.data.time}\nFecha : ${res.data.date}\nInfo : ${res.data.title}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tiempo'].map(v => v + ' <pais>')
handler.tags = ['tools']
handler.command = /^(tiempo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler