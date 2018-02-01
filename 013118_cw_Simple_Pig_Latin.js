function pigIt(str){
  var strArr = str.split(' '); // ['Pig','latin'....]
  var pigArr = strArr.map(function(element) {
     return (element.slice(1) + element.slice(0,1) + 'ay');  // Str ( ig + P + ay )
  });
  var finalpig = pigArr.join(' ');
  return finalpig;
}
