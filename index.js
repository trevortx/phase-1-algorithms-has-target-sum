function hasTargetSum(array, target) {
  for (i = 0; i < array.length; i++) {
    const comp = target - array[i]
    for (let j = i + 1; j < array.length; j++)
      if (array[j] === comp) return true
  }
  return false
}

/* 
  first for loop = n steps
  second loop = n * n steps
  runtime: 0(n^2)
  space: 0(n)
*/

/* 
  take in a target array and a value as arguments
  iterate over the array, start with the first index and add that to the next, and so on,
  to see any additions match the target
  return true if two values = the target, else return false
*/

/*
  create a for loop to use to search the array's indexes
  create a complementary variable that's our target number
    if we find this number in the second for loop, we'll have a match and can return true!
  create another for loop to compare the index +1 of the first for loop
  if the complementary variable is equal to any of the indexes from the second for loop, return true
  else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
