const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SALEEM-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0I4R2FtOVBzUHFSY0dOa1V0VjhoeWxkZVpqdExTeStuZ0R5NFpCMXhrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEQ2WWJyUzZtYlZJK3NGWDRvNWNaVGhlZ0VzMnhOOG8rcmhvVzk2L3h3OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQWVwZlBzYlUweFJNb05leUVhR0NQS2dxNW53SlBRSVZmZm9jZTQvUDFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYT1p4MFZzK2N3UWNNY1l2Mm1ZZ09ydEhWZmZYQU5yN2YwbUR5YURqR1h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFOV3pWMVRBeVhsbEZVL1BsdUFKZHpIZ3o0UHpKNGZNbllkaENuRkR6MWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjliTWREczdWWm1FMFRIazk5WUt0RVdiRk16K0U3UFpObStLQmM3WGw0MWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUtiSDA2QTZYa2c4c2M5ZVZOdTJXWWduY1ZLTnJTK3pkSFlDVUxkbk9FYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEFYK2NnNzc1dGRxdDVBeDZvZ1UyTmZFc3IzNjFnWXlBZ1BmUW5oN3Qwcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt2dzdNdXA5NzlrdWpPajFzL3dVZnhZWk5qOFlvVXRjRHV1aTIvSGpCTGgzQUFDTzhjQzlZNFpsV0VRRC91ZTcyemZCY05GdWhiU2ZGWHBSbjA3OGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6Ikd5UERsa1owWEZHQ1dXZThCY1lHM0FRcjhBQ0ZjYnF1YjA2WFBSZ0gzMU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkJERUZOUjdCIiwibWUiOnsiaWQiOiI5MjM0MTE4ODM2NzY6MjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTQ1NTA2NTY4NjAyMDY6MjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbkw4cWtDRUlXQm04Y0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5aE8wbERZbWEyaExKR3ZjOWVaL1dDeFkxK2RlYjFMTkl6ZFJrczMzTmhrPSIsImFjY291bnRTaWduYXR1cmUiOiJQaDNhTDN1bkZHeUN4amM4cUJhVk1NYjZFcWRaekhnRFh2clo4dFJFMHFKVjZpaHlURUg0OFpSZkxrRmgzdE1iOEk2VmxSK2RwNHpXT1BxQXFVSFVCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRXJCR0RTaUdHVzk4Vk1DYjJxcE9MMCtHUTI3bDhFYU4wZFFwY0F1eWM3MEcwSWlIYVRvTWl2eXJPRmRnNU5QTHQrY3padGl1VnZvdjAzL2pvblFGaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MTE4ODM2NzY6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY29UdEpRMkptdG9TeVJyM1BYbWYxZ3NXTmZuWG05U3pTTTNVWkxOOXpZWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5OTUzMDMyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgyVSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝗔𝗦𝗶𝗠_𝗠𝗗 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qgzjgi.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝗔𝗦𝗶𝗠_𝗠𝗗",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝗔𝗦𝗶𝗠_𝗠𝗗",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923444346909",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝗔𝗦𝗶𝗠 𝗞𝗛𝗔𝗡",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝗔𝗦𝗶𝗠_𝗠𝗗*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qgzjgi.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*𝗔𝗦𝗶𝗠_𝗠𝗗*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923444346909",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
