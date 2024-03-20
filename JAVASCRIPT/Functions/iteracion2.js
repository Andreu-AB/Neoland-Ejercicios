const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  let maxLongi = 0;
  for (let i = 1; i < avengers.length; i++) {
    if (avengers[i].length > avengers[maxLongi].length) maxLongi = i;
  }
  return avengers[maxLongi];
}
console.log(findLongestWord(avengers));
