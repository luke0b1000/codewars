function f(n) {

var sieveofE = function(upperBound){
  var table = {}; //set up the chart table
  for (var i = 2; i< upperBound; i++){   //go from 2 to highest NUmber   //###Modified sieve of E because of the upperbound
    table[i] = true;      // set table = {2:true, 3:true...}
  }

  for (var i = 2; i<= Math.sqrt(upperBound); i++){   //start the loooping process
    if (table[i] === true) {   //if A[i] is true, it is still prime
      for (var j = i+i; j <upperBound; j= j +i){   //###Modified sieve of E because of the upperbound // starts off with the prime * 2 (prime + prime), then each incrementation is a multiple of i so j [j=i+i] is the first multiple, so the next one is j=j+i which expanded j=i+i+i, so each one will add another i
        table[j] = false; // set it equal to false since its a multiple
      }
    }
  } // at the end of this we will have a table with true as prime and false as not

  var primeTable = [];   //now we want primeTable to only contain the prime value separate from the false values
  for (key in table){   //loop through the table object 
    if (table[key]=== true){  //if the key is true
      primeTable.push(key);    // put the key into the primeTable
    }
  }
  return primeTable;

};
var primeNum = sieveofE(n); // ['2','3','5'...]

var highestEvenPrimeNum = 0;
var evenLength = 0;

primeNum.forEach((element) => {
  var pattern = /[24680]/g;  //only want even digits
  if(element.match(pattern)){   //so the code doesn't error at 3 or odd numbers
    var evenCount = element.match(pattern).length;  //  2 ['2']  //   887  ['8','8'] => length of 2
    if (evenCount >= evenLength) {
      highestEvenPrimeNum = element;
      evenLength = evenCount;
    }
  }
  
});

return parseInt(highestEvenPrimeNum);

}
