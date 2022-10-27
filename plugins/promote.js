let handler = async (m, { conn }) => {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  if (!users) return
  await conn.groupParticipantsUpdate(m.chat, [users], 'promote')
}

handler.help = ['promote <@user>']
handler.tags = ['group']
handler.command = /^promote$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler