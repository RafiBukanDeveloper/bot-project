import fetch from "node-fetch"
import fs from "fs"

export async function before(m, { conn }) {
 let chat = global.db.data.chats[m.chat]
 if (chat.autoSholat) {
    conn.autosholat = conn.autosholat ? conn.autosholat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let id = m.chat
    if (id in conn.autosholat) {
        return false
    }
    let data = await (await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${global.daerah}&country=Indonesia&method=5`)).json();
    let jadwalSholat = data.data.timings;
    //Memperbaiki Nama Sholat
    let Subuh = jadwalSholat.Fajr
    let Dzuhur = jadwalSholat.Dhuhr
    let Ashar = jadwalSholat.Asr
    let Maghrib = jadwalSholat.Maghrib
    let Isya = jadwalSholat.Isha
    
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
        let aazan = 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
        let solat = `Hai kak @${who.split`@`[0]},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah ${global.daerah} dan sekitarnya._`
        let thumb = 'https://files.catbox.moe/at2m4v.jpg'
        
            conn.autosholat[id] = [
                conn.sendMessage(m.chat, { 
                audio: {url: aazan}, 
                mimetype: "audio/mpeg",
                ptt: true,
                contextInfo: {
mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.setting.idch,
      serverMessageId: 103,
      newsletterName: global.setting.namach
    },
    externalAdReply: {
title: `Waktu Sholat ${sholat}`, 
body: "Jangan Lupa Sholat Ya Kak!!", 
sourceUrl: "https://wa.me/6282286315998?text=Mau%bot%dong%kak",
thumbnailUrl: thumb, 
renderLargerThumbnail: false
}, 
}}, { quoted: m }),
                setTimeout(() => {
                    delete conn.autosholat[id]
                }, 57000)
            ]
        }
    }
  }
}
export const disabled = false