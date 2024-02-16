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

function solution(l, current, dest) {
  const dx = [-2, -2, -1, -1, 2, 2, 1, 1];
  const dy = [-1, 1, -2, 2, -1, 1, -2, 2];

  const needVisit = new Queue();
  needVisit.enqueue(current);
  const visited = Array.from({ length: l }, () =>
    Array.from({ length: l }, () => 0)
  );
  visited[current[0]][current[1]] = 1;

  while (!needVisit.isEmpty() && visited[dest[0]][dest[1]] === 0) {
    const [x, y] = needVisit.dequeue();

    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
      if (visited[nx][ny] !== 0) continue;

      needVisit.enqueue([nx, ny]);
      visited[nx][ny] = visited[x][y] + 1;
    }
  }

  return visited[dest[0]][dest[1]] - 1;
}

const [[t], ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

for (let i = 0; i < t; i++) {
  const [[l], current, dest] = input.slice(i * 3, i * 3 + 3);
  console.log(solution(l, current, dest));
}
