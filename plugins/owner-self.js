let handler = async(m, { conn, command }) => {
  let isPublic = command === "publico";
  let self = global.opts["privado"]

  if(self === !isPublic) return m.reply(`Dah ${!isPublic ? "privado" : "Publico"} dari tadi ${m.sender.split("@")[0] === global.owner[1] ? "Mbak" : "Bang"} :v`)

  global.opts["privado"] = !isPublic

  m.reply(`uso ${!isPublic ? "privado" : "Publico"} bot!`)
}

handler.help = ["self", "public"]
handler.tags = ["owner"]

handler.owner = true

handler.command = /^(self|public)/i

module.exports = handler
