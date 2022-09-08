function solution(s) {
  const len = s.length;
  return len % 2 ? s.substr(len / 2, 1) : s.substr(len / 2 - 1, 2);
}