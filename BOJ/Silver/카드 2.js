class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.queue[this.tail++] = value;
  }

  dequeue() {
    const value = this.queue[this.head];
    delete this.queue[this.head];
    this.head += 1;
    return value;
  }

  size() {
    return this.tail - this.head;
  }
}

function solution(n) {
  const queue = new Queue();
  for (let i = 1; i <= n; i++) queue.enqueue(i);

  while (queue.size() !== 1) {
    queue.dequeue();
    queue.size() !== 1 && queue.enqueue(queue.dequeue());
  }
  console.log(queue.dequeue());
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
).trim();

solution(+input);
