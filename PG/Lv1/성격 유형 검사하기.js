function solution(survey, choices) {
  let answer = '';
  let score = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0};
  for (let i = 0; i < survey.length; i++) {
      const [t1, t2] = survey[i].split('');
      if (choices[i] > 4) 
          score[t2] += choices[i] % 4;
      else 
          score[t1] += 4 - choices[i];
  }

  const val = Object.keys(score);
  for (let i = 0; i < 8; i += 2)
      answer += score[val[i]] >= score[val[i + 1]] ? val[i] : val[i + 1]
  return answer;
}