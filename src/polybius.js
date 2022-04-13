// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    const checkInput = input.replace(" ", "").length % 2;
    if (encode === false && checkInput ==1) {
      return false
    }

    let lowerInput = input.toLowerCase()
    let code = "";
    
    const square = {
      "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
      "f": 12, "g": 22, "h": 32, "i": 42, "j": 42, "k": 52,
      "l": 13, "m": 23, "n": 33, "o": 43, "p": 53,
      "q": 14, "r": 24, "s": 34, "t": 44, "u": 54,
      "v": 15, "w": 25, "x": 35, "y": 45, "z": 55
    }

    const reversedSquare = {
      "11": "a", "21": "b","31": "c", "41": "d", "51": "e",
      "12": "f", "22": "g", "32": "h", "42": "i/j", "52": "k",
      "13": "l", "23": "m", "33": "n", "43": "o", "53": "p",
      "14": "q", "24": "r", "34": "s", "44": "t", "54": "u",
      "15": "v", "25": "w", "35": "x", "45": "y", "55": "z"
    }
  
    if (encode) {
      for(let i = 0; i < lowerInput.length; i++) {
        let values = lowerInput[i]
          for (let char in square) {
            if (values === char) {
              code += square[char]
              }
            } if (values === " ") {
              code += values
            }
          } return code
        } if (encode === false) {
          const decodedArray =[];
          let stringInput = input.split("");
          let codeNumSet = "";
          for (let codeNum of stringInput) {
            if (codeNum === " ") {
              decodedArray.push(codeNum)
            } if (codeNumSet.length < 2 && codeNum !== " ") {
              codeNumSet += codeNum
            } if (codeNumSet.length === 2 ) {
              decodedArray.push(reversedSquare[codeNumSet]);
              codeNumSet = "";
            }
           } 

            return decodedArray.join("")          
        }
      } 
    
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
