function solution(n, k, arr) {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  let cnt = 0;
  for (let [key, value] of map) 
    cnt += Math.ceil(value / k);
  return cnt;
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [n, k] = input[0].split(" ").map((item) => +item);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].trim());
}
console.log(solution(n, k, arr));
