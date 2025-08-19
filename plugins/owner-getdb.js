import fs from 'fs'
let handler = async (m, { conn, text }) => {
   if (m.sender == global.setting.bot + '@s.whatsapp.net') return
    m.reply('Tunggu Sebentar, Sedang mengambil file Database')
    let sesi = await fs.readFileSync('./rafibotdata.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'rafibotdata.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['owner']
handler.command = /^(getdb)$/i

handler.rowner = true

export default handler