const isToxic = /anjing|anj|babi|asu|memek|pepek|colmek|coli|ngentot|ngocok|kontol|unggeh|asyu|mmk|kntol|entod|pantek|ptk/i

export async function before(m, { conn, args, usedPrefix, command, text, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let name = conn.getName(m.sender)
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    let caption = `[❗] *Terdeteksi* Kakak ${name} Berkata Toxic\n\n Jangan Toxic Lagi Kak\n Soalnya Admin Atau Owner Group Mangaktifkan Fitur Antitoxic\n Dan Pesan Kakak Bakal Bot Hapus ${isBotAdmin ? '.' : 'Tapi Bot Bukan Admin'}`
    
    if (chat.antiToxic && isAntiToxic) {
        conn.sendMessage(m.chat, {
            text: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.setting.idch,
                   serverMessageId: null,
                   newsletterName: global.setting.namach,
                   },
                   externalAdReply: {
                   title: `Mau Sewa Bot Wa??,  Chat`,
                   body: `Wa Owner:` + setting.owner,
                   thumbnailUrl: pp || setting.tampilan,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, { quoted: m })
        if (isBotAdmin && chat.antiToxic) {
            await conn.sendMessage(m.chat, { delete: m.key })
            return !1
        }
    }
    return !0
}

export const disable = true