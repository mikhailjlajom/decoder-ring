// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    for (let i = 0; i < alphabet.length; i++) {
      let counter = 0;
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          counter += 1;
        }
      }
      if (counter >= 2) {
        return false;
      }
    }

    let lowerInput = input.toLowerCase();
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    if (encode) {
      for (let i = 0; i < lowerInput.length; i++) {
        let indexedInput = lowerInput[i];
        for (let j = 0; j < letters.length; j++) {
          if (indexedInput === letters[j]) {
            result += alphabet[j];
          }
        }
        if (indexedInput === " ") {
          result += indexedInput;
        }
      }
      return result;
    }
    if (!encode) {
      for (let i = 0; i < lowerInput.length; i++) {
        let indexedInput = lowerInput[i];
        for (let j = 0; j < alphabet.length; j++) {
          if (indexedInput === alphabet[j]) {
            result += letters[j];
          }
        }
        if (indexedInput === " ") {
          result += indexedInput;
        }
      }
      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
