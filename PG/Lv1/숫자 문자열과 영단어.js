function solution(s) {
  const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i = 0; i < num.length && Number.isNaN(+s); i++) 
      while (s.indexOf(num[i]) !== -1) 
          s = s.replace(num[i], i);
  return +s;
}