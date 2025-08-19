let handler = async (m, { conn, command, text }) => {
  
    if (!text) return conn.reply(m.chat, '• *CONTOH :* .cekgantengnya Bapak gua', m)
	if (text == '@6282286315998') return conn.reply(m.chat, 'Ini mah Developer gw, 1000% Gantengnya, Gak Ada Yang Bisa bandingin', m)
    if (text == '@6285651954376') return conn.reply(m.chat, 'Inimah Orang Gila Mana Ada Gantengnya', m)
  conn.reply(m.chat, `
  *CEK KEGANTENGAN*
  

> _Nama Pasien:_ *${text}*

> _Level:_ *${pickRandom(['4% INI MUKA ATAU SAMPAH?!','7% Serius ya,, Lu ampir mirip kayak Monyet!','12% Makin lama liat muka lo gw bisa muntah!','22% Mungkin karna lo sering liat berbuat maksiat😂','27% Keknya bakal susah dapet jodoh lu,, berdoa aja','35% Yang sabar ya ayang','41% Semoga diberkati mendapat jodoh','48% Dijamin cewek susah deketin lo','56% Lu Setengah ganteng :v','64% Cukuplah','71% Lumayan ganteng juga lu ya','1% AWOAKAK BURIQQQ!!!','77% Gak akan Salah Lagi dah mas','83% Dijamin cewek gak akan kecewa mas','89% cewek2 pasti auto salfok klo ngeliat lo!','94% AARRGGHHH!!!','100% LU EMANG COWOK TERGANTENG YANG PERNAH GW LIAT!!!'])}*
`.trim(), m)
}
handler.help = ['cekgantengnya *<name>*']
handler.tags = ['fun']
handler.command = /^cekgantengnya/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}