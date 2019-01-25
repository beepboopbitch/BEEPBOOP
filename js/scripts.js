function translator(num,char,spChar,xSpChar){
  if (num==0){
    return "";
  } else if(num==1){
    return char;
  } else if(num==2){
    return char+char;
  } else if(num==3){
    return char+char+char;
  } else if(num==4){
    return char+spChar;
  } else if(num==5){
    return spChar;
  } else if (num==6){
    return spChar+char;
  } else if (num==7){
    return spChar+char+char;
  } else if (num==8){
    return spChar+char+char+char;
  } else if (num==9){
    return char+xSpChar;
  }
}

function romanizer(number){
  if (parseInt(number)<4000){
    var romanNumeralOutput="";
    var numArray=number.split("");
    for (var i=0;numArray.length<4;i++){
      numArray.unshift("0")
    }
    romanNumeralOutput += translator(numArray[0],"M","Y","Z");
    romanNumeralOutput += translator(numArray[1],"C","D","M");
    romanNumeralOutput += translator(numArray[2],"X","L","C");
    romanNumeralOutput += translator(numArray[3],"I","V","X");
    return romanNumeralOutput;
  } else {
    alert("Alert! Roman Numerals don't go past 3999!");
  }
}

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
  $("form#romeForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#romeInput").val();
    var outputSentence = romanizer(userInput);
    $("p#romeOutput").text(outputSentence).show();
  });
});
