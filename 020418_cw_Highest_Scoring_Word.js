function high(x){
  var highScore = 0;
  var word = '';
  var wordArr = x.split(' ');
  for (var i = 0; i < wordArr.length; i++) {
  var wordScore = 0;
    var iword = wordArr[i];
    for (var j = 0; j < iword.length; j++) {
      //console.log(iword.charCodeAt(j) - 96);
      wordScore = wordScore + (iword.charCodeAt(j)-96);
      
    }
    //console.log(iword + '--' + wordScore);
    if (wordScore > highScore){
       highScore = wordScore;
       word = iword;
    }
  }
  return word;
}
