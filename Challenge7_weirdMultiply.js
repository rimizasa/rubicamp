function weirdMultiply (sentence) {
  var hasil = 1;
  strAngka = sentence.toString();
if (strAngka.length == 1) {
  hasil = parseInt (strAngka);
  return hasil
}

else {
  for (let i = 0; i < strAngka.length; i++) {
    hasil *= parseInt((strAngka.charAt(i)));
  }
  return weirdMultiply(hasil);
}

}
console.log(weirdMultiply(39));//->3x9=29 -> 2x7 = 14 ->1x4 = 4
console.log(weirdMultiply(999));// -> 9*9*9 = 729 -> 7*2*9 =126 1*2*6 = 12 -> 1*2=2
console.log(weirdMultiply(3)); //-> 3
