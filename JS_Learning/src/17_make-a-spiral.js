function spiralize(n) {
  const res = Array.from({ length: n }, () => Array(n).fill(0));
  let dirs = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];
  let dir = 0,
    x = 0,
    y = 0;

  for (let i = 0; i < n * n; ) {
    res[y][x] = 1;
    i++;

    let [dx, dy] = dirs[dir];
    let [nx, ny] = [x + dx, y + dy];
    let [nx2, ny2] = [x + dx * 2, y + dy * 2];

    if (
      0 <= ny2 &&
      ny2 < n &&
      0 <= nx2 &&
      nx2 < n &&
      res[ny][nx] === 0 &&
      res[ny2][nx2] === 0
    ) {
      x = nx;
      y = ny;
    } else {
      dir = (dir + 1) % 4;
      x += dirs[dir][0];
      y += dirs[dir][1];
    }
  }

  return res;
}

module.exports = spiralize;
