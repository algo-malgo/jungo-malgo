function solution(dartResult) {
  let answer = [];
  const pow = {'S': 1, 'D': 2, 'T': 3};
  const opt = dartResult.replace(/[\d]/g, '').split('');
  const num = dartResult.replace(/[^\d]/g, '').replace(/10/g, '@').split('');
  let round = -1;
  for (let i = 0; i < opt.length; i++) 
      if (/\w/.test(opt[i])) {
          round += 1;
          answer[round] = (num[round] === '@' ? 10 : num[round]) ** pow[opt[i]]
      } else 
          if (opt[i] === '*') {
              answer[round] *= 2;
              if (round) answer[round - 1] *= 2;  
          } else answer[round] *= -1; 
  return answer.reduce((acc, cur) => acc + cur, 0);
}