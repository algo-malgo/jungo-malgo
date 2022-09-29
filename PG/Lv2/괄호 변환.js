function checkU(u) {
  let left = 0, right = 0;
  const arr = u.split('');
  for (let i = 0; i < arr.length; i++) {
      if (right > left) return false;
      arr[i] === '(' ? left += 1 : right += 1;
  }
  return true;
}

function createP(u, v) {
  let newV = '(' + separateP(v) + ')';
  let newU = u.slice(1, -1).split('').map((e) => e === '(' ? ')' : '(').join('');
  return newV + newU;
}

function separateP(p) {
  if (p === '') return '';
  
  let answer = '', u = '', v = '';
  let left = 0, right = 0;
  const arr = p.split('');
  let i;
  for (i = 0; i < arr.length; i++) {
      if (left && left === right) {
          u = p.slice(0, i);
          v = p.slice(i);   
          break;
      }
      arr[i] === '(' ? left += 1 : right += 1;
  }
  if (i === arr.length) u = p;
  return answer += checkU(u) ? u + separateP(v) : createP(u, v);
}

function solution(p) {   
  return separateP(p);
}