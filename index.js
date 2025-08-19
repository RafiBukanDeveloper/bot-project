import { spawn } from "child_process";
import _0x3ed151 from "path";
import "console";
import "util";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fetch from 'node-fetch'
import readline from 'readline'
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
import cfonts from "cfonts";
import chalk from "chalk";
console.clear();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Intro By Rafi
/* Welcome By Script Rafi Hacker Versi No ENC

Jangan Hapus Wm Gw, Awas Luu🗿
*/
const start = async () => {
  const _0x2d37d6 = [_0x3ed151.join(__dirname, "metasploit.js"), ...process.argv.slice(2)];
  const _0x53fa9e = spawn(process.argv[0], _0x2d37d6, {
    stdio: ["inherit", "inherit", "inherit", "ipc"]
  });
  _0x53fa9e.on("exit", _0x142e21 => {
    console.error("❎ Error Di bagian:", _0x142e21);
    if (_0x142e21 === "." || _0x142e21 === 1 || _0x142e21 === 0) {
      start();
    }
  });
};
start()