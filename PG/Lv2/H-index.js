function solution(citations) {
  let i;
  for (i = citations.length; i >= 0; i--) {
      let cnt = 0;
      for (let j = 0; j < citations.length; j++) 
          if (citations[j] >= i) cnt++;
      if (i <= cnt) break;
  }
  return i;
}