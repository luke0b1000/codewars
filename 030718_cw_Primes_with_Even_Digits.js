function f(n) {
var sieveofE = function(upperBound){
  var table ={};
  for (var i=2; i<upperBound;i++){  //modified sieveofE because of there upperbound
    table[i] = true;
  }   //table = {2:true, 3:true, 4:true, 5:true...}

  for (var i =2; i<=Math.sqrt(upperBound);i++){
    if (table[i] === true){
      for (var j = i+i; j < upperBound; j=j+i) {  //modified sieveofE because of there upperbound
        table[j] = false;
      }
    }
  }

  var primeTable = [];
  for (key in table){
    if (table[key] === true){
      primeTable.push(key);
    }
  }

  return primeTable;
};

primeNum = sieveofE(n);

var highestEvenPrimeNum = 0;
var evenLength = 0;

primeNum.forEach((element) => {
  pattern = /[24680]/g;
  if (element.match(pattern)){
    evenCount = element.match(pattern).length;
    if (evenCount >= evenLength){
      highestEvenPrimeNum = element;
      evenLength = evenCount;
    }
  }
});

return parseInt(highestEvenPrimeNum);

}
