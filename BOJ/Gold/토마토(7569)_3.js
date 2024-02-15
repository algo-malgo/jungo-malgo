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

function solution() {
  const dx = [-1, 1, 0, 0, 0, 0];
  const dy = [0, 0, -1, 1, 0, 0];
  const dh = [0, 0, 0, 0, -1, 1];

  const needVisit = new Queue();
  const visited = Array.from({ length: h }, () =>
    Array.from({ length: n }, () => Array.from({ length: m }, () => false))
  );

  // 토마토가 익은 상태(1)인 경우 큐에 삽입 + 모든 토마토가 익었는지 체크
  let isAllRipe = true;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (board[i][j][k] === 1) {
          needVisit.enqueue([i, j, k]);
          visited[i][j][k] = true;
        } else if (isAllRipe && board[i][j][k] === 0) {
          // 익지 않은 토마토가 있으면 false로 변경
          isAllRipe = false;
        }
      }
    }
  }

  // 모든 토마토가 익은 경우 0 반환
  if (isAllRipe) return 0;

  while (!needVisit.isEmpty()) {
    const [f, x, y] = needVisit.dequeue();

    for (let i = 0; i < 6; i++) {
      const [nh, nx, ny] = [f + dh[i], x + dx[i], y + dy[i]];

      if (nh < 0 || nh >= h || nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nh][nx][ny] || board[nh][nx][ny] !== 0) continue;

      needVisit.enqueue([nh, nx, ny]);
      board[nh][nx][ny] = board[f][x][y] + 1;
      visited[nh][nx][ny] = true;
    }
  }

  let count = 0;
  let isPossible = true;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        // 익지 않은 토마토가 하나라도 있는 경우
        if (board[i][j][k] === 0) {
          isPossible = false;
          break;
        }
        if (count < board[i][j][k]) {
          count = board[i][j][k];
        }
      }
    }
  }

  return isPossible ? count - 1 : -1;
}

const [[m, n, h], ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

// 3차원 배열
const board = [];
for (let i = 0; i < n * h; i += n) {
  board.push(input.slice(i, i + n));
}

console.log(solution());
