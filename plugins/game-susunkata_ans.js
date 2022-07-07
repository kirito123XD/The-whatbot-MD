const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suka/i.test(m.quoted.contentText)) return !0
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata)) return m.reply('la pregunta has terminado')
    if (m.quoted.id == this.susunkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
        if (['.como', 'ayuda', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.susunkata[id][2]
            await this.sendBut(m.chat, `*cierto!* +${this.susunkata[id][2]} XP`, wm, 'organiza palabra', '.susunkata')
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*un poco mas!*`)
        else m.reply(`*falso!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
