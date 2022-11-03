function solution(n) {
  const isUsed1 = Array.from({ length: n }, () => 0); // 열 체크 (y)
  const isUsed2 = Array.from({ length: 2 * n - 1 }, () => 0); // 대각선 체크 (x - y + n - 1)
  const isUsed3 = Array.from({ length: 2 * n - 1 }, () => 0); // 역대각선 체크 (x + y)
  
  function counter(x) {
      if (x === n) return 1;
      
      let answer = 0;
      for (let y = 0; y < n; y++) {
          if (!isUsed1[y] && !isUsed2[x - y + n - 1] && !isUsed3[x + y]) {
              isUsed1[y] = 1;
              isUsed2[x - y + n - 1] = 1;
              isUsed3[x + y] = 1;

              answer += counter(x + 1);

              isUsed1[y] = 0;
              isUsed2[x - y + n - 1] = 0;
              isUsed3[x + y] = 0;
          }
      }
      return answer;
  }
  
  return counter(0);
}