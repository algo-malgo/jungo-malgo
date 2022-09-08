function solution(s) {
  const arr = Array.from(s);
  arr.sort();
  arr.reverse();
  return arr.join('');
}