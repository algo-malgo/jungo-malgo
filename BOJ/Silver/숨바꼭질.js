class Queue {
  constructor() {
    this._size = 0;
    this.head;
    this.tail;
  }
  get size() {
    return this._size;
  }
  push = (value) => {
    const node = { value };
    if (this._size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this._size++;
  };
  shift = () => {
    if (this._size === 0) return;
    const result = this.head.value;
    if (this.head.value === this.tail.value) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head.next;
    }
    this._size--;
    return result;
  };
}

function solution(n, k) {
  if (n === k) return 0;

  const dx = [1, -1, 2];
  let arr = Array.from({ length: 200000 }, () => -1);
  let needVisit = new Queue();

  arr[n] = 0;
  needVisit.push(n);

  while (needVisit.size > 0) {
    const x = needVisit.shift();

    for (let i = 0; i < 3; i++) {
      const nx = i === 2 ? x * dx[i] : x + dx[i];

      if (nx < 0 || nx >= 200000) continue;
      if (arr[nx] !== -1) continue;

      arr[nx] = arr[x] + 1;
      if (nx === k) return arr[nx];

      needVisit.push(nx);
    }
  }
}

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map((item) => +item);

console.log(solution(n, k));
