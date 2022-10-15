function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    let s1 = arr[i][0].split("").sort().join("");
    let s2 = arr[i][1].split("").sort().join("");

    s1 === s2 ? console.log("Possible") : console.log("Impossible");
  }
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = +input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" "));
}

solution(n, arr);
