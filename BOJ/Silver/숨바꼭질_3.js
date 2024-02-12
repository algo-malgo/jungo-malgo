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

function solution(n, k) {
  const dx = [-1, 1, 2];

  const needVisit = new Queue();
  needVisit.enqueue(n);
  const visited = Array.from({ length: 100001 }, () => 0);

  while (!needVisit.isEmpty()) {
    const x = needVisit.dequeue();
    if (x === k) break;

    for (let i = 0; i < 3; i++) {
      let nx = i === 2 ? x * dx[i] : x + dx[i];

      if (nx < 0 || nx > 100000) continue;
      if (visited[nx]) continue;

      needVisit.enqueue(nx);
      visited[nx] = visited[x] + 1;
    }
  }

  return visited[k];
}

const [n, k] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");
console.log(solution(+n, +k));
