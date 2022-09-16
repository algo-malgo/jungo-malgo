function solution(s) {
  const num = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
  const word = Object.keys(num);
  for (let i = 0; i < word.length && Number.isNaN(+s); i++) 
      while (s.indexOf(word[i]) !== -1) 
          s = s.replace(word[i], num[word[i]]);
  return +s;
}