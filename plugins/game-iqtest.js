let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['iqtest']
handler.tags = ['game']
handler.command = /^(iqtest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 1',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 14',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 23',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 35',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 41',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 50',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 67',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 72',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 86',
'𝚃𝚞 𝙸𝚀 𝚎𝚜: 99',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 150',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 340',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 423',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 500',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 676',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 780',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 812',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 945',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 1000',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 𝙸𝚕𝚒𝚖𝚒𝚝𝚊𝚍𝚘!',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 5000',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 7500',
'𝚃𝚞 𝙸𝚀 𝚎𝚜 : 10000',
]
