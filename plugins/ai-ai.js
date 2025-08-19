import { GoogleGenerativeAI } from '@google/generative-ai'
import fs from 'fs'
let genAI = new GoogleGenerativeAI("AIzaSyBL8zt0eSiidVE_C5o3SgyOW3drFgg9gwg");

let handler = async (m, { conn, usedPrefix, RafiTampilan, command, text }) => {
    try {
        if (!text) return RafiTampilan(`Penggunaan:\n${usedPrefix + command } apakah hari ini bakal cerah?`)
        await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
        let q = m.quoted ? m.quoted: m
        let mime = (q.msg || q).mimetype || ''
        if (mime) {
            let download = await q.download(true)
            let model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
            let image = {
                inlineData: {
                    data: Buffer.from(fs.readFileSync(download)).toString("base64"),
                    mimeType: "image/png",
                },
            }
            let result = await model.generateContent([text, image])
            m.reply(result.response.text(), false, false, { smlcap: false })
        } else {
            let model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
            let result = await model.generateContent(text)
            m.reply(result.response.text(), false, false, { smlcap: false })
        }
    } finally {
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
    }
}
handler.help = ['ai <teks>']
handler.tags = ['ai']
handler.command = ['ai']
export default handler