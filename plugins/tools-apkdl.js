let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘', m)

	axios.get(`http://hujanapi.xyz/api/apkpuredl?url=${text}&apikey=qrQuAVo14XfmRIr`).then ((res) => {
	 	let hasil = `
𝙽𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚕𝚊 𝚊𝚙𝚕𝚒𝚌𝚊𝚌𝚒𝚘𝚗 : ${res.data.result.title}
𝙻𝚒𝚗𝚔 𝚍𝚎 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊 : ${res.data.result.url}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['apkdl (link apkpure)']
handler.tags = ['tools']
handler.command = /^(apkdl)$/i
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
