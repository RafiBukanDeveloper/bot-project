import "../a_ubahdisini_ngab.js";
import { 
proto, 
getContentType, 
generateWAMessage, 
generateWAMessageFromContent, 
generateWAMessageContent,
prepareWAMessageMedia, 
downloadContentFromMessage
} from "@adiwajshing/baileys";
let handler = async (m, {conn, args, text, usedPrefix, command}) => {
const dick = `
┏┃ TYPE TAMPILAN ┃┓
┃╭───────────────┓
┃│⏣ • Button
┃│⏣ • teks
┃│⏣ • Gambar
┗╰───────────────┛`
let msg = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: dick,            
},
footer: {
text: "type Tampilan saat ini " + global.TampilanMode,
      },
 nativeFlowMessage: {
buttons: [         
             {
      "name": "single_select",
      "buttonParamsJson": `{
      "title": "select type",
             "sections":[{
                  "title":"select one of the menu views",
                   "rows":[
                      {"header":"button","title":"","description":"tampilan menggunakan button","id":".set-tampilan button"},
                      {"header":"teks","title":"","description":"tampilan menggunakan teks","id":".set-tampilan teks"},
                      {"header":"product","title":"","description":"tampilan menggunakan product","id":".set-tampilan gambar"}
             ]}]}`
       },
     ], },},
}, }, },{ quoted : m })

    if (!text) return conn.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }) 
    if (text === 'button', 'gambar', 'teks') {
    global.TampilanMode = text;
    m.reply(`Tampilan berhasil di Alihkan Ke ${text}`);
    } else {
    return;
    }
}
handler.help = handler.command = ['set-tampilan']
handler.tags = ['owner']
handler.owner = true
export default handler