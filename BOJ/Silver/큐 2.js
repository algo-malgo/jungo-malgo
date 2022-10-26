class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  push(value) {
    this.queue[this.tail++] = value;
  }

  pop() {
    if (this.empty()) return -1;
    const value = this.queue[this.head];
    delete this.queue[this.head];
    this.head += 1;
    return value;
  }

  front () {
    if (this.empty()) return -1;
    return this.queue[this.head];
  }

  back() {
    if (this.empty()) return -1;
    return this.queue[this.tail - 1];
  }

  size() {
    return this.tail - this.head;
  }

  empty() {
    return this.tail - this.head ? 0 : 1;
  }
}

function solution(n, arr) {
  let answer = "";
  const queue = new Queue();

  for (let i = 0; i < n; i++) {
    switch (arr[i][0]) {
      case "push":
        queue.push(arr[i][1]);
        break;
      case "pop":
        answer += queue.pop() + "\n";
        break;
      case "front":
        answer += queue.front() + "\n";
        break;
      case "back":
        answer += queue.back() + "\n";
        break;
      case "size":
        answer += queue.size() + "\n";
        break;
      case "empty":
        answer += queue.empty() + "\n";
        break;
    }
  }

  console.log(answer);
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
)
  .trim()
  .split("\n");

const n = +input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].trim().split(" "));
}

solution(n, arr);
