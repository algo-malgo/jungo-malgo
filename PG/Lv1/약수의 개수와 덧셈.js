function solution(left, right) {
  let answer = 0;
  
  for (let n = left; n <= right; n++) {
      let count = 0;
      for (let i = 0; i <= n ** 0.5; i++)
          if (n % i === 0) 
              if (i === n ** 0.5) count += 1;
              else count += 2;
      answer += count % 2 ? -n : n;
  }
  
  return answer;
}