let { generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/video/g.test(mime)) {
		let media = await q.download?.()
		conn.sendMessage(m.chat, { video: media, caption: '', mentions: participants.map(a => a.id) }, { quoted: m })
	} else if (/image/g.test(mime)) {
		let media = await q.download?.()
		conn.sendMessage(m.chat, { image: media, caption: '', mentions: participants.map(a => a.id) }, { quoted: m })
    } else if (/audio/g.test(mime)) {
		let media = await q.download?.()
		conn.sendMessage(m.chat, { audio: media, mimetype: 'audio/mpeg', mentions: participants.map(a => a.id) }, { quoted: m });
	} else {
		conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: m })
	}
}

handler.customPrefix = /^(hai|p|kiwkiw)$/i

handler.owner = true
handler.botAdmin = false
handler.group = false

export default handler