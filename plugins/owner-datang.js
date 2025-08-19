import fetch from 'node-fetch'
let handler = async (m, {
    conn,
    usedPrefix,
    command,
    isOwner
}) => {
       if (isOwner) {
        let rafi = `*Waduhh*, Owner Utamaku *${setting.namaowner}* Datang, Ayo Tepuk Tangan.\n@${m.sender.split('@')[0]}`
        await conn.sendMessage(m.chat, {
            text: rafi,
            contextInfo: {
                externalAdReply: {
                    title: setting.namabot,
                    body: setting.namaowner,
                    thumbnailUrl: setting.tampilan,
                    sourceUrl: "",
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargeThumbnail: true
                }
            }
        }, {
            quoted: m
        })
   }
}

handler.customPrefix = /^(hallo|cihuy|p)$/i
handler.command = new RegExp
export default handler