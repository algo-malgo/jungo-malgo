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
  let count = 0;
  let maxArea = 0;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const needVisit = new Queue();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] && !visited[i][j]) {
        let area = 1;
        count += 1;

        needVisit.enqueue([i, j]);
        visited[i][j] = true;

        while (!needVisit.isEmpty()) {
          const [x, y] = needVisit.dequeue();

          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [x + dx[k], y + dy[k]];

            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (!board[nx][ny] || visited[nx][ny]) continue;

            needVisit.enqueue([nx, ny]);
            visited[nx][ny] = true;
            area += 1;
          }
        }

        if (maxArea < area) {
          maxArea = area;
        }
      }
    }
  }

  console.log(count);
  console.log(maxArea);
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));
const [[n, m], ...board] = input;
solution(n, m, board);
