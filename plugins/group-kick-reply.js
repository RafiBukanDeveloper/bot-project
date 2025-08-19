let handler = async (m, {
    conn,
    groupMetadata,
    args,
    usedPrefix,
    command
}) => {
    let ids = groupMetadata.participants.filter(p => !p.admin || p.superadmin).map((v) => v.id)
    let text
    let listSections = []
    Object.keys(ids).map((v, index) => {
        listSections.push(["Result [ " + ++index + ' ]', [
            ['❌ KICK ' + conn.getName(ids[v]), usedPrefix + command + ' ' + ids[v], '']
        ]])
    })
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.sender) {
        text = m.quoted.sender
    } else return m.reply(' Lu Reply Pesan Member Yang Bakal Gw Kick Ngab ')

    if (!ids.includes(text)) throw 'Dia Sudah Out'
    return conn.groupParticipantsUpdate(m.chat, [text], 'remove')
}
handler.help = ['rkick', '-'].map(v => 'g' + v + ' @user')
handler.tags = ['group']
handler.command = /^(rkick|replykick|kickreply)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler