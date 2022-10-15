function solution(arr) {
  let max = 0;
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let [k, v] of map) {
    if (v === 3) {
      return 10000 + k * 1000;
    } else if (v === 2) {
      return 1000 + k * 100;
    }
  }
  return max * 100;
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const arr = input[0].split(" ").map((item) => +item);
console.log(solution(arr));
