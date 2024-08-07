export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*😕 اسف يا @${m.sender.split`@`[0]}, ممنوع التحدث مع البوت في الدردشه الخاص و الان سيتم حظرك*\n\n*اذا كنت تحتاج الى البوت في مجموعتك ف انصحك بأن تراسل مطوري*\n\n*رقم مطوري:-* wa.me//+201096570636`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
