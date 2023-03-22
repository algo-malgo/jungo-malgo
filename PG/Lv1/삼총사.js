function solution(n) {
  let answer = 0;
  const combination = (arr, start) => {
      if (arr.length === 3) {
          answer += arr.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
          return;
      }
      for (let i = start; i < n.length; i++) {
          combination([...arr, n[i]], i + 1);
      }
  }
  combination([], 0);
  return answer;
}