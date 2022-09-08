function solution(arr, divisor) {
  const answer = arr.filter(val => !Boolean(val % divisor));
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}