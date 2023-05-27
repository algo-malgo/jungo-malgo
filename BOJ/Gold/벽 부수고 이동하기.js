class Node {
  constructor(x, y, cnt, isBreak) {
    this.x = x;
    this.y = y;
    this.cnt = cnt;
    this.isBreak = isBreak;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(...value);
    if (this.isEmpty()) this.front = node;
    else this.rear.next = node;
    this.rear = node;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const value = this.front;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    return value;
  }

  isEmpty() {
    return this.front === null && this.rear === null;
  }
}

function solution(n, m, board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  const needVisit = new Queue();
  needVisit.enqueue([0, 0, 1, 0]); // x, y, cnt, isBreak

  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array.from({ length: 2 }, () => 0))
  );

  let answer = -1;
  while (!needVisit.isEmpty()) {
    const cur = needVisit.dequeue();
    const [x, y, cnt, isBreak] = [cur.x, cur.y, cur.cnt, cur.isBreak];

    if (x === n - 1 && y === m - 1) {
      answer = cnt;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (visited[nx][ny][isBreak]) continue;
      let nIsBreak = isBreak;
      if (board[nx][ny] === 1) {
        if (nIsBreak === 0) nIsBreak = 1;
        else continue; // 벽을 한 번 부순 상태인데 또 벽을 맞닥뜨렸으므로 부수지 못하고 돌아감
      }

      visited[nx][ny][isBreak] = 1;
      needVisit.enqueue([nx, ny, cnt + 1, nIsBreak]);
    }
  }
  return answer;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row, i) => row.split(i ? "" : " ").map(Number));

const [[n, m], ...board] = input;
console.log(solution(n, m, board));

/*
visited 배열을 3차원으로 구성해야 하는 이유
https://velog.io/@ich0906/%EB%B0%B1%EC%A4%80-2206-%EB%B2%BD-%EB%B6%80%EC%88%98%EA%B3%A0-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0
*/
