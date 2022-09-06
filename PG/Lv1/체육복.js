function solution(n, lost, reserve) {
  let answer = n - lost.length;
  reserve.sort((a, b) => a - b);
  lost.sort((a, b) => a - b);

  const tmp = [...reserve]
  for (let i = 0; i < tmp.length; i++) {
      const idx = lost.indexOf(tmp[i]);
      if (idx !== -1) {
          lost.splice(idx, 1);
          reserve.splice(reserve.indexOf(tmp[i]), 1);
          answer += 1;
      }
  }
  
  for (let i = 0; i < reserve.length; i++) {
      let idx = -1;
      for (let j = 0; j < lost.length; j++)
          if (Math.abs(reserve[i] - lost[j]) <= 1) {
              idx = j
              break;
          }
      if (idx !== -1) {
          lost.splice(idx, 1);
          answer += 1;
      }
  }
  
  return answer;
}