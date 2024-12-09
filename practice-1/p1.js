// Sum any number of numbers

/* Soulution 1 
const sumAllNum = () => {
  let total = 0;
  for (let i of arguments) {
    total += i;
  }
  return total;
};

console.log(sumAllNum(2, 4, 6));
*/

/*
Solution 2

const sumAllNum = (nums) => {
  return Array.from(nums).reduce((total, num) => total + num, 0);
};
console.log(sumAllNum(2, 4, 6));

*/

/* Solution 3 

const sumAllNum = (...nums) => {
  return nums.reduce((total, num) => total + num, 0);
};
console.log(sumAllNum(2, 1, 3));

*/
