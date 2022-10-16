let dat = [0],
  pre = [0],
  nxt = [0];
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

function traversal(n) {
  let list = "";
  let cur = nxt[0];
  while (n--) {
    list += dat[cur];
    cur = nxt[cur];
  }
  console.log(list);
}

function solution(n, k) {
  let answer = [];

  let cursor = 0;
  for (let i = 1; i <= n; i++) {
    insert(cursor, i);
    cursor++;
  }

  cursor = k;
  for (let i = 0; i < n; i++) {
    answer.push(dat[cursor]);
    erase(cursor);
    cursor = pre[cursor];

    for (let j = 0; j < k; j++) {
      if (!nxt[cursor] && !pre[cursor]) break;
      else if (!nxt[cursor]) j--;
      cursor = nxt[cursor];
    }
  }

  return "<" + answer.join(", ") + ">";
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
).trim();

const [n, k] = input.split(" ").map((item) => +item);
console.log(solution(n, k));
