import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
    let owner = 'https://files.catbox.moe/gxw25w.mp3'
        
await conn.sendMessage(m.chat, {
      audio: { url: owner },
      mimetype: 'audio/mpeg',
      ptt: true // Mengirim sebagai voice note
    }, { quoted: m });
}
handler.customPrefix = /^(anjay|anjayy|wanjay|wanjayy|enjay|enjayy|)$/i
handler.command = new RegExp
export default handler 
