import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
import { GoogleGenerativeAI } from "@google/generative-ai";

const defaultLang = 'id'
let handler = async (m, { conn, args, usedPrefix, command, text, RafiTampilan }) => {
if (!text) return RafiTampilan(`Penggunaan:\n${usedPrefix + command} Hai Rafi`)
  const genAI = new GoogleGenerativeAI("AIzaSyC1kPq2Ntf5vK7_77RuXkstTPYCdvz4y4g");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Kamu ada seorang laki laki kamu tipe nya cuek, dan gampang toxic, pergaulan kamu luas, dan nama kamu Rafi, kamu tinggal di Padang, kamu orangnya toxic, dan gampang marah,kamu sekarang umurnya 20 dan kamu sekarang tidak bekerja",
});
const prompt = `${text}`;
   const result = await model.generateContent(prompt); 
       let res = await tts(result.response.text(), defaultLang)
          conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
}
handler.help = ['rafivn <lang> <teks>']
handler.tags = ['ai']
handler.command = /^rafivn$/i
handler.limit = true

export default handler

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}