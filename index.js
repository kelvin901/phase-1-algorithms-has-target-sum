function hasTargetSum(arr, target) {
  // Iterate over all pairs of numbers in the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // If the pair adds up to the target, return true
      if (arr[i] + arr[j] === target) {
        console.log(`Found pair: ${arr[i]} + ${arr[j]} = ${target}`);
        return true;
      }
    }
  }
  // No pair adds up to the target, return false
  console.log(`No pair in the array adds up to ${target}`);
  return false;
}

const arr = [1, 2, 3, 4, 5];
const target = 7;
const result = hasTargetSum(arr, target);
console.log(result); // true
