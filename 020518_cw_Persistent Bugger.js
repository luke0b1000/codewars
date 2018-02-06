function persistence(num) {
   var count = 0;
   while(String(num).length !== 1) {
     count++;
     sNumArr = String(num).split('');
     num = sNumArr.reduce(function(previous,current,index,array) {
             return parseInt(previous) * parseInt(current);
     });
    }
     return count;
}
