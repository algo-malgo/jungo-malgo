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

function solution(n, m, h, arr) {
  const dx = [0, 1, 0, -1, 0, 0];
  const dy = [1, 0, -1, 0, 0, 0];
  const dz = [0, 0, 0, 0, 1, -1];

  let needVisit = new Queue();
  for (let i = 0; i < h; i++)
    for (let j = 0; j < n; j++)
      for (let k = 0; k < m; k++) {
        if (arr[i][j][k] === 1) needVisit.push([i, j, k]);
      }

  let days = 0;
  while (needVisit.size > 0) {
    const [z, x, y] = needVisit.shift();

    for (let i = 0; i < 6; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nz = z + dz[i];

      if (nx < 0 || ny < 0 || nz < 0 || nx >= n || ny >= m || nz >= h) continue;
      if (arr[nz][nx][ny] !== 0) continue;

      arr[nz][nx][ny] = arr[z][x][y] + 1;
      days = arr[nz][nx][ny] - 1;
      needVisit.push([nz, nx, ny]);
    }
  }

  for (let i = 0; i < h; i++)
    for (let j = 0; j < n; j++)
      if (arr[i][j].includes(0)) {
        days = -1;
        break;
      }

  console.log(days);
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [m, n, h] = input[0].split(" ");
let arr = [], tmp = [];
for (let i = 1; i <= n * h; i++) {
  tmp.push(input[i].split(" ").map((item) => +item));
  if (i % n === 0) {
    arr.push(tmp);
    tmp = [];
  }
}

solution(n, m, h, arr);