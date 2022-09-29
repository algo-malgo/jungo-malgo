function solution(s) {
  let count = 0, turn = 0;
  while (s !== '1') {
      const len = s.length;
      const n = s.split('').reduce((acc, cur) => acc += cur === '0' ? 1 : 0, 0)
      count += n;
      s = (len - n).toString(2);
      turn += 1;
  }
  return [turn, count];
}