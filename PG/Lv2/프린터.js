function solution(priorities, location) {
  let alpha = 65;
  let arr = Array.from({length: priorities.length}, () => String.fromCharCode(alpha++));
  let doc = arr[location];

  let result = [];
  while (priorities.length) {
      let print = 1;
      for (let i = 1; i < priorities.length; i++) {
          if (priorities[i] > priorities[0]) {
              print = 0;
              priorities = [...priorities.slice(1), priorities[0]];
              arr = [...arr.slice(1), arr[0]];
              break;
          }
      }
      if (print) {
          priorities = priorities.slice(1);
          result.push(arr[0]);
          arr = arr.slice(1);
      }
  }
  return result.indexOf(doc) + 1;
}