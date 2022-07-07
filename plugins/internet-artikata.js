let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw `Uff. que esta buscado?`
    let res = await fetch(`https://x-restapi.herokuapp.com/api/arti-kata?q=${text}&apikey=BETA`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    m.reply(`
*busquera: ${text}*
${json.artikata}

`.trim())
}
handler.help = ['artikata <teks>']
handler.tags = ['internet']
handler.command = /^artikata$/i
module.exports = handler
