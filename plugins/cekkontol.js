let handler = async (m, { conn, command, text, RafiTampilan }) => {
 try {
    if (!text) return RafiTampilan(`•*CONTOH:* .cekkontol ${global.setting.namaowner}`)
	let kontol = `
	*CEK KONTOL*


_Nama Pasien:_ *${text}*
_Kontolnya:_ *${pickRandom(['Putih mulus','Putih','Hitam','berjemur','dekil','hitam berkarat'])}*
_Jembutnya:_ *${pickRandom(['Lebat','Tipis','Gada Jembut', 'Bersih'])}*
_Statusnya:_ *${pickRandom(['perjaka','Ga perjaka','Besar','Panjang','Disunat','Blom Disunat'])}*`
await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
m.reply('-2 Limit')
RafiTampilan(kontol)
              } finally { 
              await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
}
handler.help = ['cekkontol *<nama>* (2 Limit)']
handler.tags = ['fun']
handler.command = /^cekkontol|cekkntl/i
handler.limit = 2
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}