const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SALEEM-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1ByeFFZSmx0bmE5SW1OR3hzUGk4OG5RWEdTTGFYMVFpNk40ZW1UbG5saz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVJPNTBlWTNhdWJ2Y3F5M1lNWjBtWm8wYUJkMGR5QkpMRjZwVHVKenkwVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRFNCalgzalpCdk5YQ0ZyWGl1QTVsUTRzRFRxRmczMmdrWEtYa3N5QldvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWYnkzUVlYUmRlWTVhOFNGemc3cG5WV0dBenhjbmMzV3BHU1QzQ0t4d3hrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNL3N0VzVFS0ZaSnhid1RzdWlVdHEvNkI4a2xZUjJsTEJmSWNFci9wRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQSGVLWFRWclZLOVlOckpxZjhWakNQMExLQ2lRRUlWVmFqRjkzRUpyVUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BsSEVES2FFU0psejcybHhBckYxMExCTXZpZHpLb1p0STl4MDZ2QVExcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU0rWWtZVjFwYzBoY0o3V1NvN0F6bytLZVQ2UWFCWWNnOFVIYm9BNEoyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdabUJXWHFsQ09LWFFOS20rd2llR0o1WlpMV0tzbXEwWWhPNGE2QjREcEhBUmF5TWpoWnlzTG9oVlhTZ3BiYkhNSVB2RnltYTkyWSt2MTUwajY5S0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6Inpta1Nmd21hUWRZcXJlMUI0QndmdnFGNFZQNVd4SlhKRHV5eHRpQm9sSEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjFTMVoyOEhRIiwibWUiOnsiaWQiOiI5MjM0OTEyMjE4NDU6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkvCdkJrwnZCl8J2QnvCdkJ7wnZCmLfCdkIPwnZCa8J2Qq/CdkKQg8J2Qk/CdkJ7wnZCa8J2QpiIsImxpZCI6IjI0ODA2OTI1Nzk3Mzg5MTozMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rSnllMERFTTd4bXNjR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpXbEh3RDJIT1c0ZzcxR2ZXNzRGTW9FbjhINXJ6eGlmOWE1LzZKN1BTQUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllORDVBWExGaWN6c3gxdGw0alZWNUN0eXZ4ZE9JbnZNMzRZd2tOdTNmU0N6TzJLdGwvclg2NmZ6Nm5WRnY4VEFpbkpUeFNoVmR5cm8wQXRYZS90K0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkcVdNSStLQWc0MWFpdy9jZUw1VS9sbk14TEhGcmRJeFdDZ0F1U01mRkJmTTcxODJOQ1lmOXNBcVBabGRLMFRKSTNvWEI3Z0E5RTVhRWVNTDlIWGJCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ5MTIyMTg0NTozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXVnBSOEE5aHpsdUlPOVJuMXUrQlRLQkovQithODhZbi9XdWYraWV6MGdCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk5NTEwNTksImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDc0sifQ==",
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
