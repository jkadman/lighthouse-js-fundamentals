function howManyHundreds (num) {
  let x = num / 100
  if (num % 100 === 0) {
    return x;
  } else if ((num % 100 !== 0) && (num >= 100))  {
    return Math.round(x);
  } else {
    return 0;
  }

};

console.log(howManyHundreds(126))
console.log(howManyHundreds(234))
console.log(howManyHundreds(800))
console.log(howManyHundreds(756))
console.log(howManyHundreds(123456))