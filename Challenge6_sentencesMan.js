function stringmanipulation (word){
  if (word [0]== "a" ||word [0]== "i" ||word [0]== "u" ||word [0]== "e" ||word [0]== "o" ){
  return word
        } else {
    str1 = word.slice(0,1);
    str2 = word.slice(1);
    str3 = 'nyo';
    return str2 + str1 + str3;
    }
  }


  function sentencesManipulation(sentence){
    let hasil = [];
    let kalimatSM = sentence.split(" ");

    for (let i = 0; i < kalimatSM.length; i++) {
      hasil.push(stringmanipulation(kalimatSM[i]))
    }
    return hasil.join(" ");
  }

  console.log(sentencesManipulation('ibu pergi ke pasar bersama aku'));
                          // ibu ergipnyo eknyo asarpnyo ersamabnyo aku
