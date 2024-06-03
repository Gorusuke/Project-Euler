function isPentagonal(num) {
  const n = (Math.sqrt(24 * num + 1) + 1) / 6;
  return (n - parseInt(n) === 0) ? n : 0;
}

function nearestHexagonal(num) {
  return parseInt((Math.sqrt(8 * num + 1) + 1) / 4);
}

function hexagonal(num) {
  return num * (2 * num - 1);
}

function triPentaHexa(num) {
  let n = nearestHexagonal(num) + 1;
  let hexagonalNumber = hexagonal(n);

  while (!isPentagonal(hexagonalNumber)) {
    n++;
    hexagonalNumber = hexagonal(n);
  }
  return hexagonalNumber;
}

console.log(triPentaHexa(40756)) // 1533776805
