function numCounter(input){
  var numberOutput
  var number = parseInt(input);
  var numArray = []
  for (var i=0;i<=number;i++){
    numArray.push(i)

  }
  numberOutput +=
  translator(numArray[0])
  return numberOutput;
  console.log(numArray)
}

console.log(numCounter("9"))

function translator(num){
  if (num===3){
    return "hi"
  }
}
