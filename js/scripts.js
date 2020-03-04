// this is our back-end stuff
var palindromeCheck = function(palindromeArray, palindromeReverse) {
  if (palindromeArray === palindromeReverse) {
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
    var palindromeReverse = palindromeArray.reverse()
    var result = palindromeCheck(palindromeArray)
    console.log(palindromeArray)
    console.log(palindromeReverse)
    console.log(result)
  })
})