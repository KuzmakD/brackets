module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingSymbols = bracketsConfig.flat().filter((elem, index) => index % 2 == 0);
  const closingSymbols = bracketsConfig.flat().filter((elem, index) => index % 2 != 0);
  
  //console.log(openingSymbols, closingSymbols);
  for (const char of str) {
    if (openingSymbols.includes(char)) { 
      stack.push(char); 
    } else if (closingSymbols.includes(char)) {
        if (openingSymbols[closingSymbols.indexOf(char)] !== stack.pop()) { 
          return false; 
        }
      }
  }
  return stack.length === 0;
}
