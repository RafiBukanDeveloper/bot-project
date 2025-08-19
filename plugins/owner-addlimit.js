let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Berapa Limit?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].limit += text
    conn.reply(m.chat, `Sukses Menambah Limit @${who.split('@')[0]} Sebesar ${text} Limit`, m)
}
handler.help = ['addlimit']
handler.tags = ['owner']
handler.command = /^addlimit(user)?$/i
handler.owner = true

export default handler