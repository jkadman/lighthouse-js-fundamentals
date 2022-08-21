function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  console.log(name + ' is ' + age + ' years old')
}

ageCalculator('Suzie', 1983, 2016);
ageCalculator("Jack", 2004, 2016);
ageCalculator("Ali", 2016, 2016);