let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'y el texto?'
    m.reply(`difuncion enviada al ${anu.length} ya,difuncion terminada el ${anu.length * 0.5 } segudos`)
    for (let i of anu) {
    await delay(500)
    conn.sendBut(i, `${pesan}`, wm, 'owner', '.owner', null).catch(_ => _)
    }
  m.reply(`difuncion enviada con éxitos al ${anu.length} Group`)
}
handler.help = ['bcgcbot <teks>']
handler.tags = ['owner']
handler.command = /^((broadcastgc|bcgc)bot)$/i

handler.owner = true

module.exports = handler
