let fs = require('fs')
let handler = async (m) => {
let yamatekudasay = fs.readFileSync('./mp3/yamat.opus')
conn.sendFile(m.chat, yamatekudasay, '', '', m, true)
}

handler.customPrefix = /^(yamatekudasay|coli)$/i
handler.command = new RegExp

module.exports = handler