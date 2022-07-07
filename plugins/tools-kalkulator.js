let handler = async (m, { conn, text }) => {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('𝙷𝚖𝚖𝚖... ¿𝚝𝚛𝚊𝚖𝚙𝚊?')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw '𝙵𝚘𝚛𝚖𝚊𝚝𝚘 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚘, 𝚜𝚘𝚕𝚘 𝚜𝚎 𝚙𝚎𝚛𝚖𝚒𝚝𝚎 𝚗𝚞𝚖𝚎𝚛𝚘𝚜 𝚍𝚎𝚕  𝟶-𝟿 𝚢 𝚂𝚒𝚖𝚋𝚘𝚕𝚘𝚜 -, +, *, /, ×, ÷, π, e, (, ) 𝚜𝚘𝚙𝚘𝚛𝚝𝚊𝚍𝚘'
  }
}
handler.help = ['kalkulator <soal>']
handler.tags = ['tools']
handler.command = /^(cal(culat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
handler.register = false
module.exports = handler
