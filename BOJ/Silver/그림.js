const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));
const [[n, m], ...board] = input;

solution(n, m, board);

function solution(n, m, board) {
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  const visited = Array.from(Array(n), () => Array(m).fill(0));
  const needVisit = []; // Queue

  let cnt = 0;
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1 && visited[i][j] === 0) {
        let area = 1;
        cnt += 1;

        needVisit.push([i, j]);
        visited[i][j] = 1;

        while (needVisit.length > 0) {
          const [x, y] = needVisit.shift();

          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            if (board[nx][ny] === 0 || visited[nx][ny] === 1) continue;

            needVisit.push([nx, ny]);
            visited[nx][ny] = 1;
            area += 1;
          }
        }

        if (area > maxArea) {
          maxArea = area;
        }
      }
    }
  }

  console.log(cnt);
  console.log(maxArea);
}
