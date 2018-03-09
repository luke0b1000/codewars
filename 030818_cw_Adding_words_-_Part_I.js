class Arith{
  constructor(value1) {
    this.value1 = this.convertWordToNum(value1);
  }
  
  convertWordToNum(word) {
    return ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'].indexOf(word);
  }
  
  convertNumToWord(num) {
    var wordlist = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
    return wordlist[num];
  }
  
  add(value2) {
    this.value2 = this.convertWordToNum(value2);
    var sum = this.value1 + this.value2;
    return this.convertNumToWord(sum);
  }
}
