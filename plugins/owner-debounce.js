let { spawn }  = require('el proceso');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'el: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('restableciendo el Bot...\npor favor espere alrededor de 1 minutos')
    await global.db.write()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (Not working)')]
handler.tags = ['owner']
handler.command = /^debounce$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

