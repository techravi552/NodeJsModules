

function isPrime(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return `${num} is not a valid number.`;
  }

  if (num < 2) return `${num} is not a prime number.`;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `${num} is not a prime number.`;
    }
  }

  return `${num} is a prime number.`;
}

module.exports = isPrime;
