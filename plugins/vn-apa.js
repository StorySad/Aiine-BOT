let fs = require('fs')
let handler = async (m) => {
let kenapa = fs.readFileSync('./mp3/apa.opus')
conn.sendFile(m.chat, kenapa, '', '', m, true)
}

handler.customPrefix = /^(Apa|ap|Kenapa|Bot)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler