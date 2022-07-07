const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `𝚈𝚊 𝚎𝚜𝚝𝚊𝚜 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚍𝚘\n𝚀𝚞𝚒𝚎𝚛𝚎𝚜 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚛𝚝𝚎? ${usedPrefix}unreg <SN|Numero de Serie>`
  if (!Reg.test(text)) throw `𝙵𝚘𝚛𝚖𝚊𝚝𝚘 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚘\n*${usedPrefix}reg nombre.edad*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '𝙴𝚕 𝚗𝚘𝚖𝚋𝚛𝚎 𝚗𝚘 𝚙𝚞𝚎𝚍𝚎 𝚚𝚞𝚎𝚍𝚊𝚛 𝚟𝚊𝚌𝚒𝚘'
  if (!age) throw '𝙻𝚊 𝚎𝚍𝚊𝚍 𝚗𝚘 𝚙𝚞𝚎𝚍𝚎 𝚚𝚞𝚎𝚍𝚊𝚛 𝚟𝚊𝚌𝚒𝚊'
  age = parseInt(age)
  if (age > 50) throw '𝙼𝚎𝚓𝚘𝚛 𝚊𝚗𝚍𝚊 𝚌𝚞𝚒𝚍𝚊 𝚊 𝚝𝚞𝚜 𝚑𝚒𝚓𝚘𝚜 '
  if (age < 5) throw '𝚆𝙰𝙾 𝚄𝙽 𝙱𝙴𝙴𝙱𝙴 𝚀𝚄𝙴 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁  ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
hora eres un verificado✨l!

╭─「 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎  」
│ 𝙽𝚘𝚖𝚋𝚛𝚎 : ${name}
│ 𝙴𝚍𝚊𝚍 : ${age} años
╰────
𝙽𝚞𝚖𝚎𝚛𝚘 𝚍𝚎 𝚂𝚎𝚛𝚒𝚎: 
${sn}
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
