// Desafio 1
function compareTrue(value01, value02) {
  // seu código aqui
  return value01 && value02;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(" ");
}

// Desafio 4
function concatName(sentence) {
  // seu código aqui
  let result = [];
  result.push(sentence[sentence.length - 1]);
  result.push(sentence[0]);
  return result.join(", ");
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let count = 0;
  let biggestNumber = Math.max.apply(null, numbers);
  for (let value of numbers) {
    if (value === biggestNumber) {
      count += 1;
    }
  }
  return count;
}

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Count = Math.abs(cat1 - mouse);
  let cat2Count = Math.abs(cat2 - mouse);
  if (cat1Count > cat2Count) {
    return "cat2";
  }
  if (cat1Count < cat2Count) {
    return "cat1";
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function division(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "fizzBuzz";
  }
  if (value % 3 === 0) {
    return "fizz";
  }
  if (value % 5 === 0) {
    return "buzz";
  }
  return "bug!";
}

function fizzBuzz(numbers) {
  // seu código aqui
  let msg = [];
  for (let value of numbers) {
    msg.push(division(value));
  }

  return msg;
}

// https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176 usei regex para substituir o valor da string sentence, tinha feito de outra forma mas assim o lint não reclama que tem muitas linhas nem complexity alta
// o método replace altera um valor por outro replace('valor na string', 'novo valor')
// o regex permite filtrar o conteúdo com mais paramêtros
// o g significa global ou seja todas as vezes que aparecer o conteudo selecionado ele será alterado e o i serve para não ser case sensitive então ele irá mudar independente de estar maiusculo ou minusculo

// Desafio 9
function encode(sentence) {
  // seu código aqui
  sentence = sentence.replace(/a/gi, "1");
  sentence = sentence.replace(/e/gi, "2");
  sentence = sentence.replace(/i/gi, "3");
  sentence = sentence.replace(/o/gi, "4");
  sentence = sentence.replace(/u/gi, "5");
  return sentence;
}

function decode(sentence) {
  // seu código aqui
  sentence = sentence.replace(/1/gi, "a");
  sentence = sentence.replace(/2/gi, "e");
  sentence = sentence.replace(/3/gi, "i");
  sentence = sentence.replace(/4/gi, "o");
  sentence = sentence.replace(/5/gi, "u");
  return sentence;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  if (tech.length === 0) {
    return "Vazio!";
  }
  tech.sort();
  let list = [];
  for (let value of tech) {
    list.push({
      tech: value,
      name,
    });
  }
  return list;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
