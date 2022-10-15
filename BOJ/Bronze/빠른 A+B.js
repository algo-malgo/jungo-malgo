const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let answer = "";
for (let i = 1; i <= input[0]; i++) {
  answer += input[i].split(" ").reduce((acc, cur) => acc + +cur, 0) + "\n";
}
console.log(answer);
