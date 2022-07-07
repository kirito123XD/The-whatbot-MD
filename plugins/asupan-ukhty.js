let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/ukhty'
conn.sendFile(m.chat, supa, null, 'aqui tiene', m)
}
handler.help = ['ukhty']
handler.tags = ['asupan']
handler.command = /^(ukhty)$/i

module.exports = handler
