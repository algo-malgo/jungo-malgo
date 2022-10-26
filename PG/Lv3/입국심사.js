function solution(n, times) {
  times.sort((a, b) => a - b);    
  let left = 1;
  let right = times[times.length - 1] * n;
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
      
      if (sum >= n) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return left;
}