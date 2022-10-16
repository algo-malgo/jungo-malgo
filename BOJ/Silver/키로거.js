let dat, pre, nxt;
let unused;

function insert(addr, alpha) {
  dat[unused] = alpha;
  pre[unused] = addr;
  nxt[unused] = nxt[addr];
  if (nxt[addr] !== -1) pre[nxt[addr]] = unused;
  nxt[addr] = unused;
  unused++;
}

function erase(addr) {
  nxt[pre[addr]] = nxt[addr];
  if (nxt[addr] != -1) pre[nxt[addr]] = pre[addr];
}

function traversal() {
  let list = "";
  let cur = nxt[0];
  while (cur !== -1) {
    list += dat[cur];
    cur = nxt[cur];
  }
  console.log(list);
}

function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    dat = [0];
    pre = [-1];
    nxt = [-1];
    unused = 1;

    let cursor = 0;
    for (let j = 0; j < arr[i].length; j++) {
      switch (arr[i][j]) {
        case "-":
          if (pre[cursor] !== -1) {
            erase(cursor);
            cursor = pre[cursor];
          }
          break;
        case "<":
          if (pre[cursor] !== -1) cursor = pre[cursor];
          break;
        case ">":
          if (nxt[cursor] !== -1) cursor = nxt[cursor];
          break;
        default:
          insert(cursor, arr[i][j]);
          cursor = nxt[cursor];
          break;
      }
    }
    traversal();
  }
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
  arr.push(input[i].trim());
}

solution(n, arr);
