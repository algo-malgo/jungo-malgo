function solution(a, b) {
  let answer = 0;
  
  for (let n = Math.min(a, b); n <= Math.max(a, b); n++)
      answer += n

  return answer;
}