let handler = async(m, { conn, command }) => {
  let isPublic = command === "public";
  let self = global.opts["self"]

  if(self === !isPublic) return m.reply(`Dah ${!isPublic ? "Self" : "Publik"} dari tadi Bang :v`)

  global.opts["self"] = !isPublic

  m.reply(`${!isPublic ? "[❗] *Perintah DiTerima*\nBot Sekarang Dalam Mode Self" : "[❗] *Perintah DiTerima*\nBot Sekarang Dalam Mode Public"}`)
}

handler.help = ["self", "public"]
handler.tags = ["owner"]
handler.rowner = true
handler.command = /^(self|public)/i
export default handler 