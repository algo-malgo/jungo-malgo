function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    answer += 1;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return answer;
}
