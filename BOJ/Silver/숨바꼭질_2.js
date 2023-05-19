function solution(n, k) {
  if (n === k) return 0;

  const dx = [-1, 1, 2];
  const needVisit = [n];
  const visited = Array.from({ length: 100001 }, () => 0);

  while (needVisit.length) {
    const x = needVisit.shift();

    for (let i = 0; i < 3; i++) {
      const nx = i === 2 ? x * dx[i] : x + dx[i];

      if (nx < 0 || nx > 100000) continue;
      if (visited[nx] !== 0 || nx === n) continue;

      visited[nx] = visited[x] + 1;
      if (nx === k) return visited[nx];
      needVisit.push(nx);
    }
  }
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [n, k] = input;
console.log(solution(n, k));
