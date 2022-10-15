class Queue {
  constructor() {
    this._size = 0;
    this.head;
    this.tail;
  }
  get size() {
    return this._size;
  }
  push = (value) => {
    const node = { value };
    if (this._size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this._size++;
  };
  shift = () => {
    if (this._size === 0) return;
    const result = this.head.value;
    if (this.head.value === this.tail.value) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head.next;
    }
    this._size--;
    return result;
  };
}

function solution(n, m, arr) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let fire = JSON.parse(JSON.stringify(arr));
  let fireVisit = new Queue();
  let needVisit = new Queue();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === "F") {
        fire[i][j] = 0;
        fireVisit.push([i, j]);
      } else if (arr[i][j] === "J") {
        arr[i][j] = 0;
        needVisit.push([i, j]);
      }
    }
  }

  while (fireVisit.size > 0) {
    const [x, y] = fireVisit.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (fire[nx][ny] === "#" || fire[nx][ny] >= 0) continue;

      fire[nx][ny] = fire[x][y] + 1;
      fireVisit.push([nx, ny]);
    }
  }

  while (needVisit.size > 0) {
    const [x, y] = needVisit.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) return arr[x][y] + 1;
      if (arr[nx][ny] === "#" || arr[nx][ny] >= 0) continue;

      arr[nx][ny] = arr[x][y] + 1;
      if (arr[nx][ny] < fire[nx][ny] || fire[nx][ny] === ".") {
        needVisit.push([nx, ny]);
      }
    }
  }

  return "IMPOSSIBLE";
}

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ");
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(""));

console.log(solution(n, m, arr));