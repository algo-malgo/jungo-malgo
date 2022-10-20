const [n, ...input] = (require("fs").readFileSync("input.txt") + "")
  .trim()
  .split("\n")
  .map(Number);
let ans = 0;
const stack = [];
for (let i = 0; i < input.length; i++) {
  let min = 0;
  let max = stack.length;
  let idx = 0;
  while (true) {
    idx = Math.floor((min + max) / 2);
    if (max < 0) break;
    else if (max < min) break;
    else if (stack[idx] > input[i] && stack[idx + 1] <= input[i]) break;
    else if (stack[idx] > input[i]) min = idx + 1;
    else max = idx - 1;
  }
  ans += stack.length - Math.max(0, idx);

  while (stack.at(-1) < input[i]) {
    stack.pop();
  }
  stack.push(input[i]);
}
console.log(ans);
