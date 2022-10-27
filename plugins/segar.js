let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join('0').split('0')
  let tioxd = `https://sekha.me/api/asupan?apikey=apirey`
  conn.sendFile(m.chat, tioxd, 'botcahx.mp4', 'Asupan beta with apikey', m, false, { contextInfo: { forwardingScore: 9999, isForwarded: true }})
}
handler.help = ['segar']
handler.tags = ['tiktok']
handler.customPrefix = /^(sgr|segar|asupanbeta)$/i 
handler.command = new RegExp
handler.limit = true

module.exports = handler