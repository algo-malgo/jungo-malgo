function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  for (let i = 0; i < people.length; i++) {
      if (i !== people.length - 1 && people.slice(-1) <= limit - people[i]) {
          people.pop();
      } 
      answer += 1;
  }   
  return answer;
}