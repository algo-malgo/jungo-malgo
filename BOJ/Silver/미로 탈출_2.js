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

function solution(n, m, board) {
  const queue = new Queue();

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        queue.enqueue([i, j]);

        while (!queue.isEmpty()) {
          const [x, y] = queue.dequeue();

          for (k = 0; k < 4; k++) {
            const [nx, ny] = [x + dx[k], y + dy[k]];

            if (nx < 0 || nx >= n || ny < 0 || ny >= m || board[nx][ny] !== 1)
              continue;

            queue.enqueue([nx, ny]);
            board[nx][ny] = board[x][y] + 1;
          }
        }
      }
    }
  }

  return board[n - 1][m - 1];
}

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ");
const board = input.slice(1).map((item) => item.split("").map(Number));

console.log(solution(n, m, board));
