/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

// YOUR CODE HERE

function parseQueryString(queryString) {
  var newObject = {};
  queries = queryString.split("=");
  queries = queryString.split("&");

  for (i=0; i< queries.length; i++) {
    temp = queries[i].split("=");
    newObject[temp[0]] = temp[1];
    if (queries.length === 1) {
      temp = queries[i].split("=");
      newObject[temp[0]];
    }
  }
  console.log(newObject);
  return(newObject);
}

parseQueryString(""); // this returns as {}: undefined - don't know how to remove the undefined
parseQueryString("a=1");
parseQueryString("first=alpha&last=omega");
parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");

// reverse

function stringReverse(object) {
  var newString = "";
  var keys = Object.keys(object); //
  var pairArr = []; //
  keys.forEach(function(el) { //
    pairArr.push(el + '=' + object[el]);
  });
  joinString = pairArr.join("&");
  console.log(joinString);
}


var o = {first: "alpha", last: "omega"};
stringReverse(o);
