let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
await m.reply(global.wait)
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'mpssshhhh ahhh', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['hantai']
handler.tags = ['animebkp']
handler.command = /^(hentai)$/i
handler.premium = true
handler.limit = true

module.exports = handler