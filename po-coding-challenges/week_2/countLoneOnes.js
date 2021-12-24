function countLoneOnes(num) {
  let count = 0;
  
  let str = num.toString();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      if (str[i - 1] >= 0) {
        if (str[i - 1] !== "1" && str[i + 1] !== "1") {
          count += 1;
        }
      } else {
        if (str[i + 1] !== "1") {
          count += 1;
        }
      }
    }
  }
  return count;
}


console.log(countLoneOnes(1191));

console.log(countLoneOnes(1111));