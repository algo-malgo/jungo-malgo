function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
      const receive = Math.floor(n / a) * b; 
      const give = Math.floor(n / a) * a; 
      n = n - give + receive; 
      answer += receive;
  }
  return answer;
}