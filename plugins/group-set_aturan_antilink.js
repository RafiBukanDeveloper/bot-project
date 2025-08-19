import "../a_ubahdisini_ngab.js";
let handler = async (m, {conn, args, usedPrefix, command}) => {
        
        const selected = args[0]?.toLowerCase();
  if (!['kick', 'nokick'].includes(selected)) {
    return m.reply(`*Penggunaan :*\n.${command} kick\n.${command} nokick`);
  }

  global.settingAnti = selected; // Ubah global, bukan per user
  return m.reply(`✅ Semua Aturan Anti Link diubah Ke *${selected.toUpperCase()}* mode.`);
}
handler.help = handler.command = ['set-perintah-antilink']
handler.tags = ['group']
handler.admin = true
export default handler