let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Meoww', m, 0, { thumbnail: Buffer.alloc(0) })
}
//handler.help = ['waifu']
//handler.tags = ['anime']
handler.command = /^(neko)$/i

handler.limit = 10

module.exports = handler