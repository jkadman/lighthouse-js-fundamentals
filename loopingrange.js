

function range(start, end, step) {
  let numbers = [];
  if (start > end || step <= 0) {
    return numbers;
  } else if (start === undefined || end === undefined || step === undefined) {
    return numbers;
  } else { for (let i = start; i <= end; i += step) 
    numbers.push(i);
  } return numbers;
}


console.log(range(1, 20, 6));


/*

function range(start, end, step) {
  let x = start;
  let y = end;
  let w = step;
  while ((x + w) <= y) {
    
    x = x += w;
   numbers.push(x)
    } if ((x <= y) && (w !== undefined)) {
      
      return numbers;
    } else if ((x === undefined) || (y === undefined)) {
      return numbers;
    } else {
      return numbers;
    }
  }
  range(5, 30, 4);
  console.log(numbers)

/*
 if ((start <= end) && (step !== undefined)) {
    return numbers.push;
  } else if ((start === undefined) || (end === undefined)) {
    return numbers;
  } else {
    return numbers;
  }
} */