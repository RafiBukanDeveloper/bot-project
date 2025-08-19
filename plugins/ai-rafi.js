import { GoogleGenerativeAI } from "@google/generative-ai";
let handler = async (m, { conn, text, usedPrefix, command, RafiTampilan }) => {
    if (!text) return RafiTampilan(`Penggunaan:\n${usedPrefix + command} Hai Rafi`)
  const genAI = new GoogleGenerativeAI("AIzaSyC1kPq2Ntf5vK7_77RuXkstTPYCdvz4y4g");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Kamu ada seorang laki laki kamu tipe nya cuek, dan gampang toxic, pergaulan kamu luas, dan nama kamu Rafi, kamu tinggal di Padang, kamu orangnya toxic, dan gampang marah,kamu sekarang umurnya 20 dan kamu sekarang Bekerja Jual Ganja",
});
const prompt = `${text}`;

const result = await model.generateContent(prompt);
  await conn.sendMessage(m.chat, {
  text: `[ Rafi ]\n\n${result.response.text()}`,
      contextInfo: {
      externalAdReply: {
        title: 'INI ORANGNYA',
        body: 'RAFI',
        thumbnailUrl: 'https://files.catbox.moe/yo80go.jpg',
        sourceUrl: 'https://wa.me/6282284163778',
        mediaType: 1,
        renderLargerThumbnail: false, 
        showAdAttribution: true
      }}
  })}
handler.tags = ['ai']
handler.command = ['rafi','fhi','fi','pi','rafi']
handler.help = ['rafi']
export default handler;