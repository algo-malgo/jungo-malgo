function solution(arr) {
  let start = 1;
  let num = Array.from({ length: 20 }, () => start++);

  for (let i = 0; i < 10; i++) {
    let start = arr[i][0],
      end = arr[i][1];
    let len = Math.floor((arr[i][1] - arr[i][0] + 1) / 2);
    for (let j = 0; j < len; j++) {
      let tmp = num[start - 1];
      num[start - 1] = num[end - 1];
      num[end - 1] = tmp;
      
      start += 1;
      end -= 1;
    }
  }
  console.log(num.join(" "));
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(input[i].split(" ").map((item) => +item));
}

solution(arr);
