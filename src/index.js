module.exports = function check (str, bracketsConfig) {
  const stack = [];
  const openingSymbols = bracketsConfig.flat().filter((elem, index) => index % 2 == 0);
  const closingSymbols = bracketsConfig.flat().filter((elem, index) => index % 2 != 0);

  for (let i = 0; i < str.length; i++) { 
    if (openingSymbols.includes(str[i]) && closingSymbols.includes(str[i])) {
      if (str[i] != stack[stack.length - 1]) { stack.push(str[i]); } else { stack.pop(); }
    } else 
      if (openingSymbols.includes(str[i])) { stack.push(str[i]); } else 
        if (closingSymbols.includes(str[i])) {
          if (openingSymbols[closingSymbols.indexOf(str[i])] != stack.pop()) { return false; }
        }
  }

  return stack.length === 0;
}
