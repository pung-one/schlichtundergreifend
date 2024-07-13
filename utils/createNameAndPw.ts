import { wordlist } from "@/lib/wordlist";

export function createName() {
  let nameArray: string[] = [];
  for (let i = 1; i <= 2; i++) {
    const newWord = wordlist[Math.floor(Math.random() * 1295)];
    nameArray.push(newWord[0].toUpperCase() + newWord.slice(1));
  }
  return nameArray.join(" ");
}

export function createPassword() {
  const specialCharacters = "!#$&()+-:;=?@[]_{}~";
  let pwArray: string[] = [];
  const randomPosition = Math.floor(Math.random() * 3);
  for (let i = 0; i <= 2; i++) {
    if (i === randomPosition) {
      const specialChar = specialCharacters[Math.floor(Math.random() * 19)];
      const newWord = wordlist[Math.floor(Math.random() * 1295)] + specialChar;
      pwArray.push(newWord);
    } else {
      const newWord = wordlist[Math.floor(Math.random() * 1295)];
      pwArray.push(newWord);
    }
  }
  return pwArray.join(" ");
}
