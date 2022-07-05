// Desafio 11
function iteratePhoneNumber(value, phoneNumber) {
  let count = 0;
  for (let value2 of phoneNumber) {
    if (value === value2) {
      count += 1;
    }
  }
  return count;
}

function someNumberRepeatMoreThanTree(phoneNumber) {
  let count = 0;
  for (let value of phoneNumber) {
    count = iteratePhoneNumber(value, phoneNumber);
    if (count >= 3) {
      return true;
    }
  }
  return false;
}

function isLessThanZero(phoneNumber) {
  for (let value of phoneNumber) {
    if (value < 0 || value > 9) {
      return true;
    }
  }
  return false;
}

function isBiggerThanEleven(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  return false;
}

function isPhoneValid(phoneNumber) {
  let biggerThanEleven = isBiggerThanEleven(phoneNumber);
  let lessThanZero = isLessThanZero(phoneNumber);
  let numberRepeat = someNumberRepeatMoreThanTree(phoneNumber);
  if (biggerThanEleven !== false) {
    return 'Array com tamanho incorreto.';
  }
  if (lessThanZero !== false || numberRepeat !== false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}

function generatePhoneNumber(phoneNumber) {
  let resto1 = '';
  let resto2 = '';
  let indexOfPhoneNumber = 0;
  let isValid = isPhoneValid(phoneNumber);
  if (isValid !== true) {
    return isValid;
  }
  for (indexOfPhoneNumber = 2; indexOfPhoneNumber <= 6; indexOfPhoneNumber += 1) {
    resto1 += phoneNumber[indexOfPhoneNumber];
  }
  for (indexOfPhoneNumber = 7; indexOfPhoneNumber <= 10; indexOfPhoneNumber += 1) {
    resto2 += phoneNumber[indexOfPhoneNumber];
  }
  return `(${phoneNumber[0]}${phoneNumber[1]}) ${resto1}-${resto2}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 1]));

// Desafio 12
function verifyEdgesIsBiggerThenSum(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}
function verifyEdgesIsBiggerThenAbsolut(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB - lineC)
  && lineB > Math.abs(lineA - lineC)
  && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (verifyEdgesIsBiggerThenAbsolut(lineA, lineB, lineC)
  && verifyEdgesIsBiggerThenSum(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}

// https://www.youtube.com/watch?v=pfkkdzeyx6U
// usei regex para pegar os numeros da string o
// \d diz para filtrar digitos da string
// o + diz que é para filtrar todos os digitos
// o g diz para pegar todas as vezes que aparecer o digito

// Desafio 13
function hydrate(phrase) {
  // seu código aqui
  let total = 0;
  let regex = /\d+/g;
  let numbers = phrase.match(regex);
  console.log(numbers);
  for (let value of numbers) {
    total += Number(value);
  }
  if (total > 1) {
    return `${total} copos de água`;
  }
  return `${total} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
