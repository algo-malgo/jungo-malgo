function solution(genres, plays) {
  let answer = [];
  
  const map = new Map();
  genres.map((g, i) => {
      let arr = map.get(genres[i]);
      let val = {i, play: plays[i]};
      map.set(genres[i], arr ? [...arr, val] : [val]);
  });
  
  let priority = [];
  for (let [k, v] of map) 
      priority.push({genre: k, sum: v.reduce((acc, cur) => acc + cur.play, 0)});
  priority = priority.sort((a, b) => b.sum - a.sum).map((e, i) => e.genre);
  
  for (let genre of priority) 
      map.get(genre).sort((a, b) => b.play - a.play).slice(0, 2).map((e) => answer.push(e.i));

  return answer;
}