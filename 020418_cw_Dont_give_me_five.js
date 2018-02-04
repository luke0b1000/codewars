function dontGiveMeFive(start, end)
{
  var count = 0;
  for (var i = start; i <= end; i++) {
    if (String(i).indexOf('5') == -1) {
      count++;
    }
  }
  return count;
}
