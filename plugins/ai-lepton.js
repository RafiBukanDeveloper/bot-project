import { leptonAi } from "../lib/scrape2.js"

let handler = async (m, { conn, usedPrefix, RafiTampilan, command, text }) => {
    try {
        if (!text) return RafiTampilan(`Masukan text! \n\n*Contoh*\n${usedPrefix + command} Kapan indonesia merdeka`)
        await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
        let result = await leptonAi(text)
        await m.reply(result, false, false, { smlcap: false })
    } finally {
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
}
handler.help = ["leptonai"]
handler.tags = ["ai"]
handler.command = /^(lepton(ai)?)$/i
handler.limit = true
export default handler