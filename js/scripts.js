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
  translator(numArray[3],"3","I'm sorry, Dave. I'm afraid I can't do that., ")
  return numberOutput;
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
