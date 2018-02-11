function firstNonRepeatingLetter(s) {
  var repeatObj = {};
  var foundIndex = false;
  var indexVal;
  
  s.toLowerCase().split('').find((element,index,arr) => {
    if (!repeatObj[element]) {
      if (arr.indexOf(element,index+1) ==-1) {
        indexVal = index;
        foundIndex = true;
        return element;
      } else {
        repeatObj[element] = true;
      }
    }
  });
  if (foundIndex) return s.substr(indexVal,1);
  return '';
}
