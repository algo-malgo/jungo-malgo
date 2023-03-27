function solution(wallpaper) {
  let xList = [];
  let yList = [];
  wallpaper.forEach((row, i) => {
    row.split("").forEach((pos, j) => {
      if (pos === "#") {
        xList.push(i);
        yList.push(j);
      }
    });
  });
  yList.sort((a, b) => a - b);

  let lux = xList[0];
  let luy = yList[0];
  let rdx = xList[xList.length - 1] + 1;
  let rdy = yList[yList.length - 1] + 1;

  return [lux, luy, rdx, rdy];
}
