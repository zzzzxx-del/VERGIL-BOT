
import { sticker } from "../lib/sticker.js";
import fetch from "node-fetch";

const handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    const gojo = 'VERGIL BOT';
    const gojo2 = conn.getName(m.sender);
    const yunapp = "https://telegra.ph/file/8cb16b24a53b06fc6a61f.png";
    
    let stiker = await sticker(null, yunapp, `${gojo}`,);
    conn.sendFile(m.chat, stiker, null, { asSticker: true }, m, true, { contextInfo: { forwardingScore: 200, isForwarded: true } }, { quoted: m });

    const audioFiles = ['./media/فيرجل.mp3']
  
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomAudio = audioFiles[randomIndex];
  
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: randomAudio}, ptt: true, mimetype: 'audio/mpeg', fileName: randomAudio.split('/').pop()}, {quoted: m});
  } catch {
    throw `حدث خطأ ما.`;
  }
};

handler.customPrefix = /فيرجل/
handler.command = new RegExp

export default handler;
