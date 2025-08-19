import "../a_ubahdisini_ngab.js";
let handler = async (m, {conn, args, usedPrefix, command}) => {
        
        const selected = args[0]?.toLowerCase();
  if (!['gambar', 'teks'].includes(selected)) {
    return m.reply(`*Penggunaan :*\n.set-tampilan-welcome gambar\n.set-tampilan-welcome teks`);
  }

  global.welcomeMode = selected; // Ubah global, bukan per user
  return m.reply(`✅ Tampilan semua user telah diubah ke *${selected.toUpperCase()}* mode.`);
}
handler.help = handler.command = ['set-tampilan-welcome']
handler.tags = ['owner']
handler.owner = true
export default handler