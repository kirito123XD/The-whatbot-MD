let xfar = require('xfarr-api')
let handler = async (m, { usedPrefix, command, conn, args }) => {
	 	  if (!args[0]) throw `forma incorrecta ejemplo: ${usedPrefix}${command} naruto`
xfar.Pinterest(args[0]).then(async data => {
let pincpt = `🔗Link media : ${data.url}`
conn.sendFile(m.chat,data.url, 'pin.jpg', pincpt,m)})
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet', 'downloader']
handler.command = /^(pinterest)$/i

module.exports = handler
