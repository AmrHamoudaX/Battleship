export { Ship };

function Ship(length) {
  let hits = 0;

  function hit() {
    hits++;
  }

  const getHits = () => hits;

  return { length, hit, getHits };
}
