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
  const needVisit = new Queue();
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let hasZero = false; // 모든 토마토가 이미 익어있는지 확인

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        needVisit.enqueue([i, j]);
        visited[i][j] = true;
      } else if (!hasZero && board[i][j] === 0) {
        hasZero = true;
      }
    }
  }

  if (!hasZero) return 0;

  while (!needVisit.isEmpty()) {
    const [x, y] = needVisit.dequeue();

    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny] || board[nx][ny] !== 0) continue;

      needVisit.enqueue([nx, ny]);
      visited[nx][ny] = true;
      board[nx][ny] = board[x][y] + 1;
    }
  }

  let isPossible = true; // 토마토가 모두 익을 수 있는지 확인
  let date = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) {
        isPossible = false;
        break;
      }
      if (board[i][j] > date) {
        date = board[i][j];
      }
    }
  }

  return isPossible ? date - 1 : -1;
}

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));
const [[m, n], ...board] = input;

console.log(solution(m, n, board));
