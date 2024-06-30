const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="doktakobby@gmail.com"
global.location="Kumasi,Ghana."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Accra";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va8aNxzJENy5Obt7Tz0t";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va8aNxzJENy5Obt7Tz0t" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fd7eae51955895f2aed29.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ SASUKE¹³-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233257789272";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/fd7eae51955895f2aed29.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_13_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY1LFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNixcbiAgICAgICAgODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDk3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ3VFZ1dLT2NvemYxSlFyZ21mRml1Rzk1MlNpdGVHeUowVWsvdUd0dklaOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNTc3ODkyNzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc1ODI5ODU0M0ZDNzE0MDk4QzhGNTFDNDQ2RDFBNEE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTc0MjM5NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPam1YX3czaVRrLW5XUlhzNEVRcTVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI1MmQyMTgxLTNhOWUtNDA0NS04MmI2LThkMTYyYWNkNjRmY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA3OCxcbiAgICAgIDAsXG4gICAgICAyNDgsXG4gICAgICA0NCxcbiAgICAgIDk1LFxuICAgICAgMTgsXG4gICAgICAxNTQsXG4gICAgICAxNzMsXG4gICAgICAxNzUsXG4gICAgICA3LFxuICAgICAgMjIsXG4gICAgICAyMjgsXG4gICAgICA4OSxcbiAgICAgIDE5NCxcbiAgICAgIDE5LFxuICAgICAgMjMsXG4gICAgICAxNDMsXG4gICAgICAzMixcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICA1NixcbiAgICAgIDk5LFxuICAgICAgMjUxLFxuICAgICAgMjM0LFxuICAgICAgMTQ3LFxuICAgICAgMjA5LFxuICAgICAgMjUwLFxuICAgICAgMTUwLFxuICAgICAgMTkyLFxuICAgICAgMjUzLFxuICAgICAgMTA3LFxuICAgICAgMjM4LFxuICAgICAgMTUxLFxuICAgICAgODYsXG4gICAgICA4MCxcbiAgICAgIDE2MixcbiAgICAgIDAsXG4gICAgICA1OSxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZLR05QVlYxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNTc3ODkyNzI6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMzOTM4ODMxNjA1OTIzOjM5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNhc3VrZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002SGk2SUdFTFBmaExRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1NwVnZYcmRXSHBjYS8zdVZDN3F0eHZRaVhsZUszblNTOXlBUzBlWmVSST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVZjJZeFNnY1cyVUhzbTRGZjZaaWhIOE5BSWlHRG5tZ240T0FaQ2ZoTnRNNHU3Qy94Wm84OGo4bUY4T3Q2NmlUbFFoemZKTnJrUENTalZWVVpHeFVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJdlE1WWZ5VXhNQXROZFlLcUlvQm9UUlJPMGYwdDczMlRWdEEvZHVDdUcxSWVETXhLS3JFZE5ZWG16M3hoYUhkMC83UXBSRFdyZDV6THF0Vk9JNmdpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNTc3ODkyNzI6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc0MjM5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlLS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUtLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTktXK0lkaDUwc0VxMjhGOXlhWDFXVmI5NnlzeVVRYWVTMWtTamhqYUZCUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjgyMDk3MTAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
