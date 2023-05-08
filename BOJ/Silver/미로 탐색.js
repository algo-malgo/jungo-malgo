const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item, i) => item.split(i ? "" : " ").map(Number));
const [[n, m], ...board] = input;

solution(n, m, board);

function solution(n, m, board) {
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  const needVisit = [[0, 0]]; // Queue;

  while (needVisit.length > 0) {
    const [x, y] = needVisit.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (board[nx][ny] !== 1) continue;

      needVisit.push([nx, ny]);
      board[nx][ny] = board[x][y] + 1;
    }
  }

  console.log(board[n - 1][m - 1]);
}
