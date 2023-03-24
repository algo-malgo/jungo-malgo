function solution(keymap, targets) {
  return targets.map((target) => {
    let sum = 0;
    for (let i = 0; i < target.length; i++) {
      const arr = keymap.map((key) => key.indexOf(target[i]) + 1);
      if (Math.max(...arr) === 0) {
        sum = -1;
        break;
      }
      const filtered = arr.filter((item) => item !== 0);
      sum += Math.min(...filtered);
    }
    return sum;
  });
}
