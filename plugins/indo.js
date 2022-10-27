let handler  = async (m, { conn }) => {
	
	await m.reply('[❗] WAIT, Tunggu Sebentar:v.')
  conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
}
handler.help = ['random']
handler.tags = ['bokep']
handler.command = /^(random)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bokep = [
'Nama : DilaPye Colmek\nFoto : -\nVideo : 1\nSize : 90 MB\nDurasi : 5 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1We9TeG1whjz2bmNCrahctK1-Hiy3BtWN/view \n PASSWORD FILE : AA18+#29',
'Nama : Missluttyv SMA\nFoto : -\nVideo : 3\nSize : 74 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/mqqa1rg8zecn67z/VID-20221005-WA0249.mp4/file/view \nPASSWORD FILE : AA18+#21',
'Nama : Arce\nFoto : 114\nVideo : 16\bSize : 64 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/yyii2r0gcxraage/VID-20221005-WA0248.mp4/file/view \nPASSWORD FILE : AA18+#6',
'Nama : Annisa\nFoto : 71\nVideo : 2\nSize : 48 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/j46hzimvoneuvi0/VID-20221005-WA0245.mp4/file/view\nPASSWORD FILE : AA18+#5',
'Nama : Annisa\nFoto : 71\nVideo : 2\nSize : 48 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/xns61q5fhcqa4rr/VID-20221005-WA0244.mp4/file/view\nPASSWORD FILE : AA18+#5',
'Nama : 038493040494_0[Ws_Gloia]\nFoto : 19\nVideo : 1\nSize : 379 MB\nDurasi : 8 Menit\nKualitas : HD++\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/40o1vrwhnxbgzcn/VID-20221005-WA0246.mp4/file/view\nPASSWORD FILE : AA18+#30',
'Nama : ASD - Ria Bali\nFoto : -\nVideo : 1\nSize : 165 MB\nDurasi : 45 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/gs8ldj6b21k25iy/VID-20221005-WA0229.mp4/file/view\nPASSWORD FILE : AA18+#7',
'Nama : Nanad Apr\nFoto : 18\nVideo : 23\nSize : 357 MB\nDurasi : - Menit\nKualitas : -\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/q5j26mfbsbeoz9e/VID-20221005-WA0224.mp4/file\nPASSWORD FILE : AA18+#32',
'Nama : lily kawai onlyfans\nFoto : 50\nVideo : 7\nSize : 237 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/4aly35htq16nl15/VID-20221005-WA0227.mp4/file/view\nPASSWORD FILE : AA18+#17',
'Nama : Bocil x Tante\nFoto : -\nVideo : 1\nSize : 156 MB\nDurasi : 23 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/mljp74h6kff5jv4/VID-20221005-WA0226.mp4/file/view\nPASSWORD FILE : AA18+#33',
'Nama : Badbitch_alter\nFoto : -\nVideo : 1\nSize : 170 MB\nDurasi : 26 Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/a03nkkl8ve32fxh/VID-20221005-WA0228.mp4/file/view\nPASSWORD FILE : AA18+#34',
'Nama : Princess nakal\nFoto : -\nVideo : 1\nSize : 128 MB\nDurasi : 15 Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/mqfn0ab3lkw96vg/VID-20221005-WA0222.mp4/file/view\nPASSWORD FILE : AA18+#35',
'Nama : weweci\nFoto : -\nVideo : 1\nSize : 180 MB\nDurasi : 21 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/qfr12nwfvcxuz5x/VID-20221005-WA0223.mp4/file/view\nPASSWORD FILE : AA18+#36',
'Nama : Viral Katanya\nFoto : -\nVideo : 1\nSize : 26 MB\nDurasi : 5 Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : http://www.mediafire.com/file/9o80ka9z61cdtn1/%23Viral_katanya.zip/file',
'Nama : Hijab hitam\nFoto : -\nVideo : 4\nSize : 20 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/joriqm3wvfh3ntk/VID-20221005-WA0219.mp4/file/view',
'Nama : Syifa\nFoto : 45\nVideo : 25\nSize : 100 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/ba3nnrgbkbpfe3m/VID-20221005-WA0214.mp4/file/view\nPassword file : AA18+#27',
'Nama : Danca\nFoto : 18\nVideo : 13\nSize : 100 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/7wdngtjqgzf960j/VID-20221005-WA0213.mp4/file/view\nPassword file : AA18+#38',
'Nama : Dewi\nFoto : 266\nVideo : 3\nSize : 150 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/71rsmpghgvq85wf/VID-20221005-WA0216.mp4/file/view\nPassword file : AA18+#40',
'Nama : Jenn\nFoto : 50\nVideo : 7\nSize : 105 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/5uhptebhcdccvcn/VID-20221005-WA0217.mp4/file/view\nPassword file : AA18+#41',
'Nama : Yanna Davud\nFoto : 61\nVideo : 5\nSize : 22 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/bhlknatjmogwr90/VID-20221005-WA0218.mp4/file/view\nPassword file : AA18+#41',
'Nama : Nina fika luna\nFoto : 30\nVideo : 28\nSize : 153 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/mqxku3bhv3b5q0r/VID-20221005-WA0188.mp4/file/view\nPassword file : AA18+#42',
'Nama : Ain Penang\nFoto : 53\nVideo : 7\nSize : 42 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/0mtuy5y8xct2px6/VID-20221005-WA0193.mp4/file/view\nPassword file : AA18+#43',
'Nama : Jilboobs\nFoto : -\nVideo : 8\nSize : 84 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/g8s0d04f7g5ylps/VID-20221005-WA0192.mp4/file/view\nPassword file : AA18+#44',
'Nama : Kiki hijab\nFoto : -\nVideo : 14\nSize : 190 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/izrkhwnzxwjvisq/VID-20221005-WA0189.mp4/file/view\nPassword file : AA18+#45',
'Nama : Tifanny\nFoto : 117\nVideo : 4\nSize : 30 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/8ia7hyjq0pjmyg7/VID-20221005-WA0191.mp4/file/view\nPassword file : AA18+#46',
'Nama : Vierannii\nFoto : 95\nVideo : -\nSize : 12 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://www.mediafire.com/file/wnj4vwbsp5uf5mk/VID-20221005-WA0190.mp4/file/view\nPassword file : AA18+#47',
]