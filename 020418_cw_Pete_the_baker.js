function cakes(recipe, available) {
  var cakeNum = [];
  for (var property1 in recipe) {
    if (available[property1] >= recipe[property1]) {
      cakeNum.push(Math.floor(available[property1] / recipe[property1]));
    } else {
      return 0;
    }
    }
    console.log(cakeNum);
    return Math.min(...cakeNum);
    
}
