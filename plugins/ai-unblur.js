import { processing } from '../lib/scrape2.js'

let handler = async (m, { conn, text, RafiTampilan, usedPrefix, command }) => {
    try {
        let q = m.quoted ? m.quoted: m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return RafiTampilan('Fotonya Mana? Reply gambar atau upload')
        if (!/image\/(jpe?g|png)/.test(mime)) return RafiTampilan(`Tipe ${mime} tidak didukung!`)
        await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
        let img = await q.download()
        let image = await processing(img, 'enhance')
        await conn.sendFile(m.chat, image, '', '', m)
    } finally {
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
}
handler.help = ['unblur', 'remini']
handler.tags = ['ai']
handler.command = /^(remini|unblur)$/i
handler.limit = true
export default handler