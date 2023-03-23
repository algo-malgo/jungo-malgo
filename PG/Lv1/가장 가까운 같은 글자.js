function solution(s) {
  let answer = [];
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
      const arr = map.get(s[i]);
      answer.push(arr ? i - arr[arr.length - 1] : -1);
      map.set(s[i], arr ? [...arr, i] : [i]);
  }
  return answer;
}