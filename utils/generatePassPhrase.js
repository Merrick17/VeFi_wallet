// const CryptoJS = require('react-native-crypto-js');
// const words = CryptoJS.lib.WordArray.random(16);
// const hexStr = bytesToHex(words.words);
// const byteArr = hexStringToByte(hexStr);


// export const mnemonics = entropyToMnemonic(byteArr, wordlist); //12 word mnemonics here.

// function entropyToMnemonic(entropy, wordlist) {
//   if (!Buffer.isBuffer(entropy)) entropy = Buffer.from(entropy, 'hex');
//   wordlist = wordlist || DEFAULT_WORDLIST;

//   // 128 <= ENT <= 256
//   if (entropy.length < 16) throw new TypeError(INVALID_ENTROPY);
//   if (entropy.length > 32) throw new TypeError(INVALID_ENTROPY);
//   if (entropy.length % 4 !== 0) throw new TypeError(INVALID_ENTROPY);

//   var entropyBits = bytesToBinary([].slice.call(entropy));
//   var checksumBits = deriveChecksumBits(entropy);

//   var bits = entropyBits + checksumBits;
//   var chunks = bits.match(/(.{1,11})/g);
//   var words = chunks.map(function (binary) {
//     var index = binaryToByte(binary);
//     return wordlist[index];
//   });

//   return words.join(' ');
// }

// // Convert a byte array to a hex string
// function bytesToHex(bytes) {
//   for (var hex = [], i = 0; i < bytes.length; i++) {
//     hex.push((bytes[i] >>> 4).toString(16));
//     hex.push((bytes[i] & 0xf).toString(16));
//   }
//   return hex.join('');
// }
// function hexStringToByte(str) {
//   if (!str) {
//     return new Uint8Array();
//   }

//   var a = [];
//   for (var i = 0, len = str.length; i < len; i += 2) {
//     a.push(parseInt(str.substr(i, 2), 16));
//   }

//   return new Uint8Array(a);
// }

// function deriveChecksumBits(entropyBuffer) {
//   var ENT = entropyBuffer.length * 8;
//   var CS = ENT / 32;
//   var hash = createHash('sha256').update(entropyBuffer).digest();

//   return bytesToBinary([].slice.call(hash)).slice(0, CS);
// }
