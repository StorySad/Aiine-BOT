let fs = require('fs')
let handler = async (m) => {
let salam = fs.readFileSync('./mp3/salam.opus')
conn.sendFile(m.chat, salam, '', '', m, true)
}

handler.customPrefix = /^(p|pp|ppp|woy|P bg|p bg|cok|Hlo|kk|bang)$/i
handler.command = new RegExp

module.exports = handler