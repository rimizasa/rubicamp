//masih pake hardcode
function cekPrime (par1){
  var max = Math.sqrt (par1)
  for(var i=2;i<= max; i++){
        if(par1 % i==0)
          return false;
        }
        return true;
}

function indexPrime (param1){
    var count = []
    for (var par1 = 1; par1<500000; par1++){
          if(cekPrime(par1)){
            count.push (par1)
    }
  }
  var arr = count;
  for(var par1 = 1; par1 <arr.length; par1++){
    if (param1 == par1){
    var p = arr[par1]
    return p;
}
}
}

console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)); //result => 3571
console.log(indexPrime(37786)); // result => 450881

// ini yg pleksibel
function cekPrime (param1){
    for(var i=2;i< param1; i++){
        if(param1 % i==0){
          return false;
        }
      }
        return true;
}

function indexPrime (param1){
    var count = []
    var par1 = 2;
    while (count.length < param1){
          if(cekPrime(par1)){
            count.push(par1)
    }
par1++
  }
  return count [param1 -1];
}

console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)); //result => 3571
console.log(indexPrime(37786)); // result => 450881
