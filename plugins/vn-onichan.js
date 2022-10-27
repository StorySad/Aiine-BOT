let fs = require('fs')
let handler = async (m) => {
let onichan = fs.readFileSync('./mp3/onichan.opus')
conn.sendFile(m.chat, onichan, '', '', m, true)
}

handler.customPrefix = /^(Bg|Oni chan|Loli|loli|Loli kawai|Oni)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler