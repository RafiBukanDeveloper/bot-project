import fs from 'fs'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    const addnomorowner = JSON.parse(fs.readFileSync("./database/rafiowner.json"));
    
switch (command) {
case 'addowner': {
if (m.sender == global.setting.bot + '@s.whatsapp.net') return
    if (!args[0]) return m.reply(`Penggunaan ${usedPrefix+command} nomor\nContoh: ${usedPrefix+command} 6285xxxx`)
  let nomorr = args[0].replace(/[^0-9]/g, '')
  let nomor = args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
  if (nomor.startsWith('0')) return m.reply(`nomor harus dimulai dengan 628xxx`);
  let cek = await conn.onWhatsApp(nomor)
  if (!cek.length) return m.reply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`)
  if (addnomorowner.includes(nomor)) return m.reply(`Nomor ${nomor.split("@")[0]} sudah terdaftar sebagai owner!`)
  if (nomorr === global.setting.bot) return m.reply(`Nomor ${nomor.split("@")[0]} adalah nomor bot!`)
  if (nomorr === global.setting.owner) return m.reply(`Nomor ${nomor.split("@")[0]} adalah owner utama!`)
  
  addnomorowner.push(nomor)
  fs.writeFileSync("./database/rafiowner.json", JSON.stringify(addnomorowner, null, 2))
  m.reply(`Nomor ${nomor.split("@")[0]} Sekarang Dah Berhasil Di Tambahkan Ke Dalam Database Owner Bot`)

}
break
case 'delowner': {
if (m.sender == global.setting.bot + '@s.whatsapp.net') return
if (!args[0]) return m.reply(`Penggunaan ${usedPrefix+command} nomor\nContoh: ${usedPrefix+command} 6285xxxx`)
    let nomorr = args[0].replace(/[^0-9]/g, '')
    let nomor = args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
    if (nomor.startsWith('0')) return m.reply(`nomor harus dimulai dengan 628xxx`);
      if (nomorr === global.setting.bot) return m.reply(`Nomor ${nomor.split("@")[0]} adalah nomor bot!`)
      if (nomorr === global.setting.owner) return m.reply(`Nomor ${nomor.split("@")[0]} adalah owner utama!`)
            const unp = addnomorowner.indexOf(nomor);
            if (unp !== -1) {
                addnomorowner.splice(unp, 1);
                fs.writeFileSync('./database/rafiowner.json', JSON.stringify(addnomorowner));
                m.reply(`Nomor ${nomor.split("@")[0]} Sekarang Dah Berhasil Di Hapus Dari Dalam Database Owner Bot`)
}
}
break
}
}
handler.help = handler.command = ['addowner','delowner']
handler.tags = ['owner']
handler.rowner = true

export default handler