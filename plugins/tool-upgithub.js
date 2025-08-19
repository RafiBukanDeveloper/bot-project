import fs from "fs"
import unzipper from 'unzipper'
import path from "path"
import axios from "axios"
let handler = async ( m, { conn, text, args, RafiTampilan, command, usedPrefix }) => {
let q = m.quoted
if (!text) return RafiTampilan('Masukkan nama repo')
if (!q) return RafiTampilan('Reply file yang ingin diupload Sayang')
const repoName = text.trim()
const githubToken = "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"
const repoOwner = "RafiBukanDeveloper"
const processFile = async (filePath, fileName) => {
const fileContent = fs.readFileSync(filePath);
const base64Content = fileContent.toString('base64');
const url = "https://api.github.com/repos/${repoOwner}/${repoName}/contents/${fileName}"
const response = await axios.put(url, {
message: `Upload ${fileName}`,
content: base64Content,
}, {
headers: {
Authorization: `Bearer ${githubToken}`,
'Content-Type': 'application/json'
}
})
return response.data
}
const quotedMime = q.mtype || q.mediaType
const filePath = await q.download()
if (quotedMime.includes('zip')) {
const unzipPath = path.join(__dirname, 'temp_unzip')
fs.mkdirSync(unzipPath, { recursive: true });
await fs.createReadStream(filePath)
.pipe(unzipper.Extract({ path: unzipPath }))
.promise()
const files = fs.readdirSync(unzipPath)
for (const file of files) {
const fullPath = path.join(unzipPath, file)
await processFile(fullPath, file)
}
fs.rmSync(unzipPath, { recursive: true, force: true })
} else {
await processFile(filePath, path.basename(filePath))
}
RafiTampilan('File berhasil diupload ke GitHub')
}
handler.help = handler.command = ["upgithub"]
handler.tags = ["tools"]

export default handler