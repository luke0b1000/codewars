function solution(string) {
    var newStr = '';
    for (let i = 0; i < string.length; i++) {
      var char = string.slice(i,i+1);
      if (char === char.toUpperCase()) {
        newStr += ' '+char;
      } else {
        newStr += char;
      }
    }
    return newStr;
}
