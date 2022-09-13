function solution(n) {
  let answer;
  for (answer = 2; answer < n; answer++) 
      if (n % answer === 1) return answer;
}