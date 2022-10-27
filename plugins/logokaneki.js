let handler = async (m, { conn }) => {
  m.reply('WaitProsessKak...')
  let res = `https://restapi.frteam.xyz/kaneki?nama=FR-Team&apikey=rpgbot`
  conn.sendFile(m.chat, res, 'kaneki', 'wangy wangy', m)
}
handler.help = ['logokaneki']
handler.tags = ['anime']

handler.command = /^(logokaneki)$/i

module.exports = handler