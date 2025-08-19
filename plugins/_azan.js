import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
    let azan = 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
m.reply('Tunggu Sebentar Kak, Lagi Proses')

await conn.sendMessage(m.chat, {
      audio: { url: azan },
      mimetype: 'audio/mpeg',
      ptt: true // Mengirim sebagai voice note
    }, { quoted: m });
}
handler.command = /^(suara-adzan)$/i
export default handler