function solution(n) {
  const s = new Set();
  s.add(2);
  for (let i = 3; i <= n; i += 2)
      s.add(i);
  
  for (let i = 3; i <= n ** 0.5; i += 2) 
      if (s.has(i)) {
           for (let j = i * 2; j <= n; j += i)  
              s.delete(j);
      }
  
  return s.size;
}