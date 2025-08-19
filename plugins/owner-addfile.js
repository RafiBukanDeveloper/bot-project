import fs from 'fs';
import path from 'path';
import { downloadContentFromMessage } from '@adiwajshing/baileys';

let handler = async (m, { conn, text }) => {
    if (m.sender == global.setting.bot + '@s.whatsapp.net') return
    if (!m.quoted) return conn.reply(m.chat, 'Silakan kutip file yang ingin Anda tambahkan.', m);

    // Mendapatkan file yang dikutip
    const quoted = m.quoted;

    // Memastikan bahwa pesan yang dikutip adalah media
    if (!quoted || !quoted.mediaKey) {
        return conn.reply(m.chat, 'Pesan yang dikutip bukan file media yang valid.', m);
    }

    // Mendapatkan jalur folder dari argumen perintah
    const userFolder = text.trim(); // Mengambil argumen setelah perintah

    // Mendapatkan direktori dasar
    const baseDir = './'; // Ganti dengan direktori dasar Anda
    const folderPath = path.join(baseDir, userFolder);

    // Memeriksa apakah folder yang ditentukan ada
    if (!fs.existsSync(folderPath)) {
        return conn.reply(m.chat, 'Folder yang Anda pilih tidak valid. Pastikan jalur path benar.', m);
    }

    try {
        // Mengunduh konten dari pesan yang dikutip
        const stream = await downloadContentFromMessage(quoted, 'buffer');
        let buffer = Buffer.from([]);

        // Mengumpulkan chunk data ke dalam buffer
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        // Menentukan nama file
        const fileName = quoted.fileName || 'file'; // Menggunakan nama file asli jika ada
        const fullPath = path.join(folderPath, fileName);

        // Menyimpan file ke jalur yang ditentukan
        fs.writeFileSync(fullPath, buffer);
        conn.reply(m.chat, `File berhasil ditambahkan ke ${fullPath}`, m);
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Terjadi kesalahan saat menyimpan file. Pastikan jalur path benar dan file tidak rusak.', m);
    }
};

handler.help = ["addfile <folder_name>"];
handler.tags = ["owner"];
handler.command = /^(addfile)$/i;
handler.rowner = true;

export default handler;