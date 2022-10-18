function solution(n, arr) {
  let answer = "";
  const stack = [];
  let pos = 0;

  for (let i = 0; i < n; i++) {
    switch (arr[i][0]) {
      case "push":
        stack.push(arr[i][1]);
        pos += 1;
        break;
      case "pop":
        let tmp = stack.pop();
        answer += tmp ? tmp + "\n" : "-1\n";
        if (tmp) pos -= 1;
        break;
      case "size":
        answer += pos + "\n";
        break;
      case "empty":
        answer += pos ? "0\n" : "1\n";
        break;
      case "top":
        answer += pos ? stack[pos - 1] + "\n" : "-1\n";
        break;
    }
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

const n = +input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].trim().split(" "));
}

solution(n, arr);
