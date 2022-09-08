function solution(s){
  let cnt = [0, 0];
  Array.from(s.toLowerCase()).map(ch => {
      if (ch === 'p') {
          cnt[0] += 1;
      } else if (ch === 'y') {
          cnt[1] += 1;
      }
  })
  return cnt[0] === cnt[1];
}