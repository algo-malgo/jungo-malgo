function solution(n) {
  const cnt = n.toString(2).split('').reduce((acc, cur) => acc += cur === '1' ? 1 : 0, 0);

  while (true) {
      const tmp = (++n).toString(2).split('').reduce((acc, cur) => acc += cur === '1' ? 1 : 0, 0);
      if (cnt === tmp) break;
  }
  
  return n;
}