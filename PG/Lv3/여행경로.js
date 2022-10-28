function solution(tickets) {
  const graph = {}
  for (const [src, dest] of tickets) {
      if (!graph[src]) {
          graph[src] = [];
      }
      graph[src].push(dest);
  }
  
  for (const key in graph) {
      graph[key].sort((a, b) => a > b ? -1 : 1);
  }
  
  const stack = ['ICN']; 
  const answer = []; 
  while (stack.length > 0) { 
      const src = stack[stack.length - 1];
      
      if (graph[src] && graph[src].length > 0) {
          stack.push(graph[src].pop());
      } else { 
          answer.push(stack.pop());
      }
  }
  
  return answer.reverse();
}