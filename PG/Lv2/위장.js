function solution(clothes) {    
  let answer = 1;
  
  let type = {};
  for (let i = 0; i < clothes.length; i++) 
      type[clothes[i][1]] = (type[clothes[i][1]] || 0) + 1;
  let count = Object.values(type);

  for (let i = 0; i < count.length; i++) 
      answer *= (1 + count[i]);

  return answer - 1;
}