function solution(n) {
  let answer = 0;
  
  for (let i = 2; i <= n; i++) {
      let prime = 1;
      for (let j = 2; j <= i ** 0.5; j++) 
          if (i % j === 0) {
              prime = 0;
              break;
          }
      if (prime) answer += 1;
  }
  
  return answer;
}