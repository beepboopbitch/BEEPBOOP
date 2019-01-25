function numCounter(input){
  var numberOutput
  var number = parseInt(input);
  var numArray = []
  for (var i=0;i<=number;i++){
    numArray.push(i)

  }
  numberOutput +=
  translator(numArray[0],"0, ","")
  numberOutput +=
  translator(numArray[1],"1, ","hi")
  numberOutput +=
  translator(numArray[2],"2, ","hi")
  numberOutput +=
  translator(numArray[3],"3","hi")
  numberOutput +=
  console.log(numberOutput)
}

console.log(numCounter("9"))

function translator(num,nar,msg){
  if (num===0){
    return nar;
  } else if (num===1){
    return nar;
  } else if (num===2){
    return nar;
  } else if (num===3){
    return msg;
  }
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#bbInput").val();
    var userOutput = numCounter(userInput);
    $("p#bbOutput").text(userOutput);
  });
});
