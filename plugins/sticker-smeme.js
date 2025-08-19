import uploadImage from '../lib/uploadImage.js'
import { Sticker } from 'wa-sticker-formatter'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`;
    const memeBuffer = await fetch(meme)
    let stiker = await Sticker(memeBuffer, undefined, global.stickpack, global.stickauth);
    if (stiker) await conn.sendFile(m.chat, stiker, '', m, '', { asSticker: 1 });
}

handler.help = ['smeme <teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(smeme)$/i
handler.register = true

export default handler