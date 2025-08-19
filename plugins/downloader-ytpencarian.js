import axios from 'axios';

let handler = async (m, { conn, args, text, RafiTampilan }) => {
  if (!text) return RafiTampilan('*Example :* .play lagu cikidap');
  try {
     await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
    let { data } = await axios.get('https://api.nekorinn.my.id/downloader/ytplay-savetube?q=' + encodeURIComponent(text));

    let { title, channel, duration, cover, url } = data.result.metadata;
    let audio = data.result.downloadUrl;
    m.reply('-5 Limit')
    await conn.sendMessage(m.chat, {
      audio: { url: audio },
      mimetype: 'audio/mpeg',
      fileName: title + '.mp3',
      contextInfo: {
        externalAdReply: {
          mediaUrl: url,
          mediaType: 2,
          description: `Channel : ${channel}\nDurasi : ${duration}`,
          title: title,
          body: 'YouTube',
          thumbnailUrl: cover
        }
      }
    }, { quoted: m });

  } catch {
    m.reply('Error Bg Kuh');
  } finally {
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
};
handler.tags = ['downloader *<judul>* (5 Limit)']
handler.help = ['play <judul>'];
handler.command = ['play'];
export default handler;