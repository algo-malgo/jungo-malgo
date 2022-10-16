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

function solution(n, arr) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let visited1 = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  let visited2 = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  let needVisit1 = new Queue();
  let needVisit2 = new Queue();

  let area1 = 0,
    area2 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited1[i][j]) {
        area1 += 1;

        needVisit1.push([i, j]);
        visited1[i][j] = 1;

        while (needVisit1.size > 0) {
          const [x, y] = needVisit1.shift();
          let color = arr[x][y];

          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if (arr[nx][ny] !== color || visited1[nx][ny]) continue;

            needVisit1.push([nx, ny]);
            visited1[nx][ny] = 1;
          }
        }
      }
      if (!visited2[i][j]) {
        area2 += 1;

        needVisit2.push([i, j]);
        visited2[i][j] = 1;

        while (needVisit2.size > 0) {
          const [x, y] = needVisit2.shift();
          color = arr[x][y] === 'G' ? 'R' : arr[x][y];

          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

            let tmp = arr[nx][ny] === 'G' ? 'R' : arr[nx][ny];
            if (tmp !== color || visited2[nx][ny]) continue;

            needVisit2.push([nx, ny]);
            visited2[nx][ny] = 1;
          }
        }
      }
    }
  }

  console.log(area1, area2);
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
)
  .trim()
  .split("\n");

const n = +input[0].trim();
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].trim());

solution(n, arr);
