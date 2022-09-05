function solution(answers) {
  let answer = Array.from({length: 3}, () => 0);
  const p1 = [1, 2, 3, 4, 5]
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  
  for (let i = 0; i < answers.length; i++) {
      if (answers[i] === p1[i % p1.length]) answer[0]++;
      if (answers[i] === p2[i % p2.length]) answer[1]++;
      if (answers[i] === p3[i % p3.length]) answer[2]++;
  }
  
  let result = [];
  const max_val = Math.max(...answer);
  answer.map((cnt, index) => cnt === max_val && result.push(index + 1))
  
  return result;
}