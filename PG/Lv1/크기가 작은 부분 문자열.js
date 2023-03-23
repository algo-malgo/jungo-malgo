function solution(t, p) {
  let answer = 0;
  const len = p.length;
  for (let i = 0; i < t.length - len + 1; i++) {
      if (t.slice(i, i + len) <= p) {
          answer += 1;
      }
  }
  return answer;
}