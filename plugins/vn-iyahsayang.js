let fs = require('fs')
let handler = async (m) => {
let iyahsayang = fs.readFileSync('./mp3/iyahsayang.opus')
conn.sendFile(m.chat, iyahsayang, '', '', m, true)
}

handler.customPrefix = /^(ayang aku mana|ko ayang aku ga ada|sayang|ayang|ayy)$/i
handler.command = new RegExp

module.exports = handler