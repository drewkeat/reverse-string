function reverseString(str) {
  // type your code here
  const arr = str.split("");
  const result = [];

  arr.forEach(letter => result.unshift(letter))
  return result.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// split given string into an array
// create a result array
// iterate through array by length
// for each element in the array, result.push(unshift(element))
// return result.join("")

// The function initially splits the given string into an array; then it iterates through each element of that array and stores it into the 0th position of a result array which is finally joined without spaces and returned as a new string.