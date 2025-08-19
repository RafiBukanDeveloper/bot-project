import { downloadContentFromMessage } from "@adiwajshing/baileys"
let handler = async ( m, { conn, text, args, command, usedPrefix, RafiTampilan }) => {
if (!text) return RafiTampilan(`gunakan format ${command} <NamaWeb>`)
let q = m.quoted
if (!q || !/zip|html/.test(q.mimetype)) return RafiTampilan("Reply file .zip atau .html!")
const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "")
const domainCheckUrl = `https://${webName}.vercel.app`
try {
    const check = await fetch(domainCheckUrl)
    if (check.status === 200) return RafiTampilan(`Website *${webName}* sudah dipakai, coba nama lain`)
} catch {}

const mediaType = q.mtype.replace("Message", "")
let buffer = Buffer.from([])
try {
    const stream = await downloadContentFromMessage(q, mediaType)
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])
} catch (err) {
    return RafiTampilan("Gagal mendownload file, mungkin sudah kadaluarsa atau rusak")
}
const filesToUpload = []
if (q.mimetype.includes("zip")) {
    const unzipper = require("unzipper")
    const directory = await unzipper.Open.buffer(buffer)
    for (const file of directory.files) {
        if (file.type === "File") {
            const content = await file.buffer()
            filesToUpload.push({
                file: file.path.replace(/^\/+/g, ""),
                data: content.toString("base64"),
                encoding: "base64"
            });
        }
    }
    if (!filesToUpload.some(x => x.file.toLowerCase().endsWith("index.html"))) {
        return RafiTampilan("index.html tidak ditemukan di dalam ZIP")
    }
} else if (q.mimetype.includes("html")) {
    filesToUpload.push({
        file: "index.html",
        data: buffer.toString("base64"),
        encoding: "base64"
    })
} else {
    return RafiTampilan("File tidak dikenali. Kirim ZIP atau file lain");
}
const headers = {
    Authorization: `Bearer DHJTkEu1QG1fuojGLvG3VFk5`,
    "Content-Type": "application/json"
}
await fetch("https://api.vercel.com/v9/projects", {
    method: "POST",
    headers,
    body: JSON.stringify({ name: webName })
}).catch(() => {})
const deployRes = await fetch("https://api.vercel.com/v13/deployments", {
    method: "POST",
    headers,
    body: JSON.stringify({
        name: webName,
        project: webName,
        files: filesToUpload,
        projectSettings: { framework: null }
    })
})
const deployData = await deployRes.json().catch(() => null);
if (!deployData || !deployData.url) {
    console.log("Deploy Error:", deployData);
    return RafiTampilan(`Deploy gagal:\n${JSON.stringify(deployData)}`);
}
const wurl = `https://${webName}.vercel.app`;
await conn.sendMessage(m.chat, {
        text: `WEBSITE URL: *${wurl}*`,
        title: "",
        subtitle: "",
        footer: "©" + setting.namabot,
        interactiveButtons: [
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                     display_text: "kunjungi web",
                     url: `${wurl}` 
                })},
              {
            	name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                     display_text: "salin URL",
                     copy_code: `${wurl}`
                })}
        ]}, { quoted:m})
}
handler.command = handler.help = ['deploy']
handler.tags = ['tools']
export default handler