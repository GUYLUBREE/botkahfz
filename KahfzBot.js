/*
Jangan Hapus Di Bawah
kahfz·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴
*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let kahfzX4thumb = 'https://telegra.ph/file/f1674683f8d9cb89e015f.jpg'

banChats = true
offline = false
ownerNumber = ["6283127014833@s.whatsapp.net"]
targetpc = '6283127014833'
owner = '6283127014833'
fake = 'kahfzXzy'
botName = 'KahfzBot'
numbernye = '0'
waktu = '-'
alasan = '-'
tamnel = fs.readFileSync('./stik/thumb.jpeg')

xchillds = 'XChillDs'
HunterApi = 'Ikyy69'
XteamKey = 'MIMINETBOT'
apikey = 'RizkyxNaqib'
DapApi = 'dappauhuy'
spykey = 'SpyBotApi'
indoapi = 'Fxc7'
botxyz = 'Aprii'
rakukey = 'RakuKeyTod'
apisenku = 'SenkuApi'
valkey = 'rivalgans'

pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo

harga1bulan = setting.harga1blnsewa
harga2bulan = setting.harga2blnsewa
harga6bulan = setting.harga6blnsewa
hargaperpanjang = setting.panjangsewa
ppbot = setting.ppbot

hit_today = []
///database

let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))

//

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//=================================================//
module.exports = kahfz = async (kahfz, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
        const q = args.join(' ')
		const botNumber = kahfz.user.jid
		const botNumberss = kahfz.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await kahfz.chats.all()
		const groupMetadata = isGroup ? await kahfz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const conts = mek.key.fromMe ? kahfz.user.jid : kahfz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? kahfz.user.name : conts.notify || conts.vname || conts.name || '-'
        const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })

        //MESS
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = kahfz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "\`\`\`©kahfzX4·Team\`\`\`","listType": "SINGLE_SELECT","sections": list}}, {})
            return kahfz.relayWAMessage(po, {waitForAck: true})
        }
        
        const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
                }
               
                const fakevo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'KirBotz',
      jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg'),
      viewOnce: true
    }
  }
}
        const reply = (teks) => {
            kahfz.sendMessage(from, teks, text, {quoted:fvid})
        }
        // FAKE LINK 
        let kahfzzz = await getBuffer(`${ppbot}`)
fakelink = (tekslink) => { 
  return {"externalAdReply": { "title": tekslink, "thumbnail": kahfzzz, "sourceUrl": "https://wa.me/qr/UCVMNO2VLMDBK1" }}
}
//Button
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
            let kma = gam1
            let mhan = await kahfz.prepareMessage(from, kma, image)
        const buttonMessages = {
            imageMessage: mhan.message.imageMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 4
        }
            kahfz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
kahfz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await kahfz.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
kahfz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return kahfz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
}
        const sendMess = (hehe, teks) => {
            kahfz.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? kahfz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : kahfz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            kahfz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            kahfz.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            kahfz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        kahfz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			kahfz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			kahfz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			kahfz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			kahfz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			kahfz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    kahfz.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            kahfz.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        kahfz.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${ucapanWaktu} ${pushname}`, 
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
                      const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${ucapanWaktu} ${pushname}`,
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
                      const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  } 
                      const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu}`,
                 "h": `${ucapanWaktu}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu}`,
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  }
	                  function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
                      if (isGroup && !mek.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
kahfz.groupRemove(from, [sender])
}, 2000);
}
}
let settingstatus = 0;
      if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await kahfz.setStatus(`Aktif Selama: ${runtime(process.uptime())} | Mode: ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'} || KAHFZ BOT`).catch((_) => _);
      settingstatus = new Date() * 1;            
          }
    if (!mek.key.fromMe && banChats === true) return;
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6287705048235@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6287705048235@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	

let mengt =`kahfzX4·Team`  
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
const isBtMsg = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        if (!mek.key.fromMe && banChats === true) return

// Auto 
       kahfz.updatePresence(from, Presence.recording)
         kahfz.chatRead(from, "read")
        if (!mek.key.fromMe && banChats === true) return
switch (command) {
    case 'jadibot':
    if (!isOwner) return  sticOwner(from)
    jadibot(reply,kahfz,from)
    break
    case 'stopjadibot':
    if (!isOwner) return  sticOwner(from)
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'own':
                let kahfzX4·Team = kahfz.prepareMessageFromContent(from, {
                "listMessage": {
						"title": `Hai kak ${pushname},${ucapanWaktu}\n`,
						"description": "INI CREDITS",
						"buttonText": "SELECT",
						"footerText": `THANKS TO ALL CREATOR`,
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "◉ OWNER Ke-1",
								"rows": [
									{
										"title": "LordPebri",
										"description": "YT FEBZABOTZ",
										"rowId": `${prefix}owner1`
									}
								]
							},
							{
								"title": "◉ OWNER ke-2",
								"rows": [
									{
										"title": "KahfzBot",
										"description": "YT KAHFZBOTZ",
										"rowId": `${prefix}owner2`
									}
								]
							},
							{
								"title": "◉ OWNER ke-3",
								"rows": [
									{
										"title": "AkiraBot",
										"description": "YT KIRBOTZ",
										"rowId": `${prefix}owner3`
									}
								]
							},
							{
								"title": "◉ OWNER ke-4",
								"rows": [
									{
										"title": "Aril Style",
										"description": "YT ARILBOTZ",
										"rowId": `${prefix}owner4`
									}
								]
							},
							{
								"title": "◉ OWNER ke-5",
								"rows": [
									{
										"title": "FauzanBotz",
										"description": "YT FAUZANBOTZ",
										"rowId": `${prefix}owner5`
									}
								]
							},
							{
								"title": "◉ OWNER ke-6",
								"rows": [
									{
										"title": "Adi Official",
										"description": "YT ADI OFFICIAL",
										"rowId": `${prefix}owner6`
									}
								]
							},
							{
								"title": "◉ OWNER ke-7",
								"rows": [
									{
										"title": "Lord Galih",
										"description": "Galih Aja",
										"rowId": `${prefix}owner7`
									}
								]
							}
								]
							}
						
					
				},
			{}
		)
	    kahfz.relayWAMessage(kahfzX4·Team, {waitForAck: true})     
                break					
// CREDITS TEAM
     case 'owner1':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:LordPebri\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6285849261085:6285849261085\n`
         + 'END:VCARD'.trim()
         kahfz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('\`\`\`Jangan Lupa Subscribe\`\`\`\nhttps://youtube.com/c/FEBZABOTZ')
         break
     case 'owner2':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:KahfzBotz\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6283127014833:6283127014833\n`
         + 'END:VCARD'.trim()
         kahfz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('\`\`\`Jangan Lupa Subscribe\`\`\`\nhttps://youtube.com/channel/UCLWReaUjBkrRzI-OnGlWskw')
         break
     case 'owner3':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:AkiraBotz\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6287705048235:6287705048235\n`
         + 'END:VCARD'.trim()
         kahfz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('\`\`\`Jangan Lupa Subscribe\`\`\`\nhttps://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg')
         break
     case 'owner4':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:ArilStyle\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=62881024358619:62881024358619\n`
         + 'END:VCARD'.trim()
         kahfz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('\`\`\`Jangan Lupa Subscribe\`\`\`\nhttps://youtube.com/channel/UCLPjdfA1WqgHLHc3lsn2kmA')
         break
     case 'owner5':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:FauzanBot\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6289516004292:6289516004292\n`
         + 'END:VCARD'.trim()
         kahfz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('\`\`\`Jangan Lupa Subscribe\`\`\`\nhttps://youtube.com/channel/UCZnor19gyF010anLraDWTTA')
         break
     case 'owner6':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:Adi OFC\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6289504585790:62895-04585790\n`
         + 'END:VCARD'.trim()
         kahfz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('\`\`\`Jangan Lupa Subscribe\`\`\`\nhttps://youtube.com/channel/UCXzxFx9pitmYFLJo4nHrRPg')
         break
     case 'owner7':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:Lord Galih\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6289530863358:6289530863358\n`
         + 'END:VCARD'.trim()
         kahfz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('\`\`\`Chat aja bang\`\`\`')
         break
case 'credit': // fix by Akira Gantenk
stod = `${sender.split('@')[0]}@s.whatsapp.net`
taggg =`
⬣ THANKS TO TEAM
 • メ𝐊𝐚𝐡𝐟𝐳 ⟨ @6283127014833 ⟩
 
⬣ SPECIAL THANKS
 \`\`\`• Hexagonz/Base\`\`\`
 \`\`\`• Penyedia Api\`\`\`
 \`\`\`• Adiwajshing/Baileys\`\`\`
 \`\`\`• All User ${botName}\`\`\`
 `
mentions(taggg, [`6283127014833@s.whatsapp.net`], true)
break
case 'menu':
kahfz.sendMessage(from, {"contentText": `
Hai Kak *${pushname}* 
🌾${ucapanWaktu}
🪡Runtime  : *${runtime(process.uptime())}*
📢Tanggal  :*${date}*
🔑Prefix.     : *${prefix}*
`,"footerText": `
*_♻️LIST MENU♻️_*

*_🔎SEARCH MENU_*
\`\`\`🎈${prefix}pinterest\`\`\`

*_👤OWNER MENU_*
\`\`\`🛶${prefix}bc\`\`\`  _<text>
*_📂QUOTES MENU_*
\`\`\`📠 ${prefix}quotesislami\`\`\`
 
 *_🎓PENDIDIKAN MENU_*
 \`\`\`🔎${prefix}nulis\`\`\` _<Tekst?>_
 
 *_💮STICKER MENU_*
 \`\`\`📳${prefix}sticker\`\`\` _<replay foto / kirim foto dengan Caption #sticker>_
 
 *_🕋ISLAMI MENU_*
 \`\`\`🕌${prefix}jadwalsholat\`\`\` _<daerah>_
 \`\`\`📼${prefix}alquranaudio\`\`\` _<contoh 18/10>_
 
 *_▶️MUSIK MENU_*
  \`\`\`▶️${prefix}jooxplay\`\`\` _<nama lagu>_
 
_AJARIN BIKIN BOT KAK_ || *${date}*
*ᴘᴇʀɪɴɢᴀᴛᴀɴ ᴋᴇʀᴀs*
» ᴊᴀɴɢᴀɴ sᴘᴀᴍ ᴄᴏᴍᴍᴀɴᴅ <ᴊᴇᴅᴀ>
» ᴄᴜʟɪᴋ ʙᴏᴛ = ʙᴀɴɴᴇᴅ ᴘᴇʀᴍᴀɴᴇɴᴛ
» ɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ
KahfzBotSelf`,
"buttons": [
{buttonId: `.donasi`, buttonText: {displayText: 'DONASI☕'}, type: 1},
{buttonId: `.owner`, buttonText: {displayText: 'OWNER👑‍️'}, type: 1}],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kahfzzz, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
case 'alquranaudio':
if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
  surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=DashBot`)
await kahfz.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
break
case 'ppcp':
case 'ppcouple':

anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
buff1 = await getBuffer(anu.result.male)
buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©WhatsApp bot`},type:1}]
imageMsg = (await kahfz.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
buttonsMessage = {footerText:'KAHFZ BOT', imageMessage: imageMsg,
contentText:`Cowo`,buttons,headerType:4}
prep = await kahfz.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
kahfz.relayWAMessage(prep)
buff2 = await getBuffer(anu.result.female)
buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©WhatsApp bot`},type:1}]
imageMsg = (await kahfz.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
contentText:`Cewe`,buttons,headerType:4}
prep = await kahfz.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
setTimeout( async () => {
 kahfz.relayWAMessage(prep)
  }, 5000)
break
case 'script': case 'sc':
 kahfz.sendMessage(from,`
kahfz·SC JELEK KOK MAU KAK?
`, text, { thumbnail: tamnel, sendEphemeral: true, quoted: fdoc, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "📄 𝕊ℂℝ𝕀ℙ𝕋 📄",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),sourceUrl:"https://xnxx./"}}} )
case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await kahfz.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              kahfz.sendMessage(from, await getBuffer(pic), image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6288215463787@g.us" }: {})},message:{"orderMessage":{"orderId":"6288215463787","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
		break
case 'allmenu':
thu = await kahfz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
「 𝐎𝐖𝐍𝐄𝐑 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}off\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}on\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}status\`\`\`

「 𝐌𝐀𝐊𝐄𝐑 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}sticker\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}swm\`\`\` <author|packname>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}take\`\`\` <author|packname>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}fdeface\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}emoji\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}nulis\`\`\`

「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}toimg\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}tomp3\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}tomp4\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}slow\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}fast\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}reverse\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}tourl\`\`\`

「 𝐔𝐏 𝐒𝐓𝐎𝐑𝐘 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}upswteks\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}upswimage\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}upswvideo\`\`\`

「 18+ 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}chiisaihentai\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}trap\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}blowjob\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}yaoi\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}ecchi\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}hentai\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}ahegao\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}hololewd\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}sideoppai\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}animefeets\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}animebooty\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}animethighss\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}hentaiparadise\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}animearmpits\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}hentaifemdom\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}lewdanimegirls\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}biganimetiddies\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}animebellybutton\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}hentai4everyone\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}loli\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}husbu\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}milf\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}cosplay\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}wallml\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}pornhub\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}glitch\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}avenger\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}space\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}ninjalogo\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}marvelstudio\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}lionlogo\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}wolflogo\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}steel3d\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}wallgravity\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}tiktok\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}arcade8bit\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}battlefield4\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}pubg\`\`\`

「 RANDOM 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}ppcouple\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}anime\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}wallpaper\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}neko\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}meme\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}quotes\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}quotesimage\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}randomnama\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}faktaunik\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}katabijak\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}pantun\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}bucin\`\`\`

「 TEXTPROME 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}blackpink\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}neon\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}greenneon\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}advanceglow\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}futureneon\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}sandwriting\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}sandsummer\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}sandengraved\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}metaldark\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}neonlight\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}holographic\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}text1917\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}minion\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}deluxesilver\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}newyearcard\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}bloodfrosted\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}halloween\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}jokerlogo\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}fireworksparkle\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}natureleaves\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}bokeh\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}toxic\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}strawberry\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}box3d\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}roadwarning\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}breakwall\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}icecold\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}luxury\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}cloud\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}summersand\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}horrorblood\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}thunder\`\`\`


「 EPHOTO 360 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}wetglass\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}multicolor3d\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}watercolor\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}luxurygold\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}galaxywallpaper\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}lighttext\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}beautifulflower\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}puppycute\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}royaltext\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}heartshaped\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}birthdaycake\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}galaxystyle\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}hologram3d\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}greenneon\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}glossychrome\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}greenbush\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}metallogo\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}noeltext\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}glittergold\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}textcake\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}starsnight\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}wooden3d\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}textbyname\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}writegalacy\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}galaxybat\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}snow3d\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}birthdayday\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}freefire\`\`\`

「 PHOTO OXY 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}shadow\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}cup\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}cup1\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}romance\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}smoke\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}burnpaper\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}lovemessage\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}undergrass\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}love\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}coffe\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}woodheart\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}woodenboard\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}summer3d\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}wolfmetal\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}nature3d\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}underwater\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}golderrose\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}summernature\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}letterleaves\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}glowingneon\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}fallleaves\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}flamming\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}harrypotter\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}carvedwood\`\`\`

「 𝐅𝐔𝐍 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}fitnah\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}fitnahpc\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}kontak\`\`\`

「 𝐓𝐀𝐆 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}hidetag\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}kontag\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}sticktag\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}totag\`\`\`

「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}ytsearch\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}igstalk\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}play\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}video\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}ytmp3\`\`\` <link>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}ytmp4\`\`\` <link>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}ig\`\`\` <link>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}igstory\`\`\` <username>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}twitter\`\`\` <link>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}tiktok\`\`\` <link>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}tiktokaudio\`\`\` <link>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}fb\`\`\` <link>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}brainly\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}image\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}anime\`\`\` <random>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}pinterest\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}komiku\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}lirik\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}chara\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}playstore\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}otaku\`\`\` <query>

「 𝐎𝐓𝐇𝐄𝐑 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}self\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}public\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}setthumb\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}settarget\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}setfakeimg\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}setreply\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}ping\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}inspect\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}join\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}caripesan\`\`\` <query>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}get\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}term\`\`\` <code>
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`x\`\`\` <code>

「 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}jadibot\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}stopjadibot\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}listbot\`\`\`

「 𝐕𝐎𝐓𝐄 」
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}voting\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`${prefix}delvote\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`vote\`\`\`
ꪶ ཻུ۪۪ꦽꦼ̷ \`\`\`devote\`\`\``
kahfz.sendMessage(from, { contentText: `${menuh}`, footerText: `

Runtime : *${runtime(process.uptime())}*
Tanggal *${date}*

kahfz
̵`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'メ Donasi' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'メ Sewabot' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'sewabot':
thu = await kahfz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
Yakin Nih Mau Sewa Bot ? 🤔 Boong Auto Banned >_<`
kahfz.sendMessage(from, { contentText: `${menuh}`, footerText: `Tanggal:  *${date}*\nJam: *${time}*\nRuntime : *${runtime(process.uptime())}*\n𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ`, buttons: [{ buttonId: `${prefix}sewa1`, buttonText: { displayText: '🗿Ya' }, type: 1 },{ buttonId: `${prefix}gk`, buttonText: { displayText: '👀Tidak' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'sewa1':
               list = []
               listmenu = [`waktu 1bulan`,`waktu 2bulan`,`waktu 6bulan`,`waktu panjang`]
               listmenuu = [`1 BULAN`,`2 BULAN`,`6 BULAN`,`PERPANJANG SEWA`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'LIST KE ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `Silahkan Pilih List Yang Mau Di Sewa\n\n\n\`\`\`×××\`\`\` KirBotz`,`  `, list)
               break
case 'waktu':
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == '1bulan'){
            saa =`${harga1bulan}`            
            const buttonpulsa = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonpulsa,
			headerType: 1
			}
            kahfz.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == '2bulan'){
            pay =`${harga2bulan}`            
            const buttongopay = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttongopay,
			headerType: 1
			}
            kahfz.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == '6bulan'){
            voo =`${harga6bulan}`            
            const buttonovo = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            kahfz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'panjang'){
            voo =`${hargaperpanjang}`            
            const buttonovo = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            kahfz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            break
case 'via':
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == 'pulsa'){
            saai =`${pulsa}`            
            const buttonpulsa = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saai}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttonpulsa,
			headerType: 1
			}
            kahfz.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'gopay'){
            payu =`${gopay}`            
            const buttongopay = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${payu}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttongopay,
			headerType: 1
			}
            kahfz.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'ovo'){
            voto =`${ovo}`            
            const buttonovo = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voto}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttonovo,
			headerType: 1
			}
            kahfz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
                   
            }
            break
 case 'allmenu2':
	menunyai = `
*🌹ℍ𝔼𝕃𝕃𝕆𝕎𝕆ℝ𝕃𝔻🌹*



*──────" 𝕰𝖓𝖉𝖎𝖓𝖌 𝕺𝖋 𝕸𝖊𝖓𝖚 "──────*`
var imgs = await kahfz.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await kahfz.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `𝒜𝓁𝓁 𝑀𝑒𝓃𝓊`,
                        "description": menunyai,
                        "footerText": `©KirBotz`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `SUBSCRIBE YT : KirBotz×`,
                        "url": "https://wa.me/6287705048235"
                    },
                    "businessOwnerJid": "6287705048235@s.whatsapp.net",
                }
            }, { quoted: mek, mimetype: 'image/jpeg' })
            kahfz.relayWAMessage(ctlg)
            break

    case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    kahfz.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    kahfz.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
case 'bay':
      reply('Sayonara Buat Yang Pergi😔\n Semoga Amal Ibadahnya Di Terima Tapi Kalo Lu Balik Harus Donasi')
      break
      case 'selamatdatang':
      reply('Welcome Kak Jangan Lupa Patuhi Peraturan  Grup Ya Kaka \n Semoga Betah👏')
      break      
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await kahfz.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await kahfz.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            kahfz.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await kahfz.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await kahfz.sendMessage(from,di,image,{quoted: mek})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            kahfz.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kahfz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kahfz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kahfz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kahfz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kahfz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kahfz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kahfz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kahfz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kahfz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kahfz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kahfz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kahfz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kahfz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kahfz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kahfz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            kahfz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await kahfz.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await kahfz.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kahfz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kahfz.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kahfz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kahfz.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kahfz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kahfz.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kahfz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kahfz.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            sticWait(from)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            kahfz.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            kahfz.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await kahfz.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, kahfz, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await kahfz.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            kahfz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            kahfz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await kahfz.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            kahfz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            kahfz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            kahfz.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await kahfz.downloadMediaMessage(swsw)
            kahfz.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            kahfz.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await kahfz.downloadMediaMessage(swsw)
            kahfz.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            kahfz.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await kahfz.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await kahfz.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		kahfz.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await kahfz.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			kahfz.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
                   //
                   case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=DashBot`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=DashBot`)
                    dasi = anu.result
                   sendButMessage(from, dasi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT `,
            },
            type: 1,
          },]);
        break;
        case 'quotes':
                    anjy = await fetchJson(`https://spybot-api.herokuapp.com/api/randomquote?apikey=${spykey}`)
                   titid = `${anjy.result.quotes}`
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
                    
                case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=DashBot`)
                    await kahfz.sendMessage(from, get_result, image)
                    break
case 'meme':
ano = await fetchJson(`https://spybot-api.herokuapp.com/api/random/meme?apikey=${spykey}`)
inibaf = await getBuffer(`${ano.result.url}`, {method: 'get'})
inicapt = `${ano.result.title}`
trrans = `KirTod`
but = [
          { buttonId: `${prefix}meme`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, inicapt, trrans, inibaf, but)
break
case 'wallpaper':
sticWait(from)
anoh = await fetchJson(`https://spybot-api.herokuapp.com/api/random/wallpaper?apikey=${spykey}`)
nahbaff = await getBuffer(`${anoh.result.url}`, {method: 'get'})
teksss = `Ini Bang Jan Lupa Subrek  KirBotz×`
trans = `KirTod`
but = [
          { buttonId: `${prefix}wallpaper`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, teksss, trans, nahbaff, but)
break
case 'jooxplay':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=DashBot&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    kahfz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    kahfz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
//18+
case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=DashBot`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kahfz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'KAHFZ BOT', imageMessage: imageMsg,
              contentText:`KLIK UNTUK KE GAMBAR SELANJUTNYA`,buttons,headerType:4}
              prep = await kahfz.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              kahfz.relayWAMessage(prep)
       
                    break
case 'tahta':
 buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`)
 buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: ` ©WhatsApp bot`},type:1}]
 imageMsg = (await kahfz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'KAHFZ BOT', imageMessage: imageMsg,
 contentText:`©WhatsApp Kahfz bot`,buttons,headerType:4}
 prep = await kahfz.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
 kahfz.relayWAMessage(prep)
 break
case 'quotesislami':
const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					kahfz.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					 await sleep(7000)
					 txtt =`Hai Kak ${pushname}\nSemoga Jadi Motivasi Untuk Tidak Menyerah Ya Kak Jika Kaka Ingin Quote Lagi Tekan Button Di Bawah Ini Ya Kak🌬️`

 buttons = [{buttonId: noprefix ? "quotesislami" : "!"+"quotesislami",buttonText:{displayText: 'QUOTES ISLAMI SELANJUTNYA'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Semoga Menjadi Motivasi',
buttons: buttons,
headerType: 1
 }
 prep = await kahfz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfz.relayWAMessage(prep)
					break
case 'jadwalsholat':
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
  daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=DashBot`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.maghrib}\n`
ini_txt += `Isya : ${get_result.isya}`
kahfz.sendMessage(from, { contentText: `${ini_txt}`, footerText: `

Runtime : *${runtime(process.uptime())}*
Tanggal *${date}*

kahfz
̵`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'メ Donasi' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'メ Owner' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=DashBot`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kahfz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ Akira', imageMessage: imageMsg,
              contentText:`Subrek : KirBotz×`,buttons,headerType:4}
              prep = await kahfz.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              kahfz.relayWAMessage(prep)
        
                    break
case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
      let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await kahfz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await kahfz.prepareMessageFromContent(from,{buttonsMessage},{quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6288215463787@g.us" }: {})},message:{"orderMessage":{"orderId":"6288215463787","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
              kahfz.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//Maker
case 'ppcouple':
case 'ppcp': 
			anu = await fetchJson(`https://ziyy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo = await getBuffer(anu.result.cowo_image)
			pli = `Ini Untuk »  *𝗖𝗼𝘄𝗼𝗸𝗻𝘆𝗮*`
   sendButImage(from, pli, `©KirBotz`, cowo, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);
       cewe = await getBuffer(anu.result.cewe_image)
		    pll = `Ini Untuk » *𝗖𝗲𝘄𝗲𝗸𝗻𝘆𝗮*`
   sendButImage(from, pll, `©KirBotz`, cewe, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'anime':
            sticWait(from)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            kahfz.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'blackpink':
   case 'neon':
   case 'greenneon':
   case 'advanceglow':
   case 'futureneon':
   case 'sandwriting':
   case 'sandsummer':
   case 'sandengraved':
   case 'metaldark':
   case 'neonlight':
   case 'holographic':
   case 'text1917':
   case 'minion':
   case 'deluxesilver':
   case 'newyearcard':
   case 'bloodfrosted':
   case 'halloween':
   case 'jokerlogo':
   case 'fireworksparkle':
   case 'natureleaves':
   case 'bokeh':
   case 'toxic':
   case 'strawberry':
   case 'box3d':
   case 'roadwarning':
   case 'breakwall':
   case 'icecold':
   case 'luxury':
   case 'cloud':
   case 'summersand':
   case 'horrorblood':
   case 'thunder':
              if (args.length == 0) return reply(`Example: ${prefix + command} text`)
              kipass = args.join(" ")
              kontolmu = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=DashBot&text=${kipass}`)
              kahfz.sendMessage(from, kontolmu, image, { quoted: mek})
              break
case 'wetglass':
   case 'multicolor3d':
   case 'watercolor':
   case 'luxurygold':
   case 'galaxywallpaper':
   case 'lighttext':
   case 'beautifulflower':
   case 'puppycute':
   case 'royaltext':
   case 'heartshaped':
   case 'birthdaycake':
   case 'galaxystyle':
   case 'hologram3d':
   case 'greenneon':
   case 'glossychrome':
   case 'greenbush':
   case 'metallogo':
   case 'noeltext':
   case 'glittergold':
   case 'textcake':
   case 'starsnight':
   case 'wooden3d':
   case 'textbyname':
   case 'writegalacy':
   case 'galaxybat':    
   case 'snow3d':
   case 'birthdayday':
   case 'freefire':
              if (args.length == 0) return reply(`Example: ${prefix + command} text`)
              ini_txt = args.join(" ")
              ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=DashBot&text=${ini_txt}`)
              kahfz.sendMessage(from, ini_buffer, image, { quoted: mek})
              break
case 'shadow':
    case 'cup':
    case 'cup1':
    case 'romance':
    case 'smoke':
    case 'burnpaper':
    case 'lovemessage':
    case 'undergrass':
    case 'love':
    case 'coffe':
    case 'woodheart':
    case 'woodenboard':
    case 'summer3d':
    case 'wolfmetal':
    case 'nature3d':
    case 'underwater':
    case 'golderrose':
    case 'summernature':
    case 'letterleaves':
    case 'glowingneon':
    case 'fallleaves':
    case 'flamming':
    case 'harrypotter':
    case 'carvedwood':
               if (args.length == 0) return reply(`Example: ${prefix + command} text`)
               lemari = args.join(" ")
               ndasmu = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=DashBot&text=${lemari}`)
               kahfz.sendMessage(from, ndasmu, image, { quoted: mek})
               break
case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=DashBot&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        kahfz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : mek})
                    })
                    break
case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=DashBot&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        kahfz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `KahfzBot`, quoted : mek})
                    })
                    break
case 'neko':
case 'kanna':
case 'sagiri':
case 'megumin':
case 'wallnime':
reply(mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=DashBot`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await kahfz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'KAHFZ BOT', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await kahfz.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
kahfz.relayWAMessage(prep)

break
      case 'nulis':
case 'tulis':
if (args.length < 1) return reply('Yang mau di tulis apaan?')
  teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
  buff = Buffer.from(res.data.result.split(',')[1], 'base64')
kahfz.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
  return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
case 'wiki':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wiki?kata=${q}&apikey=IkyOgiwara`)
kahfz.sendMessage(from, `「 RESULT FOUND 」\n• Hasil Pencarian Dari: ${anu.result.from}\n• Hasil: ${anu.hasil}`, text, {quoted: mek})
break
//
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await kahfz.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                kahfz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await kahfz.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            sticWait(from)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            kahfz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			sticWait(from)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await kahfz.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return kahfz('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await kahfz.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await kahfz.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await kahfz.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				sticWait(from)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				sticWait(from)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            sticWait(from)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            kahfz.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
 	case 'tiktokdl':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		sticWait(from)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		kahfz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		sticWait(from)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			kahfz.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        sticWait(from)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    kahfz.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    kahfz.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            sticWait(from)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
		    case 'bc':
             if (!isOwner) return  sticOwner(from)
             if (args.length < 1) return reply('teks?')
             anu = await kahfz.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await kahfz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	kahfz.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `Tanggal:  *${date}*\nJam: *${time}*\nBroadcast By *kahfzX4·Teamꪶ𖣂ꫂ*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: image, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             kahfz.sendMessage(_.jid, { contentText: `${textt}`, footerText: `Tanggal:  *${date}*\nJam: *${time}*\nBroadcast By *kahfzX4·Teamꪶ𖣂ꫂ*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'bcc':
             if (!isOwner) return  sticOwner(from)

             if (args.length < 1) return reply('teks?')

             anu100 = await kahfz.chats.all()

             if (isMedia && !kahfz.message.videoMessage || isQuotedImage) {

             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kyy).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Kahfz

             bc1000 = await kahfz.downloadMediaMessage(encmedia)

             for (let _ of anu1000) {

             kahfz.sendMessage(_.jid, bc1000, image, {quoted: freply, caption: `*「 KAHFZ GAMTENG 」*\n\n${body.slice(4)}`})

}

             reply('Suksess broadcast')

             } else {

             for (let _ of anu100) {

             kahfz.sendMessage(_.jid, 

			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,

			"footerText": '©𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ',

			"buttons": [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}], "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "title": "KirBotz.docx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
  }}, MessageType.buttonsMessage,{ quoted: floc,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `BroadCast 𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ`,body:"",mediaType:"2",thumbnail:kahfzX4thumb,mediaUrl:`https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`}}})

}

             reply('Suksess broadcast')

}

             break
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await kahfz.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kahfz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kahfz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kahfz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kahfz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kahfz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kahfz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kahfz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kahfz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kahfz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kahfz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kahfz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kahfz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await kahfz.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
            
case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = kahfz.contacts[i] != undefined ? kahfz.contacts[i].vname || kahfz.contacts[i].notify : undefined
inilist.push({
"displayName": 'Akira',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${kahfz.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await kahfz.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: floc })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku ><',
    footerText: `*©kahfzX4·Team*`,
    buttons: button,
    headerType: 1
}
await kahfz.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: floc})
break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await kahfz.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await kahfz.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             kahfz.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
//group
case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
default:
if (budy.startsWith('x')){
try {
return kahfz.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
