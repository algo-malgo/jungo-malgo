function solution(s) {
  const start = Math.ceil(s.length / 2) - 1;
  return s.substring(start, s.length % 2 ? start + 1 : start + 2);
}