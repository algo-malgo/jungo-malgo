function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []); 
  
  for (let [src, dest] of edge) {
      graph[src].push(dest);
      graph[dest].push(src); 
  }
      
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;
  
  const queue = [1];
  while (queue.length) {
      const src = queue.shift();
      for (let dest of graph[src]) {
          if (!distance[dest]) {
              queue.push(dest);
              distance[dest] = distance[src] + 1;
          }
      }
  }
      
  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;     
}