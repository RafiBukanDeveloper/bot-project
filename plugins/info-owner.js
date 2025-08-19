let handler = async (m, { conn, text, usedPrefix, command }) => {
  let name = await conn.getName(m.sender)
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let tulisan = `
     *I N F O  O W N E R* 
╭─ׅ──ֹ━━━ׅ━⁞ ✶ ⁞━ׅ━━━ֹ──ׅ─╮   
> _Nama:_ *${setting.namaowner}*
> _WhatsApp:_ https://wa.me/${setting.owner}
> _Instagram:_ *${setting.instagram}*
> _Tiktok:_ *${setting.tiktok}*
╰────────────────╯
note:
> jangan spam owner, ketahuan block
> jangan call owner kalo kagak penting`
  const kontak = {
	"displayName": `${setting.namaowner}`,
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${setting.namaowner}\nitem1.TEL;waid=${setting.owner}:${setting.owner}\nitem1.X-ABLabel:My Owner\n\nURL: https://wa.me/${setting.owner}?text=halo+bg+bagi+scriptnya+dong\nORG: INI NMOR OWNER YA\nEND:VCARD`
}
try {
  await conn.sendMessage(m.chat, { text : tulisan}, { quoted: fkon })
} finally { 
       conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })}
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

export default handler