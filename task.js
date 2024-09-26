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
// console.log(findLowest(heights2));

// task-2
function findFriend(names) {
  let smallestName = names[0];
  for (let nam of names) {
    if (nam.length < smallestName.length) {
      smallestName = nam;
    }
  }
  return smallestName;
}
const heights3 = ["rafi", "ron", "rashed", "o", "rahim", "robin", "t"];

console.log(findFriend(heights3));
