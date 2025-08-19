process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import "./a_ubahdisini_ngab.js";
import { createRequire } from "module";
import path, { join } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { platform } from "process";
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== "win32") {
  if (rmPrefix) {
    if (/file:\/\/\//.test(pathURL)) {
      return fileURLToPath(pathURL);
    } else {
      return pathURL;
    }
  } else {
    return pathToFileURL(pathURL).toString();
  }
};
global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
};
global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};
import "ws";
import { readdirSync, unlinkSync, existsSync, readFileSync, watch } from "fs";
import yargs from "yargs";
import { spawn } from "child_process";
import lodash from "lodash";
import "console";
import cfonts from "cfonts";
import "node-cache";
import syntaxerror from "syntax-error";
import * as os from "os";
import chalk from "chalk";
import { format } from "util";
import { makeWASocket, protoType, serialize } from "./lib/simple.js";
import { Low, JSONFile } from "lowdb";
import pino from "pino";
import { mongoDB, mongoDBV2 } from "./lib/mongoDB.js";
const {
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = await import("@adiwajshing/baileys");

const Device = os.platform() === "win32" ? "Windows" : os.platform() === "darwin" ? "MacOS" : "Linux";

const { chain } = lodash;

const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

protoType();

serialize();

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query, ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '')

global.timestamp = {
    start: new Date
};

const __dirname = global.__dirname(import.meta.url);

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());

global.prefix = new RegExp("^[" + (opts.prefix || global.setting.prefix).replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + "]");

global.db = new Low(/https?:\/\//.test(opts.db || "") ? new cloudDBAdapter(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? opts.mongodbv2 ? new mongoDBV2(opts.db) : new mongoDB(opts.db) : new JSONFile((opts._[0] ? opts._[0] + "_" : "") + "rafibotdata.json"));

global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise((resolve) => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }

global.db.READ = true;
await global.db.read().catch(console.error);
global.db.READ = null;
global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    banned: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();

global.authFile = "" + (opts._[0] || "rafibotsesi");
console.log("memuat file rafibotsesi " + authFile);

const {
  state,
  saveCreds
} = await useMultiFileAuthState(global.authFile);

const {
  version,
  isLatest
} = await fetchLatestBaileysVersion();

console.log("memproses data dari database" + version.join(".") + ", isLatest: " + isLatest);
const pairingCode = process.argv.includes("--pairing");
const connectionOptions = {
  version: version,
  logger: pino({
    level: "silent"
  }),
  printQRInTerminal: !pairingCode,
  browser: [Device, "Chrome", "20.0.04"],
  generateHighQualityLinkPreview: true,
  auth: {
    creds: state.creds,
    keys: makeCacheableSignalKeyStore(state.keys, pino().child({
      level: "silent",
      stream: "store"
    }))
  },
  patchMessageBeforeSending: (message) => {
    const requiresPatch = !!message.buttonsMessage || !!message.templateMessage || !!message.listMessage;
    if (requiresPatch) {
      message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadataVersion: 2,
              deviceListMetadata: {}
            },
            ...message
          }
        }
      };
    }
    return message;
  },
  defaultQueryTimeoutMs: undefined,
  syncFullHistory: false
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
if (!opts.test) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write().catch(console.error);
    }
  }, 60000);
}

if (opts.server) {
  (await import("./server.js")).default(global.conn, PORT);
}

