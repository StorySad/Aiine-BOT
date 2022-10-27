let handler = async m => m.reply(`
   *Bot WhatsApp*
*Harga sewa Botz*
 ! *Sewa Group* 
+ *IDR : Rp 5.000,00 (1BULAN)*
+ *IDR : Rp 10.000,00 ( 2BULAN)*
+ *IDR : Rp 20.000,00 ( 6BULAN )*

 ! *PREMIUM USER*
+ *IDR : Rp 7.000,00 ( 30Day )*
+ *IDR : Rp 15.000,00 ( 60Day )*
+ *IDR : Rp 25.000,00 ( Permanen )*

Note : Jika menemukan BUG atau eror *Segera lapor ke owner*
(Https://wa.me/62878949880923)
  + *User premium Mempunyai Unlimited Limit dan kelebihan menggunakan fitur tertentu*
♡ ㅤ    ❍ㅤ      ⎙ㅤ     ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ˢᵃᵛᵉ      ˢʰᵃʳᵉ
`.trim())// Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler