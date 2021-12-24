function countBoomerangs(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] !== array[i] && array[i + 2] === array[i]) {
      count += 1;
    }
  }
  return count;
  
}


console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));

console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));