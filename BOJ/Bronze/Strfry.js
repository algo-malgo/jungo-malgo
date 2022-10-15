function solution(n, arr) {
  let answer = "";

  for (let i = 0; i < n; i++) {
    let s1 = arr[i][0],
      s2 = arr[i][1];

    if (s1.length !== s2.length) {
      answer += "Impossible\n";
    } else {
      const map1 = new Map();
      const map2 = new Map();
      for (let j = 0; j < s1.length; j++) {
        map1.set(s1[j], (map1.get(s1[j]) || 0) + 1);
        map2.set(s2[j], (map2.get(s2[j]) || 0) + 1);
      }

      let possible = 1;
      for (let [k, v] of map2) {
        const cnt = map1.get(k);
        if (cnt === undefined || cnt < v) {
          possible = 0;
          break;
        }
      }
      answer += possible ? "Possible\n" : "Impossible\n";
    }
  }

  return answer;
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = +input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" "));
}

console.log(solution(n, arr));
