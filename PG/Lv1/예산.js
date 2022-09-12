function solution(d, budget) {
  let answer = 0;
  
  const arr = d.sort((a, b) => a - b);
  budget -= arr[answer];
  while (budget >= 0) {
      answer += 1;
      budget -= arr[answer]
  }

  return answer;
}