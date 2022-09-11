function solution(n) {
  return +((n + '').split('').sort((a, b) => b - a).join(''));
}