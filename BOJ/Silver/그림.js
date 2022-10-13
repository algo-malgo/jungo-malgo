const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const [n, m] = input[0].split(' ');
let arr = [];
for (let i = 1; i <= n; i++) 
  arr.push(input[i].split(' ').map((item) => +item));

solution(n, m, arr);

function solution(n, m, arr) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  
  let visited = Array.from({length: n}, () => Array.from({length: m}, () => 0));
  let needVisit = [];

  let cnt = 0, maxArea = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1 && !visited[i][j]) {
        cnt += 1;
        let area = 1;

        needVisit.push([i, j]);
        visited[i][j] = 1;

        while (needVisit.length > 0) {
          const [x, y] = needVisit.shift();
      
          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
      
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            if (arr[nx][ny] !== 1 || visited[nx][ny]) continue;
      
            area += 1;
            needVisit.push([nx, ny]);
            visited[nx][ny] = 1;
          }
        }

        if (area > maxArea) maxArea = area;
      }
    }
  }

  console.log(cnt);
  console.log(maxArea);
}

