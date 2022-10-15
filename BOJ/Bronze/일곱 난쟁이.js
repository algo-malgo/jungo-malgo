function getCombs(arr, select) {
  const results = [];
  if (select === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombs(rest, select - 1); 
    const attached = combinations.map((combination) => [fixed, ...combination]); 
    results.push(...attached);
  });

  return results; 
};

function solution(arr) {
  const combs = getCombs(arr, 7);
  for (let i = 0; i < combs.length; i++) {
    const sum = combs[i].reduce((acc, cur) => acc + cur, 0);
    if (sum === 100) {
      return combs[i].sort((a, b) => a - b).join('\n');
    }
  }
}

const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

console.log(solution(input));
