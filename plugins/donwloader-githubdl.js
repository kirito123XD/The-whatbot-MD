let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'donde esta el nombre de usario?'
if (!args[1]) throw 'donde esta el repositorio?'
if (!args[2]) throw 'ingrese el nombre del archivo'
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`
//F
m.reply(`comprimir datos a un archivo zip*`)
conn.sendFile( m.chat, url, `${args[1]} ${args[2]}.zip`, null, m)

}
handler.help = ['githubdl']
handler.tags = ['github']
handler.command = /githubdl/i

handler.limit = true

module.exports = handler
