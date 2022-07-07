let handler = async (m, { text, usedPrefix }) => {
    let salah = `elegia esta opciones para juga\n\ntijeras, papel, piedras\n\n${usedPrefix}ppt tijeras\n\npor favor dejer un espacioi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'piedra'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tijeras'
    } else {
        astro = 'papel'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`empate!\ntu: ${text}\nel Bot: ${astro}`)
    } else if (text == 'piedra') {
        if (astro == 'tijeras') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`tu ganas! 🥳\ntu: ${text}\nel Bot: ${astro}`)
        } else {
            m.reply(`tu pierdes!\ntu: ${text}\nel Bot: ${astro}`)
        }
    } else if (text == 'tijeras') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`tu ganas! 🥳\ntu: ${text}\nel Bot: ${astro}`)
        } else {
            m.reply(`tu pierdes!\ntu: ${text}\nel Bot: ${astro}`)
        }
    } else if (text == 'papel') {
        if (astro == 'pierdras') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`tu ganas! 🥳\ntu: ${text}\nel Bot: ${astro}`)
        } else {
            m.reply(`tu pierdes!\ntu: ${text}\nel Bot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['ppt']
handler.tags = ['game']
handler.command = /^(ppt)$/i

module.exports = handler
