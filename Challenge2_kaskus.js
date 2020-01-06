function deretKaskus(n){
  var hasil = []
   for(var h =3; h <= n*3; h+=3){
    if(h % 5==0 && h % 6==0){
      hasil.push("Kaskus")
    }

    else if(h % 5==0){
      hasil.push("Kas")
    }
    else if(h % 6==0){
      hasil.push("Kus")
    }

    else{
      hasil.push(h)
    }
  }
  console.log(hasil)
}
console.log(deretKaskus(10));
