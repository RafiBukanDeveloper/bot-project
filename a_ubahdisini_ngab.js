/*===============================*/
// Script Rafibot Metasploit
// creator by Rafi hacker
// scriptnya mau yang no enc??
// Bisa bisa!!, chat aja nih developernya
// wa.me/6282286315998

/*===============================*/

// List harga
// NO ENC: 35K NO UPDATE
//           45K FREE UPDATE

/*===============================*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*===============================*/

//         SETTINGS BOT

/*===============================*/

global.daerah = "Padang" // Tulis Di Sini Nama Daerah Kalian, Buat Jadwal Waktu Sholat Daerah Kalian

global.owner = [
  ['6282286315998', 'Rafi', true],
]

global.setting = {
    prefix: ".", //Atur Prefix Bot Lu Di Sini Ngab
    namabot: "Rafibotz ᨒ MultiDevice", //Buat menampilkan Nama Bot ngab
    namaowner: "rafi hacker", //buat menampilkan nama owner ngab
    bot: "6282284163778", //Buat Pairing Nomor Bot
    owner: "6282286315998", //buat Nomor Owner
    tampilan: "https://files.catbox.moe/xpm6r9.jpg", //buat setting Menu tampilan
    sound: "https://files.catbox.moe/q3nla8.mp3", //buat setting sound Menu
    imgface: "https://files.catbox.moe/ec678b.jpg", //Buat setting foto AdReplay ngab, kalo Gak tau Gak usah Ubah
    idch: "120363400514002870@newsletter", //Masukin Id Channel Whatsapp Kalian Di Sini Untuk Memperbagus Tampilan Menu
    namach: "Codingan Rafi", //Masukin Nama Channel Whatsapp Kalian Di Sini, Agar Nama Channel Kalian Tampil Pas Tampilan Menu Muncul
    linkgc: '', //Masukin link Group Kamu Ngab Di sini
    instagram: "https://instagram.com/rfrdnap", //Masukin Link instagram Lu Ini bakal Tampil Pas Liat Info Owner
    tiktok: "https://tiktok.com/@rfrdnap" //masukin Link tiktok Lu ini Bakal Tampil Pas Liat Info Owner
}

/*===============================*/

//        SETTINGS PANEL

/*===============================*/

global.domain = 'https://' //masukin domain panel kalian di sini lagi, samain yang di atas yaa
global.ptla = 'ptla_' //masukin api plta panel kalian, biar cpanelnya work
global.ptlc = 'ptlc_' //masukin api pltc kalian, biar cpanelnya work
//cara dapetin api key panel kalian liat youtube yaa, kalo di sini susah gw kasih tau caranya
global.linkgroup = 'https://' //Tulis Link Group Panel Kalian
global.akhiran = "@RAFIHACKER" //buat akhiran Email Cpanel Ngab
/*===============================*/

//          SETTINGS WM

/*===============================*/

global.wm = 'Dibuat Oleh: Rafi hacker\n Mau Bikin Bot??/n Chat:6282286315998' // Opsional boleh ganti atau tidak 
global.author = 'Rafi hacker\n Mau Bikin Bot??/n Chat:6282286315998' // Opsional boleh ganti atau tidak 
global.stickpack = 'Dibuat Oleh' // Opsional boleh ganti atau tidak 
global.stickauth = 'Rafi hacker\n Mau Bikin Bot??/n Chat:6282286315998' // Opsional boleh ganti atau tidak 

/*===============================*/

//          SETTINGS PAYMENT

/*===============================*/

global.payment = {
        qris: "https://files.catbox.moe/jad1mh.png", // Masukin Link Qris Kalian Di Sini
        dana: "082284163778", //Masukin Nomor Dana Kalian Di Sini
        ovo: "tidak ada", //Masukin Nomor Ovo Kalian Di Sini
        gopay: "tidak ada" //Masukin Nomor Gopay Kalian Di Sini
}

/*===============================*/

//       JANGAN DI UBAH NGAB

/*===============================*/

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

global.menuMode = global.menuMode || {};
global.TampilanMode = global.TampilanMode || {};
global.welcomeMode = global.welcomeMode || {};
global.settingAnti = global.settingAnti || {};
/*===============================*/

