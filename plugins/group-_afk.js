let handler = m => m
handler.before = m => {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
╭──[ *𝐃𝐄𝐓𝐄𝐍𝐄𝐑 𝐀𝐅𝐊!* ]──✧
┆ ᐵ 𝙼𝙾𝚃𝙸𝚅𝙾 : ${user.afkReason ? '' + user.afkReason : ''}
┆ ᐵ 𝚃𝙸𝙴𝙼𝙿𝙾 : ${clockString(new Date - user.afk)}
╰┅────★
`.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user) continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0) continue
        let reason = user.afkReason || ''
        m.reply(`╭──[ *⚠¡𝐍𝐎 𝐋𝐎 𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐄𝐒!⚠* ]──
┆ 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙰𝙵𝙺
┆ ${reason ? '*𝙼𝙾𝚃𝙸𝚅𝙾* : ' + reason : '𝚂𝚒𝚗 𝚗𝚒𝚗𝚐𝚞𝚗𝚊 𝚛𝚊𝚣ó𝚗'}
┆ *𝚃𝙸𝙴𝙼𝙿𝙾* : ${clockString(new Date - afkTime)}
╰┅────★
`.trim())
    }
    return true
}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
