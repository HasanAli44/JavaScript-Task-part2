function findLowest(numbers) {
  let lowNumber = numbers[0];

  for (let number of numbers) {
    if (number < lowNumber) {
      lowNumber = number;
    }
  }
  return lowNumber;
}
const heights2 = [167, 190, 120, 165, 137, 133, 105, 100, -20];
console.log(findLowest(heights2));
