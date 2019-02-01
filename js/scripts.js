function numCounter(input){
  var numArray = [];
  var number = parseInt(input);
  for (var i=0;i<=number;i++){
    numArray.push(arrayTranslator(i));
  }
  return numArray
}

function arrayTranslator(num) {
  var numInspector = num.toString().split('');

  if (numInspector.includes('3')){
    return "I'm sorry Dave, I'm afraid I can't do that" + ", ";
  } else if(numInspector.includes('2')) {
    return "boop" + ", ";
  } else if(numInspector.includes('1')) {
    return "beep" + ", ";
  } else {
    return num + ", ";
  }
}

$(document).ready(function(){
  $("form#numForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#bbInput").val();
    var userOutput = numCounter(userInput);
    $("span#bbOutput").html(userOutput);
  });
});
