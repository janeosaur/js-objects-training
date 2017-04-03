/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE

function letterCount(phrase) {
  var objResult = {};
  var lowerCase = phrase.toLowerCase(); // to make them lowercase

// loop through phrase
// if letter matches key in objectResult, add 1 to the value of that key
// else key is't in objectResult then add that letter as a key, and set value to 1

  for (i = 0; i<lowerCase.length; i++) {
      if (objResult[lowerCase[i]] > 0) {
        objResult[lowerCase[i]] += 1;
      } else {
        objResult[lowerCase[i]] = 1;
      }
  }
  console.log(objResult);
}

letterCount('apple');
letterCount('twitter');
