function hasTargetSum(array, target) {
  for (const [i1, num1] of array.entries()) {
    for (const [i2, num2] of array.entries()) {
      if (i1 !== i2) {
        if (num1 + num2 === target) return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  declare a function with the parameters array and target
    iterate over the array using array.entries to have access to index1
      iterate over the same array again using array.entries to have access to index2
        if index1 does not equal index2
          if num1 + num2 equals the target input
            return true

    If it reaches after the end of the loop return false
*/

/*
  Seeing that I needed to add two elements to equal the target. I made a nested
  for loop that will add the rest of the elements to the first element and so on.
  One of the test cases didn't allow
  for adding the same element in the same index together, so I had to acount for that with
  an if statement. If the indexes aren't the same add the two elements together,
  if they equal the target value return true.
  If it reaches after the for loop finishes then return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  //add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
