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

function solution(m, n, board) {
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  const needVisit = new Queue();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        needVisit.enqueue([i, j]);
      }
    }
  }

  while (!needVisit.isEmpty()) {
    const [x, y] = needVisit.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (board[nx][ny] !== 0) continue;

      needVisit.enqueue([nx, ny]);
      board[nx][ny] = board[x][y] + 1;
    }
  }

  let day = 0;
  for (const row of board) {
    if (row.includes(0)) {
      day = -1;
      break;
    }
    const rowMax = Math.max(...row);
    if (rowMax > day) {
      day = rowMax - 1;
    }
  }

  console.log(day);
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));
const [[m, n], ...board] = input;
solution(m, n, board);
