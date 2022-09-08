function solution(strings, n) {
  strings.sort();
  return strings.sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}