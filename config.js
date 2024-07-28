const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://dynastry_user:2Qovyjbimr380zhxcrQYPGD1V7OZ9zhV@dpg-cqilqq2j1k6c739h410g-a.oregon-postgres.render.com/dynastry"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255753266350";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_44_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDk2LFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NixcbiAgICAgICAgMTg4LFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZDZ6a21JQndJOTJlMTVtRHRFbSthdDM1cmZqYXQ1bk5BbEV5ekxSNk5RMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NTMyNjYzNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk1MzJFODU3MjdERUQzQzBEODAwQkFGNjg4MkVFQTQ2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE0OTA2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfNUFwcDl0V1FTR0VZUjJIY2ZheEFnXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlZWZiOTUxLThhZDItNGVlYS05ZjFkLTlkODI0Mzg2ZGUwMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNTgsXG4gICAgICAxMzgsXG4gICAgICA1MixcbiAgICAgIDE2OSxcbiAgICAgIDEyNyxcbiAgICAgIDE0NyxcbiAgICAgIDIwLFxuICAgICAgMTE0LFxuICAgICAgOTksXG4gICAgICAxNzUsXG4gICAgICAxNjAsXG4gICAgICAxMzcsXG4gICAgICAxNTIsXG4gICAgICAxMjksXG4gICAgICAxMTMsXG4gICAgICAxNjUsXG4gICAgICAxOTksXG4gICAgICA5OSxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAxMDksXG4gICAgICAxMzcsXG4gICAgICA2NSxcbiAgICAgIDE2NixcbiAgICAgIDY4LFxuICAgICAgNDAsXG4gICAgICAyLFxuICAgICAgMjI5LFxuICAgICAgOTIsXG4gICAgICA4OSxcbiAgICAgIDIwMyxcbiAgICAgIDI0OSxcbiAgICAgIDIyOCxcbiAgICAgIDU0LFxuICAgICAgMjExLFxuICAgICAgMzYsXG4gICAgICAxOTYsXG4gICAgICA1MCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdSUlpLMVJMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NTMyNjYzNTA6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEeW5hc3RyeSBCdXNpbmVzc1wiLFxuICAgIFwibGlkXCI6IFwiODgwODE1NzUxODY2NTA6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2VWamJ3Q0VMM1JsN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSQnpta2NnbndDVENEUCtzckY3SHVaVU5ibmZBLzRrbEJyKzlpUUVMU1dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJKd0VvOFk1anNhMisxVVZPM0pqbmkvQjlpU2RyUGxTZjFaMkgwZHFUQm81RmtjbFJNNWsrcmFUY2w1S0VGUG9oa3pEbEVhZ2JOV2NWYW5qU21YNkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImMzblRvMS9mVS8zMXpCS2pGYWZaSElubWI3WnlETVFldEZZMWZtVndEcHNVUGt3dUlzczRJclBUdHYzdTVDU29xS3ZjSHRZU1NTczZTY0ZyeUgvYmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc1MzI2NjM1MDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE0OTA1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdweFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3B4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNnZPZzMybDJiSWVkbzc0NjlsNnQrcldiOEZPLzFrK2hrSzQ5anV5bVpLMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjI5MTU4MTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxNDg5MTg5OTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Dynastry",
  botname : process.env.BOT_NAME  || "Dynastry",
  ownername:process.env.OWNER_NAME|| "Dynastry",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
