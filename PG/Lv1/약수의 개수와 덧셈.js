function solution(left, right) {
  let answer = 0;
  for (let n = left; n <= right; n++) 
      answer += Number.isInteger(n ** 0.5) ? -n : n;
  return answer;
}