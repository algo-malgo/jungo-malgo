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
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  const fireBoard = JSON.parse(JSON.stringify(board));

  const person = new Queue();
  const fire = new Queue();

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === "J") {
        person.enqueue([i, j]);
        board[i][j] = 1;
      } else if (board[i][j] === "F") {
        fire.enqueue([i, j]);
        fireBoard[i][j] = 1;
      }
    }
  }

  while (!fire.isEmpty()) {
    const [x, y] = fire.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
      if (fireBoard[nx][ny] !== "." && fireBoard[nx][ny] !== "J") continue;

      fire.enqueue([nx, ny]);
      fireBoard[nx][ny] = fireBoard[x][y] + 1;
    }
  }

  while (!person.isEmpty()) {
    const [x, y] = person.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= r || ny >= c) return board[x][y];
      if (board[nx][ny] !== ".") continue;
      if (fireBoard[nx][ny] <= board[x][y] + 1) continue;

      person.enqueue([nx, ny]);
      board[nx][ny] = board[x][y] + 1;
    }
  }
  return "IMPOSSIBLE";
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item, i) => item.split(i ? "" : " "));
const [[r, c], ...board] = input;
console.log(solution(+r, +c, board));
