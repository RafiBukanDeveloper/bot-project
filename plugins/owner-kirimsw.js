let { generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
    if (!text) return m.reply('Kirim Ke Siapa Ngab??\nKe group pake lewat ID Group\nKe PC Seseorang lewat nomor format 628xxx@s.whatsapp.net')
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/video/g.test(mime)) {
		let media = await q.download?.()
		conn.sendMessage(text, { video: media, caption: text, mentions: participants.map(a => a.id) }, { quoted: m })
	} else if (/image/g.test(mime)) {
		let media = await q.download?.()
		conn.sendMessage(text, { image: media, caption: text, mentions: participants.map(a => a.id) }, { quoted: m })
    } else if (/audio/g.test(mime)) {
		let media = await q.download?.()
		conn.sendMessage(text, { audio: media, mimetype: 'audio/mpeg', mentions: participants.map(a => a.id) }, { quoted: m });
	} else {
		conn.sendMessage(text, { text: text, mentions: participants.map(a => a.id) }, { quoted: m })
	}
}
handler.tags = ['owner']
handler.help = ['kirimsw']
handler.command = /^(kirimsw|kirimstorywa|krmsw)$/i
handler.owner = true
export default handler