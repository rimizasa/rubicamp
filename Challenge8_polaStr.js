function pola(str) {
let pecahan1 = str.split ("=");
angka3 = pecahan1 [1].trim ();
pecahan2 = pecahan1[0].split ("*");

angka1 = pecahan2[0].trim();
angka2 = pecahan2[1].trim();

for (let i = 0; i < 10; i++) {
  for (let j = 0;j < 10; j++){

    if (parseInt (angka1.replace ("#",i))*
    parseInt (angka2) ==
    parseInt (angka3.replace ("#",j)))
  {
    return [i, j];
  }
}

}

}

console.log(pola("42#3  * 188 = 80#204"));
// result : [8, 5]
console.log(pola("8#61 * 895 = 78410#5"));
// [7,9]
