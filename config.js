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
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : " 254757151452 ";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_09_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzLFxuICAgICAgICA3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDM1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzLFxuICAgICAgICA0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkswQWYvMlJxeHhUdUV1RnJoZU9FOTk0TE10SXU4Y1FnaG0vR0F2dG84cTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFHYnpjdkJvUzFhQzlwV2xXdHFRaGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmMyODIxNGItZmQyYy00MjJiLWI2NWYtMmVjY2U3YTQyZDYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDIzNSxcbiAgICAgIDEzMyxcbiAgICAgIDksXG4gICAgICAxODUsXG4gICAgICA1NSxcbiAgICAgIDE2MCxcbiAgICAgIDI1MSxcbiAgICAgIDEsXG4gICAgICAxNzMsXG4gICAgICAxMjEsXG4gICAgICA0NCxcbiAgICAgIDIxOCxcbiAgICAgIDIsXG4gICAgICAyNTMsXG4gICAgICAyNDIsXG4gICAgICAxMDQsXG4gICAgICAxNDYsXG4gICAgICAxNzcsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgNDUsXG4gICAgICAyMzIsXG4gICAgICA4MyxcbiAgICAgIDE3OCxcbiAgICAgIDE4NixcbiAgICAgIDE0NSxcbiAgICAgIDMsXG4gICAgICAzOSxcbiAgICAgIDE0MCxcbiAgICAgIDU1LFxuICAgICAgMTI5LFxuICAgICAgMTAyLFxuICAgICAgMTY0LFxuICAgICAgMTgxLFxuICAgICAgMjM1LFxuICAgICAgMTQwLFxuICAgICAgOSxcbiAgICAgIDE5LFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhKVzY5RlFHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTcxNTE0NTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInRoZSBwcmVkYXRvclwiLFxuICAgIFwibGlkXCI6IFwiMTI3ODU3MjE3MDI4MTUxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2l5OHJZSEVPQzRpN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyTWFHb2xuYmVDNkZrbk94WkJIYWYvN0w1YmdaWkYxT3BFT2s4Ym5VTkRzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpHSDFvQms4U29pLzFMYTlnMFVDK2pEb2dvSmJrbzY2dFZjYlVha25LaFhXbkFpeEJndDYxMGN0VW1JMlF1T0g3Z3BBbW1uK1MxV2t3dXVmNnhMNEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllwMFRrT3dzMW1IR28xdE5NVDR4bnpPekU3Tk9RZExsU2VmWUZSYXdHRWU3WUNDK1diZ0ppbGVSd0lLaXY5d3dCdXk1My9hSEdTVUR3UnhvSVl6OGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1NzE1MTQ1MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NzU0OTgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHhRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQeFEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSa1VlMDVmVG9nTnFoMUJPUUhxdk4wMlFrcGI3RCtQeUd1eXkwb2loemRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTQxNjg2ODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzc1NDk4MzcyM1wifSIKfQ==  "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
