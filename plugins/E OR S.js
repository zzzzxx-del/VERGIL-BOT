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

    conn.sendFile(m.chat, 'https://telegra.ph/file/5a07a319e19fd68f43977.mp4, 'video.mp4' , message, m);
};

handler.customPrefix = /^(EORS|E OR S)$/i;
handler.command = new RegExp;

export default handler;
