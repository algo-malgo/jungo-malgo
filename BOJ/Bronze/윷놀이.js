function solution(arr) {
  for (let i = 0; i < 3; i++) {
    let cnt = 0;
    for (let j = 0; j < 4; j++) {
      if (arr[i][j]) cnt += 1;
    }
    switch (cnt) {
      case 0:
        console.log("D");
        break;
      case 1:
        console.log("C");
        break;
      case 2:
        console.log("B");
        break;
      case 3:
        console.log("A");
        break;
      case 4:
        console.log("E");
        break;
    }
  }
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let arr = [];
for (let i = 0; i < 3; i++) arr.push(input[i].split(" ").map((item) => +item));

solution(arr);
