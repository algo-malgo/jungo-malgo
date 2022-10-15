function solution(s) {
  let alpha = Array.from({length: 26}, () => 0);
  for (let i = 0; i < s.length; i++) {
    alpha[s[i].charCodeAt() - 97] += 1;
  }
  console.log(alpha.join(' '))
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

solution(input);
