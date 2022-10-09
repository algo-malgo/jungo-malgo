function isCorrect(s) {
  const match = {'[': ']', ']': '[', '(': ')', ')': '(', '{': '}', '}': '{'};

  let left = [];
  for (let i = 0; i < s.length; i++) {
      if ([']', ')', '}'].includes(s[i])) {
          if (left.pop() !== match[s[i]]) return false;
      } else {
          left.push(s[i]);
      };
  }
  return left.length ? false: true;
}

function solution(s) {
  let answer = 0; 
  for (let i = 0; i < s.length; i++) {
      if (isCorrect(s)) answer += 1;
      s = s.slice(1) + s[0];
  }
  return answer;
}