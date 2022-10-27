let handler = async (m, { conn }) => {
  m.reply('LagiDiProsesKak...')
  let res = `https://restapi.frteam.xyz/lolimaker?nama=FR&nama2=Team&apikey=rpgbot`
  conn.sendFile(m.chat, res, 'lolimaker', 'loli maker, m)
}
handler.help = ['logololi']
handler.tags = ['anime']

handler.command = /^(logololi)$/i

module.exports = handler