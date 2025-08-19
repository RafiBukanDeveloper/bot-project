import axios from 'axios';
import { Sticker } from 'wa-sticker-formatter';

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) return m.reply(' TULISANNYA MANA NGAB ')
    try {
        conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
        
        const url = `https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(text)}&position=center&mode=image`;

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
    }
};

handler.help = ['bratanime'];
handler.tags = ['sticker'];
handler.command = /^bratanime$/i;

export default handler;