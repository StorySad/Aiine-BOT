let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
let url = 'https://api.lolhuman.xyz/api/random/sagiri?apikey=4fbb8035228757af1bb2f8dd'
conn.sendFile(m.chat, url, 'saqiri.jpg', 'Nih Kak', m)
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i
handler.premium = true

module.exports = handler