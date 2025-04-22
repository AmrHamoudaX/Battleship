export { Ship };

function Ship(length) {
  let hits = 0;

  function hit() {
    hits++;
  }

  const getHits = () => hits;

  function isSunk() {
    return hits >= length ? true : false;
  }
  return { length, getHits, hit, isSunk };
}
