const fizzBuzz = (numberArray) => {
  return numberArray.map((number) => {
    let word = '';
    const checkDivisor = (dividend, phrase) => {
      if (number % dividend === 0) word += phrase;
    }
    checkDivisor(3, "Fizz");
    checkDivisor(5, "Buzz");
    return word === '' ? number : word;
  });
}
