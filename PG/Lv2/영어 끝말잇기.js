function solution(n, words) {
  let answer = [0, 0];
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
      map.set(words[i], (map.get(words[i]) || 0) + 1);
      if (map.get(words[i]) >= 2 || i && words[i - 1].slice(-1) !== words[i][0]) {
          answer = [(i + n) % n + 1, Math.floor(i / n) + 1];
          break;
      }
  }
  return answer;
}