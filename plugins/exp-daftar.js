import { createHash } from 'crypto'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command, RafiTampilan }) {
    try {
        let hwaifu = "https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg"
        let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/6edtfv.jpg')
        let user = global.db.data.users[m.sender]
        if (user.registered === true) return RafiTampilan(`[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`)
        let list = []
        for (let i = 6; i < 71; i++) {
            list.push([`${usedPrefix + command} ${await conn.getName(m.sender)}.${i}`, i.toString(), "Umur " + i])
        }
        if (!Reg.test(text)) return conn.textList(m.chat, `Nama kamu : *${await conn.getName(m.sender)}* \nSilahkan pilih umur kamu dibawah, untuk melanjutkan registrasi bot WhatsApp`, false, list, m, { noList: true, 
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    mediaType: 1,
                    title: "Hallo " + await conn.getName(m.sender),
                    body: '',
                    thumbnail: pp,
                    renderLargerThumbnail: true,
                    mediaUrl: hwaifu,
                    sourceUrl: ''
                }
            }
        })
        let [_, name, splitter, age] = text.match(Reg)
        if (!name) return RafiTampilan('Nama tidak boleh kosong (Alphanumeric)')
        if (!age) return RafiTampilan('Umur tidak boleh kosong (Angka)')
        age = parseInt(age)
        if (age > 70) return RafiTampilan('WOI TUA (。-`ω´-)')
        if (age < 5) return RafiTampilan('Halah dasar bocil')
        if (name.split('').length > 30) return RafiTampilan('Nama Maksimal 30 Karakter')
        await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
        user.name = name.trim()
        user.age = age
        user.regTime = + new Date
        user.commandLimit = user.commandLimit === 1000 ? user.commandLimit : 100
        user.registered = true
        let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 12)
        let cap = `
┏─• *Users*
│▸ *Status:* ☑️ Succes
│▸ *Nama:* ${name}
│▸ *Umur:* ${age} Tahun
│▸ *Serial Number:* ${sn}
┗────···

Pendaftaran Selesai!
`.trim()
        RafiTampilan(cap)
    } finally {
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
}
handler.help = ['daftar']
handler.tags = ['xp']
handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}