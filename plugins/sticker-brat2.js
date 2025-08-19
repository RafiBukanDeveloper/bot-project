import axios from 'axios';
import { Sticker } from 'wa-sticker-formatter';

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) return m.reply(' TULISANNYA MANA NGAB ')
    try {
        conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
        
        const url = `https://fastrestapis.fasturl.cloud/maker/brat/advanced?text=${encodeURIComponent(text)}&font=ariel&fontSize=auto&fontPosition=top&fontBlur=3&fontColor=%23000000&bgColor=%23FFFFFF`;

        const response = await axios.get(url, { responseType: 'arraybuffer' });

        const sticker = new Sticker(response.data, {
            pack: global.stickpack,
            author: global.stickauth,
            type: 'image/png',
        });

        const stikerBuffer = await sticker.toBuffer();
        await conn.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });

    } catch (error) {
        console.error('Error:', error);
        await conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.', m);
    } finally {
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
};

handler.help = ['brat2'];
handler.tags = ['sticker'];
handler.command = /^brat2$/i;

export default handler;