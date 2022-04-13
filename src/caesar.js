// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // should adjust input based on shift value
  // lowercase input
  // name letters with alphabet
  // name another var to push new equivalent letter based on shift

  function caesar(input, shift, encode = true) {
    // your solution code here

    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }
    let lowerInput = input.toLowerCase();

    let code = "";
    if (encode === true) {
      for (let i = 0; i < lowerInput.length; i++) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let letter = lowerInput[i];

        for (let j = 0; j < alphabet.length; j++) {
          if (letter === alphabet[j]) {
            if (j + shift >= 0 && j + shift <= 25) {
              code += alphabet[j + shift];
            }
            if (j + shift < 0) {
              code += alphabet[j + shift + 26];
            }
            if (j + shift > 25) {
              code += alphabet[j + shift - 26];
            }
          }
        }
        if (letter === " " || letter === "!" || letter === ".") {
          code += letter;
        }
      }
      return code;
    }
    if (encode === false) {
      for (let i = 0; i < lowerInput.length; i++) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let letter = lowerInput[i];

        for (let j = 0; j < alphabet.length; j++) {
          if (letter === alphabet[j]) {
            if (j - shift >= 0 && j - shift <= 25) {
              code += alphabet[j - shift];
            }
            if (j - shift < 0) {
              code += alphabet[j - shift + 26];
            }
            if (j - shift > 25) {
              code += alphabet[j - shift - 26];
            }
          }
        }
        if (letter === " " || letter === "!" || letter === ".") {
          code += letter;
        }
      }
      return code;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
