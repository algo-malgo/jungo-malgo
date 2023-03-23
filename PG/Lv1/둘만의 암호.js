function solution(s, skip, index) {
  let answer = '';
  
  const skipped = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97))
  .filter((alpha) => !skip.includes(alpha));

  for (let i = 0; i < s.length; i++) {
      let addedIndex = skipped.indexOf(s[i]) + index; 
      if (addedIndex >= skipped.length) { 
          addedIndex %= skipped.length 
      }
      answer += skipped[addedIndex];
  }
  
  return answer;
}