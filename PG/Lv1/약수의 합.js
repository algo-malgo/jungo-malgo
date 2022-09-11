function solution(n) {
  let answer = 0;
  let i;
  for (i = 1; i <= n ** 0.5; i++) 
      if (n % i === 0) answer += (i + n / i);
  if (i === n ** 0.5 + 1) answer -= n ** 0.5;
  return answer;
}