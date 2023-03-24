function solution(cards1, cards2, goal) {
  let answer = '';
  
  let pos1 = 0;
  let pos2 = 0;
  
  for (let i = 0; i < goal.length; i++) {
      if (cards1[pos1] === goal[i]) {
          pos1 += 1;
      } else if (cards2[pos2] === goal[i]) {
          pos2 += 1;
      } else {
          answer = 'No';
          break;
      }
  }
  return answer || 'Yes';
}