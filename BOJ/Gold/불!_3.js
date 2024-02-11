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

function solution(r, c, board) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const fireBoard = board.map((line) => [...line]);
  const fireNeedVisit = new Queue();
  const personNeedVisit = new Queue();

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === "F") {
        fireNeedVisit.enqueue([i, j]);
        fireBoard[i][j] = 1;
      } else if (personNeedVisit.isEmpty() && board[i][j] === "J") {
        personNeedVisit.enqueue([i, j]);
        board[i][j] = 1;
      }
    }
  }

  while (!fireNeedVisit.isEmpty()) {
    const [x, y] = fireNeedVisit.dequeue();

    for (i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
      if (fireBoard[nx][ny] !== "." && fireBoard[nx][ny] !== "J") continue;

      fireNeedVisit.enqueue([nx, ny]);
      fireBoard[nx][ny] = fireBoard[x][y] + 1;
    }
  }

  let isPossible = false;
  let count = 0;

  while (!personNeedVisit.isEmpty() && !isPossible) {
    const [x, y] = personNeedVisit.dequeue();

    for (i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= r || ny < 0 || ny >= c) {
        isPossible = true;
        count = board[x][y];
        break;
      }
      if (board[nx][ny] !== "." || board[x][y] + 1 >= fireBoard[nx][ny])
        continue;

      personNeedVisit.enqueue([nx, ny]);
      board[nx][ny] = board[x][y] + 1;
    }
  }

  return isPossible ? count : "IMPOSSIBLE";
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
const [r, c] = input[0].split(" ");
const board = input.slice(1).map((line) => line.split(""));
console.log(solution(+r, +c, board));
