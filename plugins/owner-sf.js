import fs from 'fs'
let handler = async (m, {
	text,
	usedPrefix,
	command
}) => {
		if (!text) return;
		if (!m.quoted.text) throw `balas pesan nya!`
		let path = `${text}`
		await fs.writeFileSync(path, m.quoted.text)
		m.reply(`tersimpan di ${path}`)
}
handler.command = /^(sf)$/i
handler.rowner = true

export default handler