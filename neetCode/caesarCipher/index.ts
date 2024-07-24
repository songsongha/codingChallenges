export const caesarCipher = (s: string, k: number): string => {
  let shift = 0;
  if (k < 26) {
    shift = k;
  } else {
    shift = k % 26;
  }
  console.log({ shift });

  const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const cipherAlphabet =
    originalAlphabet.slice(shift) + originalAlphabet.slice(0, shift);
  console.log({ cipherAlphabet });
  let encryptedString = "";
  for (const char of s) {
    const index = originalAlphabet.indexOf(char.toLowerCase());
    let newChar = index >= 0 ? cipherAlphabet[index] : char;
    if (index >= 0 && char === originalAlphabet[index].toUpperCase())
      newChar = newChar.toUpperCase();
    encryptedString += newChar;
  }
  console.log({ encryptedString });
  return encryptedString;
};

caesarCipher("www.abc.xy", 87);
