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

  let needVisit = new Queue();
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (arr[i][j] === 1) needVisit.push([i, j]);

  let days = 0;
  while (needVisit.size > 0) {
    const [x, y] = needVisit.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (arr[nx][ny] !== 0) continue;

      arr[nx][ny] = arr[x][y] + 1;
      days = arr[nx][ny] - 1;
      needVisit.push([nx, ny]);
    }
  }

  for (let i = 0; i < n; i++)
    if (arr[i].includes(0)) {
      days = -1;
      break;
    }

  console.log(days);
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [m, n] = input[0].split(" ");
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(" ").map((item) => +item));

solution(n, m, arr);