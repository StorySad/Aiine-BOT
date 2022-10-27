let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan mimpimu', m)

  await m.reply('Searching...')
	axios.get('https://bsbt-api-rest.herokuapp.com/api/artimimpi/?mimpi=${text}&apikey=benniismael').then ((res) => {
	 	let hasil = `Arti Mimpimu\n\n${res.data.arti.string}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['artimimpi2'].map(v => v + ' <nama>')
handler.tags = ['kerang']
handler.command = /^(artimimpi2)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 100000000
handler.limit = true

const free = 100000000
const prem = 100000000
const moneyfree = 100000000
const moneyprem = 100000000

module.exports = handler