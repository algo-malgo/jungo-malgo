function solution(s) {
  let answer = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (!i || s[i - 1] === " ") answer += s[i].toUpperCase();
    else answer += s[i];
  }
  return answer;
}
