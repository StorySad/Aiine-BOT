let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("anime ganteng", "cowo anime ganteng", "Husbu", "anime cowo").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
handler.limit = true

module.exports = handler