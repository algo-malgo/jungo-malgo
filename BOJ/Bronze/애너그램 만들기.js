function solution(s1, s2) {
  let freq = Array.from({length: 26}, () => 0);
  for (let i = 0; i < s1.length; i++) {
    freq[s1[i].charCodeAt() - 97] += 1;
  }
  let cnt = 0;
  for (let i = 0; i < s2.length; i++) {
    let idx = s2[i].charCodeAt() - 97;
    if (freq[idx]) {
      cnt += 1;
      freq[idx] -= 1;
    }
  }
  console.log(s1.length + s2.length - cnt * 2);
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
solution(input[0].trim(), input[1]);
