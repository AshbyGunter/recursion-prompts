/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // if n < 0
  if (n < 0) {
    // defies definition, return null
    return null;

  // if n = 0
  } else if (n === 0) {
    // base case - return 1
    return 1;
  
  // if n > 0
  } else { 
    // multiply n by factorial of n-1
    // return result
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // if array is empty
  if (array.length === 0) {
    // return 0
    return 0;

  // if array length is 1  -- base case
  } else if (array.length === 1) {  
    // return that element
    return array[0];
  } else {
  // else 
    // make a copy of the array
    var copy = array.slice();
    // use pop on copy
    var lastNum = copy.pop();
    // add pop to sum of the copy
    // return the result
    return lastNum + sum(copy);
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // if array is empty
  if (array.length === 0) {
    // return 0
    return 0;

  // if array length is 1 and element is an array
  } else if ((array.length === 1) && (Array.isArray(array[0]))) {
    // return call to arraySum of the element
    return arraySum(array[0]);

  // if array length is one and it's a number -- base case
  } else if (array.length === 1) {
  	// else return the element
  	return array[0];

  // else array has multiple elements
  } else {
    // make a copy of the array
    var copy = array.slice();
    // use pop on the copy, store in current 
    var current = copy.pop();
    // if popped element is an array
    if (Array.isArray(current)) {
      // call arraySum and set to currrent
      current = arraySum(current);
    }
    // if current is a number, don't need to do anything to it..
    // return result of adding current to arraySum of the copy
    return current + arraySum(copy);
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  // if n is 0 -- base case for true
  if (n === 0) {
    // return true
    return true;

  // if n is 1  -- base case for false
  } else if (n === 1) {
    // return false
    return false;l

  // if n is positive
  } else if (n > 0) {
    // return isEven on n - 2
    return isEven(n - 2);

  // if n is negative
  } else {
    // return isEven on n + 2
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // if n is 0 or 1
  if ((n === 0) || (n === 1)) {
    // return 0
    return 0;

  // if n is negative
  } else if (n < 0) {
  	// get the result for n being positive
    var absValueResult = sumBelow(Math.abs(n));
    // return the negative of the result
    return -1 * absValueResult;

  // else
  } else {
    // return sumBelow of n-1 + n-1
    return  n - 1 + sumBelow(n - 1);
  }

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // define an empty output array
  var theRange = [];

  // if x = y -- base case
  // if the difference between x and y is 1, 
  if ((x === y) || (Math.abs(x - y) === 1)) {
    // return empty array
    return [];
  
  } else {
  // else the difference between x and y is greater than 1
    // make a new x variable, make it 1 closer to y
    var newX;
    if (x > y) {
      newX = x - 1;
    } else {
      newX = x + 1;
    }
    // add new x to result array
    theRange.push(newX);
    // get range from new x through y
    // add those to result array
    // return result array
    return theRange.concat(range(newX, y));    
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // if exp is 0 -- base case
  if (exp === 0) {
    // return base
    return 1;

  // if exp is negative
  } else if (exp < 0) {
    // call exponent with base and positive exp
    var posExpResult = exponent(base, -1 * exp);
    // return 1 / that result
    return 1 / posExpResult;

  // if exp is even
  } else if (exp % 2 === 0) {
    // call exponent with base and exp / 2
    var halfExpResult = exponent(base, exp / 2);
    // return that result times itself
    return halfExpResult * halfExpResult;

  // if exp is odd
  } else {
    // return base times call to exponent with base ad exp - 1
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // finds power of two by divding by 2 until resolves to 1 or less than 1
  // if n is 1 -- true base case
  if (n === 1) {
    // return true
    return true;
  // if n is less than one -- false base case
  } else if (n < 1) {
    return false;
  // when n is greater than 1
  } else {
  	return powerOfTwo(n/2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string === '') {
    return '';
  } else if (string.length === 1) {
    return string;
  } else {
    // define result string as last letter in string
    var reversal = string[string.length-1];

    // slice string using current length - 1 as ending index
    // recursively call using the slice
    // concatinate result to end of result string
    // return result
    return reversal + reverse(string.slice(0, string.length-1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // if the string is empy, return false by definition
  if (string === '') {
  	return false;
  // if the string is one letter -- first true base case
  } else if (string.length === 1) {
    // return true
    return true;
  // if the string is two letters
  } else if (string.length === 2) {
    // if they match, return true -- other true base casee
    if (string[0].toUpperCase() === string[1].toUpperCase()) {
      return true;
    // else return false  -- false base case
    } else {
      return false;
    }
  // if the first and last letters match
  } else if (string[0].toUpperCase() === string[string.length - 1].toUpperCase()) {
    // slice string to exclude first and last letters
    var withoutEnds = string.slice(1, string.length - 1);
    // recursively call with sliced string
    return palindrome(withoutEnds);
  // if the first and last letters do not match, return false -- last false base case
  } else {
  	return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (x === y) {
    return 0;
  }

  var isXPositive = (x > 0);
  var isYPositive = (y > 0);
  var newX;

  if (isXPositive === isYPositive) {
    newX = x - y;
  } else {
    newX = x + y;
  }

  if (isXPositive && newX >= 0) {
  	return modulo(newX, y);
  } else if (isXPositive && newX < 0) {
  	return x;
  } else if (!isXPositive && newX <= 0) {
  	return modulo(newX, y);
  } else {
  	return x;
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  var isXPositive = (x > 0);
  var isYPositive = (y > 0);

  if (x === 0 || y === 0) {
  	return 0;
  } else if (isYPositive) {
  	return x + multiply (x, y - 1);
  } else if (!isXPositive && !isYPositive) {
    var posX = x - x - x;
    var posY = y - y - y;
  	return multiply(posX, posY);
  } else {
  	return multiply(y, x);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
  	return NaN;
  } else if (x === 0) {
  	return 0;
  } else if (x === y) {
  	return 1;
  } else {
  	var isXPositive = (x > 0);
  	var isYPositive = (y > 0);
  	var newX;

  	if (isXPositive === isYPositive) {
  	  newX = x - y;
  	} else {
  	  newX = x + y;
  	}

  	if (isXPositive && newX >= 0) {
  	  return 1 + divide(newX, y);
  	} else if (isXPositive && newX < 0) {
  	  return 0;
  	} else if (!isXPositive && newX <= 0) {
  	  return 1 + divide(newX, Y);
  	} else {
  	  return 0;
  	}
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  // if both are 0
  if ((x === 0) && (y === 0)) {
    // return NaN
    return null;
  // if either is negative
  } else if ((x < 0) || (y < 0)) {
  	return null;
  // if x is 0
  } else if (x === 0) {
    // return y
    return y;
  // if y is 0
  } else if (y === 0) {
    // return x
    return x;
  // else
  } else {
    // return gcd of y and x % y
    return gcd(y, x % y);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
