function solution(survey, choices) {
  let answer = '';
  let score = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0};
  for (let i = 0; i < survey.length; i++) {
    const [t1, t2] = survey[i];
    score[choices[i] > 4 ? t2 : t1] += Math.abs(4 - choices[i]);
}

  const t = Object.keys(score);
  for (let i = 0; i < Object.keys(score).length; i += 2)
      answer += score[t[i]] >= score[t[i + 1]] ? t[i] : t[i + 1]
  return answer;
}