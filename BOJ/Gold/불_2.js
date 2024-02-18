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

function fireBfs(w, h, board) {
  const needVisit = new Queue();
  const visited = Array.from({ length: h }, () => Array(w).fill(0));

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === "*") {
        needVisit.enqueue([i, j]);
        visited[i][j] = 1;
      }
    }
  }

  while (!needVisit.isEmpty()) {
    const [x, y] = needVisit.dequeue();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= h || ny < 0 || ny >= w) continue;
      if (visited[nx][ny] || board[nx][ny] === "#") continue;

      needVisit.enqueue([nx, ny]);
      visited[nx][ny] = visited[x][y] + 1;
    }
  }

  return visited;
}

function solution(w, h, board) {
  const fireVisited = fireBfs(w, h, board);

  const needVisit = new Queue();
  const visited = Array.from({ length: h }, () => Array(w).fill(0));

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === "@") {
        needVisit.enqueue([i, j]);
        visited[i][j] = 1;
        break;
      }
    }
  }

  while (!needVisit.isEmpty()) {
    const [x, y] = needVisit.dequeue();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= h || ny < 0 || ny >= w) return visited[x][y];
      if (visited[nx][ny] || board[nx][ny] !== ".") continue;
      if (fireVisited[nx][ny] && visited[x][y] + 1 >= fireVisited[nx][ny])
        continue;

      needVisit.enqueue([nx, ny]);
      visited[nx][ny] = visited[x][y] + 1;
    }
  }

  return "IMPOSSIBLE";
}

const [t, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let index = 0;
for (let _ = 0; _ < +t; _++) {
  const [w, h] = input[index++].split(" ").map(Number);
  const board = input.slice(index, index + h).map((line) => line.split(""));
  console.log(solution(w, h, board));
  index += h;
}
