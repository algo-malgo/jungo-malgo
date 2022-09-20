function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n / 2; i++) 
      for (let j = i + 1; j <= n / 2 + 1; j++) {
          const val = (i + j) * (j - i + 1) / 2;
          if (val === n) {
              answer += 1;  
              break;
          } else if (val >= n) break;
      }
  return answer;
}