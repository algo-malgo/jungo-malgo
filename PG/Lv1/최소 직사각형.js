function solution(sizes) {
  const tmp = sizes.map(size => size.sort((a, b) => a - b));
  let max1 = 0, max2 = 0;
  for (let i = 0; i < tmp.length; i++) {
      if (tmp[i][0] > max1) max1 = tmp[i][0];
      if (tmp[i][1] > max2) max2 = tmp[i][1];
  }    
  return max1 * max2;
}