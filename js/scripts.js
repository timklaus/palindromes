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
    var palindromeSentence = $("input#palindromeInput").val().toUpperCase()
    // This is where we start trying to get rid of non a-z characters
    var newPalindromeSentence = palindromeSentence.replace(/[^a-zA-Z ]/g, "").replace(/[" "]/g, "");
    
    console.log(newPalindromeSentence)

    var palindromeArray = newPalindromeSentence.split("")
    var palindromeReverse = palindromeArray.slice().reverse()
    var result = palindromeCheck(palindromeArray, palindromeReverse)
    console.log(result)
  })
})