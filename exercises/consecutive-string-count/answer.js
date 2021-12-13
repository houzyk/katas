const modify = (text) => {
  const result = [];
  let counter = [];
  text.split('').forEach((char, charIndex, charArray) => {
    counter.push(char);
    if (char !== charArray[charIndex + 1]) {
      result.push(`${counter.filter(c => c === char).length}${char}`);
      counter = [];
    }
  });
  return result.join('');
}
