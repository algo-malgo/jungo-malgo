function solution(n, n_arr, m_arr) {
  const map = new Map();
  m_arr.forEach((m) => map.set(m, 0));
  let m_asc = [...m_arr].sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let target = n_arr[i];
    let left = 0;
    let right = m_asc.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left < right) {
      if (target < m_asc[mid]) {
        right = mid - 1;
      } else if (target > m_asc[mid]) {
        left = mid + 1;
      } else {
        break;
      }
      mid = Math.floor((left + right) / 2);
    }
    if (target === m_asc[mid]) map.set(target, (map.get(target) || 0) + 1);
  }
  let answer = "";
  for (let m of m_arr) {
    answer += (map.get(m) || 0) + " ";
  }
  console.log(answer);
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
)
  .trim()
  .split("\n");

let n_arr = input[1]
  .trim()
  .split(" ")
  .map((e) => +e);

let m_arr = input[3]
  .trim()
  .split(" ")
  .map((e) => +e);

solution(+input[0], n_arr, m_arr);
