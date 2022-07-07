// NurNurz
let handler = async (m, { conn, text }) => {
   if (!text) throw `ingrese el texto para la nueva bio de el Bot`
     try {
        await conn.setStatus(text)
        conn.reply(m.chat, 'exito el cambio de Bio Bot', m)
     } catch (e) {
       console.log(e)
       throw `Error`
     }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i
handler.owner = true

module.exports = handler
