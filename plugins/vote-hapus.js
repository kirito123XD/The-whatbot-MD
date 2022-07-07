let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendBut(m.chat, `¡𝚃𝚘𝚍𝚊𝚟𝚒𝚊 𝚑𝚊𝚢 𝚟𝚘𝚝𝚘𝚜 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝!`, wm, 'ᴄᴏᴍᴇɴᴢᴀʀ', `${usedPrefix}+vote`, m)
    delete conn.vote[id]
    m.reply(`𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙾 𝙻𝙰 𝚅𝙾𝙲𝚃𝙰𝙲𝙸𝙾𝙽 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴!`)
}
handler.help = ['eliminarvoto']
handler.tags = ['vote']
handler.command = /^(delete|eliminar|-)voto$/i

module.exports = handler
