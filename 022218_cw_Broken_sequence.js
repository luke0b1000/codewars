function findMissingNumber(sequence){
  if (sequence.length === 0) {
    return 0;
  }
  regex_pattern = /[^\d\s]/
  if (regex_pattern.test(sequence)) {
    return 1;
  }
  seqArr = sequence.split(' ');

  for (i = 0; i< seqArr.length; i++) {
    if (parseInt(seqArr[i]) !== i+1) {
      return i+1;
    }
  }
  return 0;
}
