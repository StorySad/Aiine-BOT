let fs = require('fs')
let handler = async (m) => {
let haigabut = fs.readFileSync('./mp3/haigabut.opus')
conn.sendFile(m.chat, haigabut, '', '', m, true)
}

handler.customPrefix = /^(hai|Hai)$/i
handler.command = new RegExp

module.exports = handler