function solution(n, board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  let area = 0;

  const needVisit = [];
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        needVisit.push([i, j]);
        visited[i][j] = true;

        while (needVisit.length > 0) {
          const [x, y] = needVisit.shift();

          for (let k = 0; k < 4; k++) {
            const nx = dx[k] + x;
            const ny = dy[k] + y;

            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if (visited[nx][ny]) continue;

            if (board[x][y] === board[nx][ny]) {
              needVisit.push([nx, ny]);
              visited[nx][ny] = true;
            }
          }
        }
        area += 1;
      }
    }
  }
  return area;
}

const board = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item, i) => (i ? item.split("") : item));

const n = Number(board.shift());
const result1 = solution(n, board);

const board2 = board.map((row) =>
  row.map((color) => (color === "G" ? "R" : color))
);
const result2 = solution(n, board2);

console.log(result1, result2);
