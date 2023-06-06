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

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let visited;

function solution(n, m, board) {
  let answer = 0;

  while (true) {
    let cnt = 0;
    visited = Array.from({ length: n }, () => Array(m).fill(false));

    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < m - 1; j++) {
        if (!board[i][j] || visited[i][j]) continue;

        cnt += 1;
        bfs(i, j);
      }
    }

    if (cnt === 0) return 0;
    else if (cnt >= 2) return answer;

    const copy = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < m - 1; j++) {
        if (!board[i][j]) continue;

        copy[i][j] = Math.max(board[i][j] - countZero(i, j), 0);
      }
    }

    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < m - 1; j++) {
        board[i][j] = copy[i][j];
      }
    }

    answer += 1;
  }
}

function bfs(i, j) {
  const needVisit = new Queue();
  needVisit.enqueue([i, j]);
  visited[i][j] = true;

  while (!needVisit.isEmpty()) {
    const [x, y] = needVisit.dequeue();

    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];

      if (!board[nx][ny] || visited[nx][ny]) continue;

      needVisit.enqueue([nx, ny]);
      visited[nx][ny] = true;
    }
  }
}

function countZero(x, y) {
  let cnt = 0;

  for (i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (board[nx][ny] === 0) cnt += 1;
  }

  return cnt;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const [[n, m], ...board] = input;
console.log(solution(n, m, board));
