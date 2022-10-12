function solution(n, k) {
  let prime = []; 
  return n.toString(k).split('0').reduce((acc, cur) => {
      if (prime.includes(cur)) return acc + 1;
      if ((cur !== '2' && !(cur % 2)) || cur === '1') return acc;
      for (let i = 3; i <= cur ** 0.5; i += 2) 
          if (!(cur % i)) return acc;
      prime.push(cur);
      return acc + 1;
  }, 0);
}