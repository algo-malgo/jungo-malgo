function solution(s) {
  let min = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
      let tmp = s.slice(0, i);
      let answer = '';
      let count = 1;
      for (let j = i; j < s.length; j += i) {
          let now = s.slice(j, j + i);
          if (tmp === now) count += 1;
          else {
              answer += count !== 1 ? count + tmp : tmp;
              count = 1;
              tmp = now;
          }
      }
      answer += count !== 1 ? count + tmp : tmp;
      if (answer.length < min) min = answer.length;
  }
  return min;
}