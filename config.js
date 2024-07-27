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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_45_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY4LFxuICAgICAgICA4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3aExsUk11YXdNbkRJS1BhSVlNWklFYk9TUW80ZjJEazVhS21KTE9hY1ljPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc1MzI2NjM1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0I2OUM1MTU1NkNEODJCMzM3MjZGODI2MkExQTM0NTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTIwMzE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhCbFlXaWFXUS1LTE9NZndUOWYwR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2E3NGI2NDQtZjdiZC00OTg0LThjZWEtMDNkNjZlYzA3Mzg1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDEyMSxcbiAgICAgIDI0NyxcbiAgICAgIDIzNCxcbiAgICAgIDEwNyxcbiAgICAgIDExMCxcbiAgICAgIDE1MyxcbiAgICAgIDE3MSxcbiAgICAgIDYyLFxuICAgICAgMTA2LFxuICAgICAgMTAzLFxuICAgICAgMjUxLFxuICAgICAgMjI3LFxuICAgICAgMjcsXG4gICAgICAxOSxcbiAgICAgIDg1LFxuICAgICAgMTgzLFxuICAgICAgNCxcbiAgICAgIDE4OSxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDIzNyxcbiAgICAgIDIzNCxcbiAgICAgIDE5LFxuICAgICAgMjQxLFxuICAgICAgMjcsXG4gICAgICAxNTMsXG4gICAgICAyNDUsXG4gICAgICAyLFxuICAgICAgMjI0LFxuICAgICAgOTcsXG4gICAgICA4NixcbiAgICAgIDY0LFxuICAgICAgMTI0LFxuICAgICAgOTEsXG4gICAgICAxMjksXG4gICAgICAyMzQsXG4gICAgICAxMCxcbiAgICAgIDE3NyxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpEVFRSNkREXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NTMyNjYzNTA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEeW5hc3RyeSBCdXNpbmVzc1wiLFxuICAgIFwibGlkXCI6IFwiODgwODE1NzUxODY2NTA6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NWamJ3Q0VQandsYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSQnpta2NnbndDVENEUCtzckY3SHVaVU5ibmZBLzRrbEJyKzlpUUVMU1dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5Ub3hmcFRCazU4aWJDRlFFRFRpSDdsQitkWTVmWldscUdiOEhaWndtT1hkK3hucGs0ZE5BTmMwOUV0U2tIMDc2bDlYR2ZaU0N6Rmk2VmEwNnRPS0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImQ1ejlJSk13eUZwNUtGYUpnUzZKR2FsY1Q1QTNyR3lBZUFZdTNLV09zZTZSeThpclRzMjBkNHJ0WSt3bmt0eXNRbWN5SHpSLzgwTEFjcU00TTR2dmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc1MzI2NjM1MDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjEyMDMxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdwcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3BxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWUl2WVF6Rm85OGtJMUYyaUtRUVlCaE93VmEweEFHU3hGclVEZjZNamxyZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjI5MTU4MTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
