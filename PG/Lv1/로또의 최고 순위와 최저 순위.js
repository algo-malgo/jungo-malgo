function solution(lottos, win_nums) {
  let answer = 0, zero = 0;
  for (let i = 0; i < lottos.length; i++) {
      if (lottos[i] === 0) zero += 1;
      else if (win_nums.includes(lottos[i])) answer += 1;
  }
  
  if (answer === 0 && zero === 0) 
      return [6, 6];
  return [7 - (answer + zero), zero === 6 ? 6 : 7 - answer];
}