let fs = require('fs')
let handler = async (m) => {
let kobo = fs.readFileSync('./mp3/kobo.opus')
conn.sendFile(m.chat, kobo, '', '', m, true)
}

handler.customPrefix = /^(Anjing|Bacot|Anj|Babi lu|Ngentot|Bangsat lu|Bangsat)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler