let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`

‹•════════════
 |‼️‼️‼️‼️‼️‼️
 | *「 Kartu Intro 」*
 |*Nama     :* 
 |*Kelamin   :* 
 | *Umur      :* 
 |*Hobby    :* 
 |*Kelas      :* 
 |*Asal         :* 
 |*Agama    :* 
 |*Status     :* 
 ‼️‼️‼️‼️‼️‼️‼️
 ♡ ㅤ    ❍ㅤ      ⎙ㅤ     ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ˢᵃᵛᵉ      ˢʰᵃʳᵉ
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

module.exports = handler