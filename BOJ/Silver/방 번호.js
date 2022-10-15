function solution(n) {
  const map = new Map();
  for (let i = 0; i < n.length; i++) {
    if (n[i] === "9") {
      map.set("6", (map.get("6") || 0) + 1);
    } else {
      map.set(n[i], (map.get(n[i]) || 0) + 1);
    }
  }

  map.get("6") >= 2 && map.set("6", Math.ceil(map.get("6") / 2));
  let max = 0;
  for (let [k, v] of map) if (v > max) max = v;

  console.log(max);
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

solution(input);
