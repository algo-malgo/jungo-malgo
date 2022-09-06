function solution(n, lost, reserve) {
  const newLost = lost.filter(l => !reserve.includes(l));
  const newReserve = reserve.filter(r => !lost.includes(r));
  let answer = n - newLost.length;
  
  newLost.sort((a, b) => a - b);
  newReserve.sort((a, b) => a - b);
  
  for (let r of newReserve) {
      let idx = -1;
      for (let i = 0; i < newLost.length; i++)
          if (Math.abs(r - newLost[i]) <= 1) {
              idx = i
              break;
          }
      if (idx !== -1) {
          newLost.splice(idx, 1);
          answer += 1;
      }
  }
  
  return answer;
}