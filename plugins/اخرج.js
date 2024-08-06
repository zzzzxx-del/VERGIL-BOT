let handler = async (m, { conn, args, command }) => {
await m.reply('*شكرا ل استخدامكم بوت VERIFY اعتقد انه وقت الرحيل لذا الى اللقاء جميعا ✨♥️*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|اخرج|برا)$/i
handler.group = true
handler.rowner = true
export default handler