async function clearsession() {
  const _0x52c4b1 = readdirSync("./rafibotsesi").filter(_0x325e2c => _0x325e2c.startsWith("pre-key-"));
  _0x52c4b1.forEach(_0x296d5f => {
    unlinkSync("./rafibotsesi/" + _0x296d5f);
  });
  console.log(chalk.bold.green("Terima Kasih  Telah Menggunakan Script Ini, Jangan Lupa Bismillah Dulu"));
}
async function connectionUpdate(update) {
  const {
    receivedPendingNotifications,
    connection,
    lastDisconnect,
    isOnline,
    isNewLogin
  } = update
  if (isNewLogin) {
    conn.isInit = true;
  }
  if (connection == "connecting") {
    console.log(chalk.redBright("memuat Metasploit..."));
  }
  if (connection == "open") {
    console.log(chalk.green("Metasploit Sukses Tersambung"));
    conn.sendMessage(global.nodev + "@s.whatsapp.net", {
      text: `Bot ${setting.namabot} Berhasil Tersambung`
    });
  }
  if (isOnline == true) {
    console.log(chalk.green("Menganalisis Tools..."));
  }
  if (isOnline == false) {
    console.log(chalk.red("Metasploit Mengalami Gangguan"));
  }
  if (receivedPendingNotifications) {
    console.log(chalk.yellow("Menunggu Ketersediaan Server Nginx..."));
  }
  if (connection == "close") {
    console.log(chalk.red("Sambungan Terhenti, Ada Masalah Sama Rangkaian Nginx"));
  }
  global.timestamp.connect = new Date();
  if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
    console.log(chalk.red("Menyambungkan Ke Metasploit..."));
    await global.reloadHandler(true);
  }
  if (global.db.data == null) {
    await global.loadDatabase();
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (restatConn) {
  try {
    const handlerr = await import("./handler.js?update=" + Date.now()).catch(console.error);
    if (Object.keys(handlerr || {}).length) {
      handler = handlerr
    }
  } catch (e) {
    console.error(e);
  }
  if (restatConn) {
    const oldChats = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      chats: oldChats
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.welcome = "_*Selamat Datang @user Di GROUP @subject*_\n*SEBELUM MEMULAI OBROLAN SILAHKAN INTRO DULU DI BAWAH*\n\nƙαɾƚυ іᥒ𝗍r᥆\n 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨\n\nଓ 𝐧𝐚𝐦𝐚:\nଓ 𝐚𝐬𝐤𝐨𝐭:\nଓ 𝐠𝐞𝐧𝐝𝐞𝐫:\nଓ 𝐤𝐞𝐥𝐚𝐬:\nଓ 𝐮𝐦𝐮𝐫:\n\n\nѕємσgα вєтαн' уαଓ\n\n> Semoga Betah,\n> ketik .allmenu untuk melihat pilihan menu bot\n> Ketik .owner untuk melihat pemilik bot";
  conn.bye = "😢 *Selamat Tinggal, Kak @user* 👋\n\nTerima kasih sudah menjadi bagian dari grup ini. Semoga kita bisa bertemu lagi di lain kesempatan. Hati-hati di perjalanan ya~ 💐";
  conn.spromote = "@user sekarang admin!";
  conn.sdemote = "@user sekarang bukan admin!";
  conn.sDesc = "Deskripsi telah diubah ke \n@desc";
  conn.sSubject = "Judul grup telah diubah ke \n@subject";
  conn.sIcon = "Icon grup telah diubah!";
  conn.sRevoke = "Link group telah diubah ke \n@revoke";
  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn);
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = filename => /\.js$/.test(filename);
global.plugins = {};
async function filesInit() {
  for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let file = global.__filename(join(pluginFolder, filename));
      const module = await import(file);
      global.plugins[filename] = module.default || module;
    } catch (e) {
      conn.logger.error(e);
      delete global.plugins[filename];
    }
  }
}
filesInit().then(_ => console.log(Object.keys(global.plugins))).catch(console.error);
global.reload = async (_ev, filename) => {
  if (/\.js$/.test(filename)) {
    let reload = global.__filename(join(pluginFolder, filename), true);
    if (filename in global.plugins) {
      if (existsSync(reload)) {
        conn.logger.info("Memuat Ulang Tools Metasploit'" + filename + "'");
      } else {
        conn.logger.warn("Menghapus Tools Metasploit '" + filename + "'");
        return delete global.plugins[filename];
      }
    } else {
      conn.logger.info("Memuat Tools Metasploit Baru '" + filename + "'");
    }
    let _0x36ab5e = syntaxerror(readFileSync(reload), filename, {
      sourceType: "module",
      allowAwaitOutsideFunction: true
    });
    if (_0x36ab5e) {
      conn.logger.error("syntax error while loading '" + filename + "'\n" + format(_0x36ab5e));
    } else {
      try {
        const _0x42e987 = await import(global.__filename(reload) + "?update=" + Date.now());
        global.plugins[filename] = _0x42e987.default || _0x42e987;
      } catch (_0x5cf30b) {
        conn.logger.error("Gagal Memuat Tools Metasploit '" + filename + "\n" + format(_0x5cf30b) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x44aef0], [_0x30a259]) => _0x44aef0.localeCompare(_0x30a259)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
import readline from "readline";
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const question = _0x805722 => new Promise(_0x14bdd0 => rl.question(_0x805722, _0x14bdd0));
if (pairingCode && !conn.authState.creds.registered) {
  await sleep(7000);
  console.clear();
  cfonts.say("Metasploit", {
    font: "tiny",
    align: "left",
    colors: ["blue"]
  });
  console.log(' ')
  cfonts.say("Pairing", {
    font: "tiny",
    align: "left",
    colors: ["blue"]
  });
  console.log(' ')
  console.log(chalk.bold.green(`Nama Bot: ${setting.namabot}\nNomor Bot: ${setting.bot}\nNama Owner: ${setting.namaowner}\nNomor Owner: ${setting.owner}`));
  console.log(' ')
  console.log(chalk.bold.green(`Kode Pairing Otomatis Di Dapatkan Dari Nomor Bot`))
  console.log(' ')
  await sleep(3000)
  console.log(chalk.bold.green(`Mendapatkan Code Pairing...`))
  await sleep(10000)
  console.log(' ')
  let phoneNumber = global.setting.bot;
  phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
  let code = await conn.requestPairingCode(phoneNumber);
  code = code?.match(/.{1,4}/g)?.join("-") || code;
  console.log(chalk.bold.blue("Kode Anda Adalah : "), chalk.bold.white(code));
  rl.close();
}
async function _quickTest() {
  let test = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-filter_complex", "color", "-frames:v", "1", "-f", "webp", "-"]), spawn("convert"), spawn("magick"), spawn("gm"), spawn("find", ["--version"])].map(_0x4a2a6f => {
    return Promise.race([new Promise(_0x2daaf0 => {
      _0x4a2a6f.on("close", _0x512f53 => {
        _0x2daaf0(_0x512f53 !== 127);
      });
    }), new Promise(_0x399473 => {
      _0x4a2a6f.on("error", _0x456be4 => _0x399473(false));
    })]);
  }));
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
  console.log(test);
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  };
  Object.freeze(global.support);
  if (!s.ffmpeg) {
    conn.logger.warn("Silakan instal ffmpeg untuk mengirim video, ketik kode berikut buat install (pkg install ffmpeg)");
  }
  if (s.ffmpeg && !s.ffmpegWebp) {
    conn.logger.warn("Stiker mungkin tidak dianimasikan tanpa libwebp di ffmpeg, ketik kode berikut buat aktifin fiturnya (--enable-ibwebp while compiling ffmpeg)");
  }
  if (!s.convert && !s.magick && !s.gm) {
    conn.logger.warn("Stiker mungkin tidak berfungsi tanpa imagemagick jika libwebp pada ffmpeg tidak diinstal, ketik kode berikut buat install (pkg install imagemagick)");
  }
}
_quickTest().then(() => conn.logger.info("Silahkan Masukan Kode Pairing Yang Ada Di Atas")).catch(console.error);