function solution(x) { 
  const sum = (x + "").split("").reduce((acc, cur) => acc + (+cur), 0);
  return x % sum === 0;
}