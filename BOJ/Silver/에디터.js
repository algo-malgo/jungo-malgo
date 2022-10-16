const MX = 1000005;
let dat = Array.from({ length: MX }, () => 0);
let pre = Array.from({ length: MX }, () => -1);
let nxt = Array.from({ length: MX }, () => -1);
let unused = 1;

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

function solution(str, m, arr) {
  let cursor = 0;
  for (let i = 0; i < str.length; i++) {
    insert(i, str[i]);
    cursor++;
  }

  for (let i = 0; i < m; i++) {
    switch (arr[i][0]) {
      case "P":
        insert(cursor, arr[i][1]);
        cursor = nxt[cursor];
        break;
      case "B":
        if (pre[cursor] !== -1) {
          erase(cursor);
          cursor = pre[cursor];
        }
        break;
      case "L":
        if (pre[cursor] !== -1) cursor = pre[cursor];
        break;
      case "D":
        if (nxt[cursor] !== -1) cursor = nxt[cursor];
        break;
    }
  }
  console.log(dat);
  traversal();
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
)
  .trim()
  .split("\n");

const str = input[0].trim();
const m = +input[1];
let arr = [];
for (let i = 2; i < 2 + m; i++) {
  arr.push(input[i].trim().split(" "));
}

solution(str, m, arr);
