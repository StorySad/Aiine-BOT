let fs = require('fs')
let handler = async (m) => {
let genit = fs.readFileSync('./mp3/genit.opus')
conn.sendFile(m.chat, genit, '', '', m, true)
}

handler.customPrefix = /^(ayang aku boleh genit ga sama cewe|cewekiw|cewe kiw)$/i
handler.command = new RegExp

module.exports = handler