const checkCase = (code, limit) => {
  const newCode = code > limit ? code - 26 : code;
  return String.fromCharCode(newCode);
};

function trim(shift) {
  if (shift < 27) return shift;
  shift -= 26;
  return trim(shift);
}

const ceaserCipher = (string, shift) => {
  const newString = string.split("").map((letter, i) => {
    if (
      (64 < string.charCodeAt(i) && string.charCodeAt(i) < 91) ||
      (95 < string.charCodeAt(i) && string.charCodeAt(i) < 123)
    ) {
      const limit = string.charCodeAt(i) < 91 ? 91 : 122;
      shift = trim(shift)  //shift %= 26;
      const code = string.charCodeAt(i) + shift;
      return checkCase(code, limit);
    } else {
      return letter;
    }
  });
  return newString.join("");
};

module.exports = ceaserCipher;
