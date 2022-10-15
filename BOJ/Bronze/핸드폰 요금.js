function solution(n, arr) {
  let ySum = 0, mSum = 0;

  for (let i = 0; i < n; i++) {
    ySum += Math.floor(arr[i] / 30) * 10 + 10;
    mSum += Math.floor(arr[i] / 60) * 15 + 15;
  }
  if (ySum === mSum) {
    console.log("Y M " + ySum);
  } else if (ySum < mSum) {
    console.log("Y " + ySum);
  } else {
    console.log("M " + mSum);
  }
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map((item) => +item);

solution(n, arr);
