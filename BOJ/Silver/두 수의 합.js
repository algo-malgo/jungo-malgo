function solution(n, arr, x) {
  const freq = Array.from({length: 100001}, () => 0);

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (freq[x - arr[i]]) cnt += 1;
    else freq[arr[i]] += 1;
  }

  console.log(cnt);
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split('\n');
const arr = input[1].split(' ').map((item) => +item);

solution(+input[0], arr, +input[2]);
