## 1. Find lowest number form an array :

```
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

```

## 2.Find the smallest name:

```
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
```

## 3.Calculate in javaScript Function:

```
// task-3
function electronics(laptopQuentity, tableQuentity, mobileQuentity) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  const laptopCost = laptopPrice * laptopQuentity;
  const tabletCost = tabletPrice * tableQuentity;
  const mobileCost = mobilePrice * mobileQuentity;
  const totalCost = laptopCost + tabletCost + mobileCost;
  console.log(totalCost);
}

console.log(electronics(2, 5, 8));

```
