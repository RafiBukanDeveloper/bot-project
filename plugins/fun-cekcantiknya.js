let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, '• *CONTOH :* .cekcantiknya emak gua', m)
	
  conn.reply(m.chat, `
  *CEK KECANTIKAN*
  

> _Nama Pasien:_ *${text}*

> _Level:_ *${pickRandom(['4% INI MUKA ATAU SAMPAH?!','7% Serius ya,, Lu ampir mirip kayak Monyet!','12% Makin lama liat muka lo gw bisa muntah!','22% Mungkin karna lo sering liat berbuat maksiat😂','27% Keknya bakal susah dapet jodoh lu,, berdoa aja','35% Yang sabar ya ayang','41% Semoga diberkati mendapat jodoh','48% Dijamin cowok susah deketin lo','56% Lu Setengah Cantik :v','64% Cukuplah','71% Lumayan cantik juga lu ya','1% AWOAKAK BURIQQQ!!!','77% Gak akan Salah Lagi dah neng','83% Dijamin cowok gak akan kecewa neng','89% cowok2 pasti auto salfok klo ngeliat lo!','94% AARRGGHHH!!!','100% LU EMANG CEWEK TERCANTIK YANG PERNAH GW LIAT!!!'])}*`.trim(), m)
}
handler.help = ['cekcantiknya *<name>*']
handler.tags = ['fun']
handler.command = /^cekcantiknya/i
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}