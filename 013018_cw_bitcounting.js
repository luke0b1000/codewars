var countBits = function(n) {
  //convert n to Binary
  var binaryN = new Number(n).toString(2); //1011...
  //console.log(binaryN);
  //count 1 in binary using indexOf
  var count = 0;
  var pos = binaryN.indexOf('1');
  while (pos != -1) {
  count++;
  pos = binaryN.indexOf('1', pos+1);
  }
  return count;
};
