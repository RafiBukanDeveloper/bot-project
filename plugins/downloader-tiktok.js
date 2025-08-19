import axios from 'axios';

let handler = async (m, { conn, args, RafiTampilan }) => {
  if (!args[0]) return RafiTampilan('Mana Link Tiktok Nya')
  
  let url = args[0];
  if (!url.match(/tiktok\.com/)) return m.reply('Link Mya Yang Valid Lah')
  
  try {
      await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
      m.reply('-5 Limit')
    let { data } = await axios.post('https://downloader.bot/api/tiktok/info', 
      { url },
      { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
    );
    
    let result = data.data;   
    await conn.sendMessage(m.chat, { 
      video: { url: result.mp4 },
      caption: ''
    }, {quoted: m});

    await conn.sendMessage(m.chat, 
{ audio: {url: result.mp3},
 mediaType: "audio/mpeg",
 ptt: true
 })
    
  } catch (e) {
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
    m.reply(`${e.message}`);
  } finally {
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
};

handler.help = ['tiktok *<url>* (5 Limit)'];
handler.command = ['tiktok','tt','ttd'];
handler.tags = ['downloader'];
handler.limit = 5
export default handler;