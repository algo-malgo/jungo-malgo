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

function solution(w, h, board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  const fireVisit = Array.from({ length: h }, () => Array(w).fill(0));
  const fireNeedVisit = new Queue();
  const personVisit = Array.from({ length: h }, () => Array(w).fill(0));
  const personNeedVisit = new Queue();

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === "*") {
        fireVisit[i][j] = 1;
        fireNeedVisit.enqueue([i, j]);
      } else if (board[i][j] === "@") {
        personVisit[i][j] = 1;
        personNeedVisit.enqueue([i, j]);
      }
    }
  }

  while (!fireNeedVisit.isEmpty()) {
    const [x, y] = fireNeedVisit.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
      if (board[nx][ny] === "#") continue;
      if (fireVisit[nx][ny] !== 0) continue;

      fireNeedVisit.enqueue([nx, ny]);
      fireVisit[nx][ny] = fireVisit[x][y] + 1;
    }
  }

  while (!personNeedVisit.isEmpty()) {
    const [x, y] = personNeedVisit.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= h || ny >= w) return personVisit[x][y];

      if (board[nx][ny] === "#") continue;
      if (personVisit[nx][ny] !== 0) continue;
      if (fireVisit[nx][ny] !== 0 && fireVisit[nx][ny] <= personVisit[x][y] + 1)
        continue;

      personNeedVisit.enqueue([nx, ny]);
      personVisit[nx][ny] = personVisit[x][y] + 1;
    }
  }

  return "IMPOSSIBLE";
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...tc] = input;
for (let i = 0; i < tc.length; ) {
  const [w, h] = tc[i].split(" ").map(Number);
  const board = [];

  for (let j = i + 1; j <= i + h; j++) {
    board.push(tc[j].split(""));
  }

  console.log(solution(w, h, board));
  i += h + 1;
}
