let fs = require('fs')
let handler = async (m) => {
let sabar = fs.readFileSync('./mp3/sabar.opus')
conn.sendFile(m.chat, sabar, '', '', m, true)
}

handler.customPrefix = /^(yang sabar|sabar)$/i
handler.command = new RegExp

module.exports = handler