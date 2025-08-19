import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*tekki/i.test(m.quoted.text) || /.*tekki/i.test(m.text))
        return !0
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki))
        return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tekateki[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
            return m.reply('*Yah Menyerah :( !*')
        }
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].money += this.tekateki[id][2]
            global.db.data.users[m.sender].exp += this.tekateki[id][2]
            global.db.data.users[m.sender].limit += 2
            m.reply(`
╔═══════════━──⪼
║ *Jawaban Kamu*
╠⪼ ${json.jawaban}
║  Wah Ternyata Benar✅
╚═══════════━──⪼
╔═══════════━──⪼
║ *Selamat Kak*
║ _Kamu mendapatkan_
╠──────────────⪼
║ *Money*💰= +${this.tekateki[id][2]}
╠──────────────⪼
║ *Limit*💳= +2
╠──────────────⪼
║ *XP*🎗️= +${this.tekateki[id][2]}
╚═══════════━──⪼`)
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi Kak*`)
        else
            m.reply(`*Salah Atuh Kak!*`)
    }
    return !0
}
export const exp = 0