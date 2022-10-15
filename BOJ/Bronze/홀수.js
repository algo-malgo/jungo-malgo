function solution(arr) {
  let sum = 0,
    min = 101;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sum += arr[i];
      if (arr[i] < min) min = arr[i];
    }
  }
  if (!sum) {
    console.log(-1);
  } else {
    console.log(sum);
    console.log(min);
  }
}

const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((item) => +item);

solution(input);
