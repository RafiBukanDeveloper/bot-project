let handler = async (m, { conn, text, usedPrefix, command }) => {
  let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
  if (!who) return m.reply(`Reply atau tag orangnya Yang Bakaln di Ikhlasin! \n\nContoh : \n${usedPrefix + command} @${m.sender.split('@')[0]}`, false, { mentions : [m.sender] })
  let user = global.db.data.users
  if (user[m.sender].tembak == "") return conn.reply(m.chat, `Kamu Sedang Tidak Menembak Siapapun!`, m)
  if (user[m.sender].pacar == m.sender) return conn.reply(m.chat, `Kamu Telah Berpacaran Dengan @${user[m.sender].pacar.split('@')[0]}`, m, {contextInfo: {
    mentionedJid: [user[m.sender].pacar]
  }})
  conn.reply(m.chat, `Kamu Sudah Mengikhlaskan @${user[m.sender].tembak.split('@')[0]} Karena Dia Tidak Memberikan Jawaban Diterima Atau Ditolak`, m, {contextInfo: {
    mentionedJid: [user[m.sender].tembak]
  }})
  user[m.sender].tembak = ""
  user[who].tembak = ""
}
handler.help = ['ikhlasin']
handler.tags = ['group']
handler.command = /^(ikhlasin|ikhlas)$/i
handler.group = true
export default handler