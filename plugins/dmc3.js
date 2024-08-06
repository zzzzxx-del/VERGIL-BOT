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

    conn.sendFile(m.chat, 'https://telegra.ph/file/01a4bfe8d72a3bf51fdf4.mp4', 'video.mp4' , message, m);
};

handler.customPrefix = /^(dmc3)$/i;
handler.command = new RegExp;

export default handler;
