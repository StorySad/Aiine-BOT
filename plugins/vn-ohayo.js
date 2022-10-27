let fs = require('fs')
let handler = async (m) => {
let pagi = fs.readFileSync('./mp3/ohayo.opus')
conn.sendFile(m.chat, pagi, '', '', m, true)
}

handler.customPrefix = /^(Pagi|Ohayou|Ohayo|Selamat pagi|Bangun oy|pagi)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler