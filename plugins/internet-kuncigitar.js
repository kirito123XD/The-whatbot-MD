let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'cual es el título de la canción?'
  let res = await fetch(`http://hadi-api.herokuapp.com/api/chord?q=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'cancion no encontrada'
}
handler.help = ['kuncigitar'].map(v => v + ' <judul lagu>')
handler.tags = ['internet']
handler.command = /^kuncigitar$/i

module.exports = handler
