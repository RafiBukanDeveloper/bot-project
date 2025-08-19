import "../a_ubahdisini_ngab.js";
import { 
proto, 
getContentType, 
generateWAMessage, 
generateWAMessageFromContent, 
generateWAMessageContent,
prepareWAMessageMedia, 
downloadContentFromMessage
} from "@adiwajshing/baileys"

let handler = async (m, {conn, args, text, usedPrefix, command}) => {

const dick = `
┏┃ TYPE MENU ┃┓
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
text: "type Tampilan saat ini " + global.menuMode,
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
                      {"header":"button","title":"","description":"tampilan menggunakan button","id":".set-menu button"},
                      {"header":"teks","title":"","description":"tampilan menggunakan teks","id":".set-menu teks"},
                      {"header":"product","title":"","description":"tampilan menggunakan product","id":".set-menu gambar"}
             ]}]}`
       },
     ], },},
}, }, },{ quoted : m })

    if (!text) return conn.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }) 
    if (text === 'button', 'gambar', 'teks') {
    global.menuMode = text;
    m.reply(`Menu berhasil di Alihkan Ke ${text}`);
    } else {
    return;
    }
}
handler.help = handler.command = ['set-menu']
handler.tags = ['owner']
handler.owner = true
export default handler