// jangan hapus ini hargailah yg buat 
// loli2 by Nana ['console_log_088233902788'] 
let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api.xteam.xyz/randomimage/loli?APIKEY=apivproject`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Bocilnya Kak', '©RriiBotz', '➡️NEXT', `${usedPrefix + command}`, m, false)
}
//handler.help = ['loli2']
//handler.tags = ['internet']
handler.command = /^(loli)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler