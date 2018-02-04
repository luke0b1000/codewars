function count (string) {  
  var strObj = {};
  var strArr = string.split('');
  strArr.map(function(element){
    if (strObj.hasOwnProperty(element)) {
      strObj[element] = strObj[element] + 1;
    } else {
      strObj[element] = 1;
    }
  });
  // The function code should be here
   return strObj;
}
