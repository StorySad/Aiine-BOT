let fs = require('fs')
let handler = async (m) => {
let gasuka = fs.readFileSync('./mp3/gasuka.opus')
conn.sendFile(m.chat, gasuka, '', '', m, true)
}

handler.customPrefix = /^(ih ga suka|Ih ga suka|cewe kiw)$/i
handler.command = new RegExp

module.exports = handler