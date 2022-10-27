let fs = require('fs')
let handler = async (m) => {
let pantek = fs.readFileSync('./mp3/pantek.opus')
conn.sendFile(m.chat, pantek, '', '', m, true)
}

handler.customPrefix = /^(vcs|kak vcs brp|ajg|anjing|anjg|bgsat|kntll|kntl|bego|mmk|bokep|bagi bokep|bkp|bgi bkp|bagi pap|pap dong)$/i
handler.command = new RegExp

module.exports = handler