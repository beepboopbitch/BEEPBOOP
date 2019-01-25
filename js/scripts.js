function numCounter(input){
  var numberOutput=""
  var number = parseInt(input);
  var numArray = []
  for (var i=0;i<=number;i++){
    numArray.push(i)

  }
  numberOutput +=
  translator(numArray[0],"0, ","")
  numberOutput +=
  translator(numArray[1],"1, ","Beep!, ")
  numberOutput +=
  translator(numArray[2],"2, ","Boop!, ")
  numberOutput +=
  translator(numArray[3],"3, ","I'm sorry, Dave. I'm afraid I can't do that., ")
  numberOutput +=
  translator(numArray[4],"4, ","")
  numberOutput +=
  translator(numArray[5],"5, ","")
  numberOutput +=
  translator(numArray[6],"6, ","")
  numberOutput +=
  translator(numArray[7],"7, ","")
  numberOutput +=
  translator(numArray[8],"8, ","")
  numberOutput +=
  translator(numArray[9],"9, ","")
  numberOutput +=
  translator(numArray[10],"10, ","")
  numberOutput +=
  translator(numArray[11],"11, ","")
  numberOutput +=
  translator(numArray[12],"12, ","")
  numberOutput +=
  translator(numArray[13],"13, ","")
  numberOutput +=
  translator(numArray[14],"14, ","")
  numberOutput +=
  translator(numArray[15],"15, ","")
  numberOutput +=
  translator(numArray[16],"16, ","")
  numberOutput +=
  translator(numArray[17],"17, ","")
  numberOutput +=
  translator(numArray[18],"18, ","")
  numberOutput +=
  translator(numArray[19],"19, ","")
  numberOutput +=
  translator(numArray[20],"20, ","")
  numberOutput +=
  translator(numArray[21],"21, ","")
  numberOutput +=
  translator(numArray[22],"22, ","")
  numberOutput +=
  translator(numArray[23],"23, ","")
  numberOutput +=
  translator(numArray[24],"24, ","")
  numberOutput +=
  translator(numArray[25],"25, ","")
  numberOutput +=
  translator(numArray[26],"26, ","")
  numberOutput +=
  translator(numArray[27],"27, ","")
  numberOutput +=
  translator(numArray[28],"28, ","")
  numberOutput +=
  translator(numArray[29],"29, ","")
  numberOutput +=
  translator(numArray[30],"30, ","")
  numberOutput +=
  translator(numArray[31],"31, ","")
  numberOutput +=
  translator(numArray[32],"32, ","")
  return numberOutput
  console.log(numberOutput)
}

console.log(numCounter("9"))

function translator(num,nar,msg){
  if (num===0){
    return nar;
  } else if (num===1){
    return msg;
  } else if (num===2){
    return msg;
  } else if (num===3){
    return msg;
  } else if (num===4){
    return nar;
  } else if (num===5){
    return nar;
  } else if (num===6){
    return nar;
  } else if (num===7){
    return nar;
  } else if (num===8){
    return nar;
  } else if (num===9){
    return nar;
  } else if (num===10){
    return nar;
  } else if (num===11){
    return nar;
  } else if (num===12){
    return nar;
  } else if (num===13){
    return nar;
  } else if (num===14){
    return nar;
  } else if (num===15){
    return nar;
  } else if (num===16){
    return nar;
  } else if (num===17){
    return nar;
  } else if (num===18){
    return nar;
  } else if (num===19){
    return nar;
  } else if (num===20){
    return nar;
  } else if (num===21){
    return nar;
  } else if (num===22){
    return nar;
  } else if (num===23){
    return nar;
  } else if (num===24){
    return nar;
  } else if (num===25){
    return nar;
  } else if (num===26){
    return nar;
  } else if (num===27){
    return nar;
  } else if (num===28){
    return nar;
  } else if (num===29){
    return nar;
  } else if (num===30){
    return nar;
  } else if (num===31){
    return nar;
  } else if (num===32){
    return nar;
  }
}

$(document).ready(function(){
  $("form#numForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#bbInput").val();
    var userOutput = numCounter(userInput);
    $("p#bbOutput").text(userOutput);
  });
});
