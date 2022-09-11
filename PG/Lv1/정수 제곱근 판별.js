function solution(n) {
  return Number.isInteger(n ** 0.5) ? (n ** 0.5 + 1) ** 2 : -1;
}