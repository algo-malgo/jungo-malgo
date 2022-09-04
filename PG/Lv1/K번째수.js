function solution(array, commands) {
  let answer = [];
  
  for (let cmd of commands) {
      const [sPos, ePos, pos] = cmd
      const tmp = array.slice(sPos-1, ePos)
      tmp.sort((a, b) => a - b)
      answer.push(tmp[pos - 1])
  }
  
  return answer;
}