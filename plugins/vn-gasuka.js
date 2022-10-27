let fs = require('fs')
let handler = async (m) => {
let gasuka = fs.readFileSync('./mp3/gasuka.opus')
conn.sendFile(m.chat, gasuka, '', '', m, true)
}

handler.customPrefix = /^(ih gasuka|ga suka|Ih|jorok|sesat|sesad|Ga)$/i
handler.command = new RegExp

module.exports = handler