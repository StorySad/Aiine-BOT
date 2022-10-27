let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://api.xteam.xyz/randomimage/glasses?APIKEY=apivproject`
  conn.sendFile(m.chat, res, 'glasses.jpg', 'sange?', m)
}
handler.help = ['glasses']
handler.tags = ['animebkp']
handler.premium = true

handler.command = /^(glasses)$/i

module.exports = handler