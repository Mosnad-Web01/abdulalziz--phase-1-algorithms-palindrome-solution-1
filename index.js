function isPalindrome(word) {
  // Write your algorithm here
  if (word.length <= 1) {
    return true;
  } else if (word[0] === word[word.length - 1]) {
    return isPalindrome(word.slice(1, word.length - 1));
  } else {
    return false;
  }

  // Write your algorithm here
  
}
  // Write your algorithm here


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
