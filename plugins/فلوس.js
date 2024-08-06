let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = ``;
    await conn.sendMessage(m.chat, {
   react: {
 text: "💵",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/bae3580232d731e7ab3c5.mp4', 'video.mp4' , message, m);
};

handler.customPrefix = /^(فلوس)$/i;
handler.command = new RegExp;

export default handler;
