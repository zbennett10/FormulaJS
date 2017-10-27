const getEuclidGCD = (a,b) => {
   let max = Math.max(a,b), min = Math.min(a,b);
   return !(max % min) ? min : getEuclidGCD(min, max % min);
}

console.log(getEuclidGCD(4, 2));
console.log(getEuclidGCD(30, 12));
console.log(getEuclidGCD(100, 8));