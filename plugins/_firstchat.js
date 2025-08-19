import moment from 'moment-timezone'

export async function before(m, { RafiButtonTeks , conn }) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let name = conn.getName(m.sender)

    if (new Date() - user.pc < 86400000) return // waktu ori 21600000 (6 jam)
    let teks = `
*${ucapan()} Kak ${name}*


📮Note: Jangan Spam Bot Nya Ya Kak
📬Peringatan: Batasi 5 detik Per Command Kak

📝Ingin menghilangkan *limit*?
Beli akses *Premium* Kak
Limitnya Jadi Unlimited

pencet Tombol Di Bawah untuk info Harga Premium
`
    conn.sendMessage(m.chat, {
        text: teks,
        footer: setting.namabot,
        buttons:
            [
         {
      buttonId: '.hargapremium',
      buttonText: {
        displayText: 'Cek Harga Premium'
         }
         }
            ],
       headerType: 6,
       viewOnce: true
       }, { quoted: m })

    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dini hari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}