const _0x10b1c4=_0x3715;(function(_0x33fcdd,_0x1f4289){const _0x397bb9=_0x3715,_0x500e6f=_0x33fcdd();while(!![]){try{const _0x210349=-parseInt(_0x397bb9(0x117))/0x1*(-parseInt(_0x397bb9(0x118))/0x2)+parseInt(_0x397bb9(0x119))/0x3+parseInt(_0x397bb9(0x113))/0x4*(-parseInt(_0x397bb9(0x116))/0x5)+parseInt(_0x397bb9(0x10e))/0x6*(-parseInt(_0x397bb9(0x11c))/0x7)+parseInt(_0x397bb9(0x115))/0x8+parseInt(_0x397bb9(0x110))/0x9+parseInt(_0x397bb9(0x112))/0xa*(parseInt(_0x397bb9(0x11a))/0xb);if(_0x210349===_0x1f4289)break;else _0x500e6f['push'](_0x500e6f['shift']());}catch(_0xc7703f){_0x500e6f['push'](_0x500e6f['shift']());}}}(_0x1269,0x86163),global['nodev']=_0x10b1c4(0x10f));function _0x3715(_0x3a0c43,_0x10555b){const _0x12698d=_0x1269();return _0x3715=function(_0x37153c,_0xdeca3e){_0x37153c=_0x37153c-0x10e;let _0x350448=_0x12698d[_0x37153c];return _0x350448;},_0x3715(_0x3a0c43,_0x10555b);}let file=fileURLToPath(import.meta[_0x10b1c4(0x114)]);watchFile(file,()=>{const _0x599bc3=_0x10b1c4;unwatchFile(file),console[_0x599bc3(0x11b)](chalk[_0x599bc3(0x11d)]('Pembaruan\x20\x27config.js\x27')),import(file+'?update='+Date[_0x599bc3(0x111)]());});function _0x1269(){const _0x3bfd69=['6289209GJsQse','now','627190oJJdmN','1052jTxZnH','url','242544XnIRhV','6520kFgMRn','174733shPOnL','2ZUoXqA','2033145NXhQyO','22XecWbq','log','133ZvMzQP','redBright','257316ZOloyp','6282286315998'];_0x1269=function(){return _0x3bfd69;};return _0x1269();}
function _0x2d3d(_0x2ed2dc,_0x8e7fc3){var _0x513ae9=_0x513a();return _0x2d3d=function(_0x2d3db4,_0x1ba52b){_0x2d3db4=_0x2d3db4-0x123;var _0x9878b8=_0x513ae9[_0x2d3db4];return _0x9878b8;},_0x2d3d(_0x2ed2dc,_0x8e7fc3);}function _0x513a(){var _0x5083d7=['1977OHugqP','Btz-7ejPz','5363358ACFVgk','1538833cvZTbJ','134552dsNyEa','https://api.botcahx.eu.org','3354iRfRIt','2839536WJljcw','197055UpDShQ','602090svdwoq','20xDzCrL','99emEDNZ','https://api.betabotz.eu.org'];_0x513a=function(){return _0x5083d7;};return _0x513a();}var _0x380e4b=_0x2d3d;(function(_0xae9e56,_0x4e0d7f){var _0xbca9bb=_0x2d3d,_0x1131d7=_0xae9e56();while(!![]){try{var _0x24f522=-parseInt(_0xbca9bb(0x126))/0x1+-parseInt(_0xbca9bb(0x129))/0x2*(-parseInt(_0xbca9bb(0x123))/0x3)+-parseInt(_0xbca9bb(0x12d))/0x4*(parseInt(_0xbca9bb(0x12b))/0x5)+parseInt(_0xbca9bb(0x125))/0x6+parseInt(_0xbca9bb(0x12a))/0x7+parseInt(_0xbca9bb(0x127))/0x8*(parseInt(_0xbca9bb(0x12e))/0x9)+-parseInt(_0xbca9bb(0x12c))/0xa;if(_0x24f522===_0x4e0d7f)break;else _0x1131d7['push'](_0x1131d7['shift']());}catch(_0x152ca3){_0x1131d7['push'](_0x1131d7['shift']());}}}(_0x513a,0xc1bfc),global['APIs']={'btc':_0x380e4b(0x128),'lann':_0x380e4b(0x12f)},global['APIKeys']={'https://api.betabotz.eu.org':_0x380e4b(0x124),'https://api.botcahx.eu.org':'Enter\x20your\x20apikey'});
var _0x554fb1=_0xe925;function _0xe925(_0x2dafb6,_0x589b02){var _0x362841=_0x3628();return _0xe925=function(_0xe9252e,_0xe783b0){_0xe9252e=_0xe9252e-0x12c;var _0x4fa76a=_0x362841[_0xe9252e];return _0x4fa76a;},_0xe925(_0x2dafb6,_0x589b02);}function _0x3628(){var _0x591a55=['1035100gkbLGb','Rafi\x20Hacker','42RJfJEu','497rpVhXl','2505528YxVuBt','dev','297248XlVDET','2242017LYmgwJ','namadev','73992GdXoxU','161960amEaOU','1051962giQobY'];_0x3628=function(){return _0x591a55;};return _0x3628();}(function(_0x9f7026,_0x2155ae){var _0x40a302=_0xe925,_0x50cc02=_0x9f7026();while(!![]){try{var _0x57fa23=parseInt(_0x40a302(0x131))/0x1+-parseInt(_0x40a302(0x12d))/0x2+-parseInt(_0x40a302(0x132))/0x3+parseInt(_0x40a302(0x137))/0x4+-parseInt(_0x40a302(0x133))/0x5*(-parseInt(_0x40a302(0x135))/0x6)+parseInt(_0x40a302(0x136))/0x7*(-parseInt(_0x40a302(0x130))/0x8)+-parseInt(_0x40a302(0x12e))/0x9;if(_0x57fa23===_0x2155ae)break;else _0x50cc02['push'](_0x50cc02['shift']());}catch(_0x26aaa5){_0x50cc02['push'](_0x50cc02['shift']());}}}(_0x3628,0xcb39c),global[_0x554fb1(0x12f)]=_0x554fb1(0x134),global[_0x554fb1(0x12c)]={'tiktok':'https://tiktok.com/@rfrdnap','instagram':'https://instagram.com/rfrdnap'});
