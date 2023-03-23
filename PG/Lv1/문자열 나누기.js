function solution(s) {
  let answer = 0;
  let x = '';
  let xCount = 0;
  
  for (let i = 0; i < s.length; i++) {
      if (x === '') {
          x = s[i];
          xCount += 1;
      } else {
          xCount += s[i] === x ? 1 : -1;
          if (xCount === 0) {
              answer += 1;
              x = '';
          }
      }
  }
  if (x !== '') {
      answer += 1;
  }
  
  return answer;
}