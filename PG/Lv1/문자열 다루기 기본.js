function solution(s) {  
  return !s.includes("e") && (s.length === 4 || s.length === 6) && !Number.isNaN(Number(s));
}