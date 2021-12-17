function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function waysToClimb(n) {
  return fib(n + 1);
}

console.log(5);