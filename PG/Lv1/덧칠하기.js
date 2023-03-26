function solution(n, m, section) {
  let answer = 0;
  let point = 0;
  for (let i = 0; i < section.length; i++) {
    if (section[i] > point) {
      point = section[i] + m - 1;
      answer += 1;
    }
  }
  return answer;
}
