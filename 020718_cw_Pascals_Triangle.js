function pascalsTriangle(n) {
  var pTriArr = [[1]];
  if (n > 0) {
  for (var currentLevel =1; currentLevel <n; currentLevel++) {
    var currentLevelArr= [];
    for (var clIndex=0;clIndex<=currentLevel; clIndex++) {
      if (clIndex === 0 || clIndex === currentLevel) {
        currentLevelArr.push(1);
      } else {
        currentLevelArr.push(pTriArr[currentLevel-1][clIndex-1] + pTriArr[currentLevel-1][clIndex]);
      }
    }
    pTriArr.push(currentLevelArr);
  }
  }
  var fpTriArr = [];
  pTriArr.forEach(eachLevel => {
    eachLevel.forEach(element => {
      fpTriArr.push(element);  
    });  
  });
  return fpTriArr;
}
