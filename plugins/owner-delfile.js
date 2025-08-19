import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, text }) => {
   if (m.sender == global.setting.bot + '@s.whatsapp.net') return
    // Mengambil nama file dari argumen perintah
    const fileName = text.trim(); // Mengambil argumen setelah perintah

    // Mendapatkan direktori dasar
    const baseDir = './'; // Ganti dengan direktori dasar Anda
    const filePath = path.join(baseDir, fileName); // Membuat jalur lengkap ke file

    // Memeriksa apakah file yang ditentukan ada
    if (fs.existsSync(filePath)) {
        try {
            // Menghapus file
            fs.unlinkSync(filePath);
            conn.reply(m.chat, `File ${fileName} berhasil dihapus.`, m);
        } catch (error) {
            console.error(error);
            conn.reply(m.chat, 'Terjadi kesalahan saat menghapus file. Pastikan file tidak sedang digunakan.', m);
        }
    } else {
        conn.reply(m.chat, 'File yang Anda pilih tidak ditemukan. Pastikan nama file benar.', m);
    }
};

handler.help = ["delfile <file_name>"];
handler.tags = ["owner"];
handler.command = /^(delfile)$/i;
handler.rowner = true;

export default handler;