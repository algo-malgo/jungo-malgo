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

function bfs(n, board) {
  let count = 0;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const needVisit = new Queue();
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        let currentColor = board[i][j];
        count += 1;

        needVisit.enqueue([i, j]);
        visited[i][j] = true;

        while (!needVisit.isEmpty()) {
          const [x, y] = needVisit.dequeue();

          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [x + dx[k], y + dy[k]];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
            if (visited[nx][ny] || board[nx][ny] !== currentColor) continue;

            needVisit.enqueue([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
    }
  }

  return count;
}

function solution(n, board) {
  console.log(bfs(n, board));

  const convertGreenToRed = board.map((line) =>
    line.map((color) => (color === "G" ? "R" : color))
  );
  console.log(bfs(n, convertGreenToRed));
}

const [n, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
const board = input.map((line) => line.split(""));
solution(n, board);
