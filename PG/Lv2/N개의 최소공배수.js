function getGCD(a, b) {
  let r = a % b;
  while (r) {
      a = b;
      b = r;
      r = a % b;
  }
  return b;
}

function solution(arr) {
  arr.sort((a, b) => b - a);
  
  let lcm = arr[0];
  for (let i = 1; i < arr.length; i++) {
      let tmp = lcm;
      let gcd = getGCD(lcm, arr[i]);
      lcm = tmp * arr[i] / gcd;
  }
  return lcm;
}