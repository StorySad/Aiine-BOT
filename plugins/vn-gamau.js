let fs = require('fs')
let handler = async (m) => {
let gamau = fs.readFileSync('./mp3/gamau.opus')
conn.sendFile(m.chat, gamau, '', '', m, true)
}

handler.customPrefix = /^(Gemes|Sesad)$/i
handler.command = new RegExp

module.exports = handler