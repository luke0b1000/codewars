function sumIntervals(intervals){
  finalArr = [];
  intervals.forEach(e => {
    for (let i =e[0]; i < e[1]; i ++) {
      finalArr.push(i);
    }
  });
  finalArr = [...new Set(finalArr)];
  return finalArr.length;
}
