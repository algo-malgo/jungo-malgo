function solution(numbers, target) {
  let answer = 0;
  
  function dfs(i, sum) {
      if (i === numbers.length) {
          if (sum === target) {
              answer += 1;
          }
          return;
      }
      dfs(i + 1, sum + numbers[i]);
      dfs(i + 1, sum - numbers[i]);
  }
  dfs(0, 0);

  return answer;
}


