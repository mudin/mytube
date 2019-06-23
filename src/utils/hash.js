/* eslint-disable no-bitwise */

/**
 *
 * @param {string} str
 * @returns {String}
 */
import kaomojis from '../icons/kaomojis.json';

export function stringToHslColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return `hsl(${h}, ${80}%, ${80}%)`;
}
/**
 * @param {Array} str
 * @returns {Boolean}
 */
export function hashedKaomoji(str) {
  let hash = 0; let i; let
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i += 1) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  const index = Math.abs(~~((hash % kaomojis.length)));
  console.log(index);
  return kaomojis[index];
}

export function randomUsername() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzㅂㅈㄷㄱ쇼ㅕㅑㅐㅔㅏㅓㅗㅎㄹㅇㄴ뮼ㅌ추';
  const charactersLength = characters.length;
  for (let i = 0; i < 8; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
