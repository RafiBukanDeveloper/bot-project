import axios from "axios"

let handler = async (m, { conn, usedPrefix }) => {
    let result = await axios.get("https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/dare.json")
    let dare = result.data.getRandom()
    m.reply(dare)
}
handler.help = ['dare']
handler.tags = ['fun','daftar']
handler.command = /^(dare)$/i
handler.register = true
export default handler
