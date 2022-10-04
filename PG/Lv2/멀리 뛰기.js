function getComb(n, r) {
  let v1 = 1, v2 = 1;
  for (let i = r; i > 0; i--) {
      v1 *= n--;
      v2 *= i;
      
  }
  return v1 / v2;
}

function solution(n) {
  let answer = n % 2 === 0 ? 2 : 1;

  for (let i = 1; i < n / 2; i++) {
      let tmp = n - 2 * i + i; 
      answer += getComb(tmp, i);
  }
  
  return answer % 1234567;
}