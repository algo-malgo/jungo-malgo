function solution(maps) {
  const needVisit = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
    
  needVisit.push([0, 0]);
  while (needVisit.length > 0) {
    const [x, y] = needVisit.shift();
      
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
        
      if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length) continue;
      if (maps[nx][ny] !== 1) continue;
        
      maps[nx][ny] = maps[x][y] + 1;
      needVisit.push([nx, ny]);
    }
  }
    
  const answer = maps[maps.length - 1][maps[0].length - 1];
  return answer > 1 ? answer : -1;
}