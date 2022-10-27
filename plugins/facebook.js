const epbe = require('fbdownload')
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	if (!args[0]) throw `Masukan Link Facebook\n\ncontoh:\n${usedPrefix}${command} https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`
    epbe.fbdown(args[0]).then(r => {
    let video = r.result.links.hd
    conn.sendFile(m.chat, video, '', `*${wm}*`, m)
    })
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = false

handler.command = /^(facebook|fb)$/i

module.exports = handler