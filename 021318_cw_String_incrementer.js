Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}
function incrementString (strng) {
 //split/ search for number based on regex
 // get pos we take the whole number
 //convert the string to number and add 1
 //else we add 1 if regex = -1
 var pos = strng.search(/\d/);
 var numS;
 var suffixstrng;
 var prefixstrng;
 var finalstrng;
 var padding;
 var s1;
 if (pos !== -1) {
   numS = strng.slice(pos,);
   padding = numS.length
   prefixstrng = strng.slice(0,pos);
   suffixstrng = Number(numS) + 1;
   s1 = suffixstrng.pad(padding)
   finalstrng = prefixstrng + s1;
 } else {
   finalstrng = strng + "1";
 }
 return finalstrng;
}
