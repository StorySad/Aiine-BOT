let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://api.xteam.xyz/randomimage/milf?APIKEY=apivproject`
  conn.sendFile(m.chat, res, 'milf.jpg', 'wangy wangy', m)
}
handler.help = ['milf']
handler.tags = ['anime']

handler.command = /^(milf)$/i

module.exports = handler