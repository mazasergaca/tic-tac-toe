const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkLines(field) {
  const x = [...field];
  let first = null;
  for (const [a, b, c] of lines) {
    if (
      (x[a] === x[b] && x[a] !== null) ||
      (x[a] === x[c] && x[a] !== null) ||
      (x[b] === x[c] && x[b] !== null)
    ) {
      if (x[a] === null) {
        x[a] = 'O';
        first = 1;
        break;
      } else if (x[b] === null) {
        x[b] = 'O';
        first = 1;
        break;
      } else if (x[c] === null) {
        x[c] = 'O';
        first = 1;
        break;
      }
    }
  }
  if (first !== 1) {
    for (const [a, b, c] of lines) {
      if (
        (x[a] === 'O' && x[b] === null && x[c] === null) ||
        (x[b] === 'O' && x[a] === null && x[c] === null) ||
        (x[c] === 'O' && x[b] === null && x[a] === null)
      ) {
        if (x[a] !== 'O') {
          x[a] = 'O';
          first = 2;
          break;
        } else if (x[b] !== 'O') {
          x[b] = 'O';
          first = 2;
          break;
        } else {
          x[c] = 'O';
          first = 2;
        }
      }
    }
  }
  if (first !== 1 && first !== 2) {
    for (let i = 0; i < 8; i++) {
      if (!x[i]) {
        x[i] = 'O';
        break;
      }
    }
  }
  return x;
}

export default function computer(field) {
  const x = [...field];
  const [a0, a1, a2, a3, a4, a5, a6, a7, a8] = x;
  if (!a4) {
    x[4] = 'O';
    return x;
  } else if (!a0 && !a1 && !a2 && !a3 && a4 && !a5 && !a6 && !a7 && !a8) {
    x[0] = 'O';
    return x;
  }
  return checkLines(field);
}
