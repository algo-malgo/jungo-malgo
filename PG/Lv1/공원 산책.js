function solution(park, routes) {
  const move = { N: -1, S: 1, W: -1, E: 1 };

  let curX = -1;
  let curY = -1;
  const parkArr = park.map((p, sx) => {
    if (curX === -1) {
      const sy = p.indexOf("S");
      if (sy !== -1) {
        curX = sx;
        curY = sy;
      }
    }
    return p.split("");
  });

  routes.forEach((route, i) => {
    const [op, n] = route.split(" ");

    let tempX = curX;
    let tempY = curY;
    let fail = false;
    for (let i = 0; i < n; i++) {
      if (op === "N" || op === "S") {
        tempX += move[op];
      } else {
        tempY += move[op];
      }

      if (
        !parkArr[tempX] ||
        parkArr[tempX][tempY] === "X" ||
        !parkArr[tempX][tempY]
      ) {
        fail = true;
        break;
      }
    }

    if (!fail) {
      if (op === "N" || op === "S") {
        curX += move[op] * n;
      } else {
        curY += move[op] * n;
      }
    }
  });

  return [curX, curY];
}
