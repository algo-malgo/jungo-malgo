function solution(a, b) {
  let max = Math.max(a, b),
    min = Math.min(a, b);

  let answer = "";
  for (let i = min + 1; i < max; i++) answer += i + " ";

  if (max === min) {
    console.log(0);
  } else {
    console.log(max - min - 1);
    console.log(answer);
  }
}

const fs = require("fs");
let [a, b] = fs.readFileSync("input.txt").toString().trim().split(" ");

solution(a, b);
