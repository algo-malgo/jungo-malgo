class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.front++] = value;
  }

  dequeue() {
    const value = this.queue[this.rear];
    delete this.queue[this.rear++];
    return value;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(m, n, board) {
  const needVisit = new Queue();
  const visited = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => false)
  );

  let count = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1 && !visited[i][j]) {
        count += 1;
        needVisit.enqueue([i, j]);
        visited[i][j] = true;

        while (!needVisit.isEmpty()) {
          const [x, y] = needVisit.dequeue();

          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [x + dx[k], y + dy[k]];

            if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
            if (visited[nx][ny] || board[nx][ny] !== 1) continue;

            needVisit.enqueue([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
    }
  }

  return count;
}

const [[t], ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

let index = 0;
for (let i = 0; i < t; i++) {
  const [m, n, k] = input[index++];
  const board = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );
  for (let j = index; j < index + k; j++) {
    const [x, y] = input[j];
    board[x][y] = 1;
  }
  console.log(solution(m, n, board));
  index += k;
}
