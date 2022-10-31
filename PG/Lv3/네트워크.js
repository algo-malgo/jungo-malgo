function solution(n, computers) {
  let answer = 0;
  const stack = [0],
    visited = [0];

  while (stack.length) {
    const src = stack.pop();

    for (let i = 0; i < n; i++) {
      if (!visited.includes(i) && computers[src][i]) {
        stack.push(i);
        visited.push(i);
      }
    }

    if (!stack.length) {
      answer += 1;
      for (let i = 0; i < n; i++) {
        if (!visited.includes(i)) {
          stack.push(i);
          break;
        }
      }
    }
  }

  return answer;
}
