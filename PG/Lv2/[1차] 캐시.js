function solution(cacheSize, cities) {
  if (!cacheSize) return cities.length * 5;
  cities = cities.map((city) => city.toLowerCase()); 
  
  let answer = 0;
  
  let queue = [];
  let i = 0;
  while (cities[i] && queue.length < cacheSize) {
      let idx = queue.indexOf(cities[i]);
      if (idx !== -1) {
          queue.splice(idx, 1);
          answer += 1;
      } else answer += 5;      
      queue.push(cities[i]);  
      i++;
  }
  
  for (let j = i; j < cities.length; j++) {
      let idx = queue.indexOf(cities[j]);
      if (idx !== -1) {
          queue.splice(idx, 1);
          answer += 1;
      } else {
          queue.shift();
          answer += 5;
      }
      queue.push(cities[j]);
  }
  
  return answer;
}