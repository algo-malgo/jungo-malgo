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

function solution(l, start, dest) {
  if (start[0] === dest[0] && start[1] === dest[1]) return 0;

  const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
  const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

  const board = Array.from({ length: l }, () => Array(l).fill(0));
  board[start[0]][start[1]] = 1;

  const needVisit = new Queue();
  needVisit.enqueue(start);

  while (!needVisit.isEmpty()) {
    const [x, y] = needVisit.dequeue();

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= l || ny >= l) continue;
      if (board[nx][ny] !== 0) continue;
      if (nx === dest[0] && ny === dest[1]) return board[x][y];

      needVisit.enqueue([nx, ny]);
      board[nx][ny] = board[x][y] + 1;
    }
  }
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

const [[n], ...tc] = input;
for (let i = 0; i < tc.length; i += 3) {
  const [l] = tc[i];
  const start = tc[i + 1];
  const dest = tc[i + 2];

  console.log(solution(l, start, dest));
}
