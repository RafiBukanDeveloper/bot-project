import axios from 'axios'
import FormData from 'form-data'

let handler = async (m, { conn, text, usedPrefix, command, RafiTampilan }) => {
    try {
        let q = m.quoted ? m.quoted: m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return RafiTampilan('Fotonya Mana? Reply gambar atau upload')
        if (!/image\/(jpe?g|png)/.test(mime)) return RafiTampilan(`Tipe ${mime} tidak didukung!`)
       await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
        let img = await q.download()
        let image = await upscale(img)
        await conn.sendFile(m.chat, image, '', '', m)
    } catch (e) {
        throw e
    } finally {
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
    }
}
handler.help = ['upscale']
handler.tags = ['ai']
handler.command = /^(upscale?)$/i
export default handler

async function upscale(imageData) {
    try {
        const api = 'https://inferenceengine.vyro.ai';
        const version = '1';

        const formData = new FormData();
        formData.append('model_version', version);
        formData.append('image', imageData, {
            filename: 'input.png'
        });

        const response = await axios.post(`${api}/upscale`, formData, {
            headers: formData.getHeaders(),
            responseType: 'arraybuffer',
        });

        return response.data;
    } catch (error) {
        console.error('An error occurred upscaling the image:', error);
        return null;
    }
}