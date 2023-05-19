function solution(m, n, board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  const needVisit = [];
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  let area = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] === 0 && board[i][j] === 1) {
        area += 1;

        needVisit.push([i, j]);
        visited[i][j] = 1;

        while (needVisit.length) {
          const [x, y] = needVisit.shift();

          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (visited[nx][ny] === 1 || board[nx][ny] === 0) continue;

            needVisit.push([nx, ny]);
            visited[nx][ny] = 1;
          }
        }
      }
    }
  }

  console.log(area);
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

let idx = 1;
for (let i = 0; i < input[0][0]; i++) {
  const [m, n, k] = input[idx];
  const board = Array.from({ length: n }, () => Array(m).fill(0));
  for (let j = idx + 1; j < idx + 1 + k; j++) {
    const [y, x] = input[j];
    board[x][y] = 1;
  }
  solution(m, n, board);
  idx += k + 1;
}
