let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = ``;
    await conn.sendMessage(m.chat, {
   react: {
 text: "🥺",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/a7c38317d1a61dad45ac4.mp4', 'video.mp4' , message, m);
};

handler.customPrefix = /^(عنصري)$/i;
handler.command = new RegExp;

export default handler;
