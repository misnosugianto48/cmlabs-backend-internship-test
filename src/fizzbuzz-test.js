import { writeFileSync } from 'fs';

function fizzBuzz(iterationValue, filename) {
  let data = '';

  for (let i = 1; i <= iterationValue; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      data += `${i}. Fizz Buzz\n`;
    } else if (i % 3 === 0) {
      data += `${i}. Fizz\n`;
    } else if (i % 5 === 0) {
      data += `${i}. Buzz\n`;
    } else {
      data += `${i}. ${i}\n`;
    }
  }

  writeFileSync(filename, data);
}

export { fizzBuzz };
