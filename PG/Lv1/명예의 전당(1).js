function solution(k, score) {
  let answer = [];
  
  const lank = [];
  for (let i = 0; i < score.length; i++) {
      if (lank.length >= k) {
          if (score[i] > lank[k - 1]) {
              lank.pop();
              lank.push(score[i]);
              lank.sort((a, b) => b - a);    
          }
          answer.push(lank[k - 1]);
      } else {
          lank.push(score[i]);
          lank.sort((a, b) => b - a);
          answer.push(lank[lank.length - 1]);
      }
  }
  
  return answer;
}