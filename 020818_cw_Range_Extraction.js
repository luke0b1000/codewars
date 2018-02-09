function solution(list){
 var newStringList = ''; // newStringList =+ something pushed in here
 var tempArr = []; // if tempArr.length >2 then temp[0] + '-' + temp[temp.length-1] else newStringList += tempArr.join(',')
 for (var i = 0; i < list.length; i++) {
   if (tempArr.length === 0) { //if empty
     tempArr.push(list[i]);
   } else if (list[i] === (tempArr[tempArr.length-1] +1)) { //if consecutive
     tempArr.push(list[i]);
   } else { //not consecutive
     if (tempArr.length > 2) {
       var str = tempArr[0] + '-' + tempArr[tempArr.length-1] + ','
       newStringList += str;
     } else {
       newStringList += tempArr.join(',') + ',';
     }
     tempArr =[];
     tempArr.push(list[i]);
   }
 }
      if (tempArr.length > 2) {
       var str = tempArr[0] + '-' + tempArr[tempArr.length-1];
       newStringList += str;
     } else {
       newStringList += tempArr.join(',');
     }
 return newStringList;
}

//Could definitely be better...
