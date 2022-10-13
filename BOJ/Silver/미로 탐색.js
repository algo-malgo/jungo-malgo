const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const [n, m] = input[0].split(' ');
let arr = [];
for (let i = 1; i <= n; i++) 
  arr.push(input[i].split('').map((item) => +item));

solution(n, m, arr);

function solution(n, m, arr) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  
  let needVisit = [];
  needVisit.push([0, 0]);

  while (needVisit.length > 0) {
    const [x, y] = needVisit.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (arr[nx][ny] !== 1) continue;

      arr[nx][ny] = arr[x][y] + 1;
      needVisit.push([nx, ny]);
    }
  }

  console.log(arr[n - 1][m - 1]);
}

