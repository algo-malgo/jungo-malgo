class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front++];
    return value;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(m, n, h, board) {
  const dz = [-1, 1, 0, 0, 0, 0];
  const dx = [0, 0, -1, 0, 1, 0];
  const dy = [0, 0, 0, -1, 0, 1];

  const needVisit = new Queue();
  const visited = Array.from({ length: h }, () =>
    Array.from({ length: n }, () => Array(m).fill(false))
  );

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (board[i][j][k] === 1) {
          needVisit.enqueue([i, j, k]);
        }
      }
    }
  }

  while (!needVisit.isEmpty()) {
    const [z, x, y] = needVisit.dequeue();
    visited[z][x][y] = true;

    for (let i = 0; i < 6; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nz = z + dz[i];

      if (nx < 0 || ny < 0 || nz < 0 || nx >= n || ny >= m || nz >= h) continue;
      if (visited[nz][nx][ny]) continue;
      if (board[nz][nx][ny] !== 0) continue;

      visited[nz][nx][ny] = true;
      needVisit.enqueue([nz, nx, ny]);
      board[nz][nx][ny] = board[z][x][y] + 1;
    }
  }

  const flat = board.flat(3);
  if (flat.includes(0)) return -1;
  return Math.max(...flat) - 1;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

const [m, n, h] = input.shift();
const board = Array.from({ length: h }, () => []);
for (let i = 0; i < input.length; i++) {
  board[parseInt(i / n, 10)].push(input[i]);
}

console.log(solution(m, n, h, board));
