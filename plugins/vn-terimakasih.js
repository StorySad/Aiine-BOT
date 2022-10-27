let fs = require('fs')
let handler = async (m) => {
let sama = fs.readFileSync('./mp3/sama.opus')
conn.sendFile(m.chat, sama, '', '', m, true)
}

handler.customPrefix = /^(terimakasih|terima kasih|makasih)$/i
handler.command = new RegExp

module.exports = handler