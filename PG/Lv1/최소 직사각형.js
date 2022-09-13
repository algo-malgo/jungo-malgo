function solution(sizes) {
  let m1 = 0, m2 = 0;
  sizes.forEach(size => {
      const [a, b] = size.sort((a, b) => a - b);
      if (a > m1) m1 = a;
      if (b > m2) m2 = b;
  })  
  return m1 * m2;
}