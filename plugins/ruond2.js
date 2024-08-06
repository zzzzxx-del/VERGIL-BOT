let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = ``;
    await conn.sendMessage(m.chat, {
   react: {
 text: "☠️",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/3d6d3bf83468da1fe50d0.mp4', 'video.mp4' , message, m);
};

handler.customPrefix = /^(round2|round 2)$/i;
handler.command = new RegExp;

export default handler;
