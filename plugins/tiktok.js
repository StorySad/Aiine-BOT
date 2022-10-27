let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
   if (!args[0]) throw `linknya mana?`
   let res = await (await fetch(`https://malesin.xyz/tiktok?url=` + args[0])).json()
   conn.sendFile(m.chat, res.video, '', wm, m)
}
handler.help = ['tiktok3 <url>']
handler.tags = ['downloader']
handler.command = /^(tiktok3|tiktok)$/i
handler.limit = false
handler.premium = false
module.exports = handler