// this is our back-end stuff
var palindromeCheck = function(palindromeArray, palindromeReverse) {
  if (JSON.stringify(palindromeArray) === JSON.stringify(palindromeReverse)) {
    return true;
  } else {
    return false; 
  }
};

// this is our front-end stuff
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault()
    
    var palindromeSentence = $("input#palindromeInput").val()   
    var palindromeArray = palindromeSentence.split("")
    // debugger
    var palindromeReverse = palindromeArray.slice().reverse()
    var result = palindromeCheck(palindromeArray, palindromeReverse)
    //console.log(palindromeArray === palindromeReverse)
    //console.log(palindromeReverse)
    //console.log(JSON.stringify(palindromeArray) === JSON.stringify(palindromeReverse))
    //console.log(JSON.stringify(palindromeArray))
    console.log(result)
  })
})