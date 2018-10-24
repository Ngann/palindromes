$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

// forloop does not work
    // var wordInput = parseInt($("input#word").val());
    // var checkPalindrom = function(word) {
    //   var l = word.length;
    //   for (var i = 0; i < l/2; i++) {
    //     if(word.charAt(i) !== word.charAt(l - 1 - i)) {
    //         return true;
    //     }
    //   }
    //   return false;
    //   }
    // var result = checkPalindrom(wordInput);
    // alert(result);
    // // $('#result').append(result);

//recursive does not work
    // var isPalindrome = function(letters){
    //   var characters = letters.split('');
    //   firstLetter = characters.shift();
    //   lastLetter = characters.pop();
    //
    //   if (firstLetter !== lastLetter) {
    //     return false;
    //   }
    //   if (characters.length < 2) {
    //     return true ;
    //   }
    //   return isPalindrome(characters.join(''));
    // }
    // var wordInput = parseInt($("input#word").val());
    // var result = isPalindrome(wordInput);

//recursive works
   var isPalindrom = function(str) {
    var ia = 0;
    var ib = str.length - 1;
    do {
      if (str[ia] === str[ib]) continue;

      // if spaces skip & retry
      if (str[ia] === ' ' && ib++) continue;
      if (str[ib] === ' ' && ia--) continue;
      // return false replace to No
      return 'No';
    } while (++ia < --ib);
    //return true replace with Yes
    return 'Yes';
  }
  var palindrom = $("input#word").val();
  var res = isPalindrom(palindrom);
  // alert(res);
  $("#check").text(res);
  })
});
