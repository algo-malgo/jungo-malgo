function solution(progresses, speeds) {
  let answer = [];
  
  let days = [];
  for (let i = 0; i < progresses.length; i++) {
      days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  
  let max = days[0];
  let count = 1;
  for (let i = 1; i < days.length; i++) {
      if (days[i] > max) {
          max = days[i];
          answer.push(count);
          count = 1;
      } else count += 1;
  }
  answer.push(count);
  
  return answer;
}