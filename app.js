// // Задание 1

function calcNumbers(a, b = 0, c = 0) {
let result = a + b + c
return result
}
console.log(calcNumbers("ffads",20,10));

// // Заданиче 2

function getStrings(a, b, c) {
  const strings = [a, b, c];
  return strings.sort((a, b) => (a > b ? 1 : -1)).join(" ");
}
console.log(getStrings("fort", "zero", "alpha"));

// Задача 3

function getName(a) {
  if (a == undefined) {
    let userName = prompt("Введите имя пользователя");
    return console.log(`С уважением, ${userName}`);
  } else if (a === a) {
    return console.log(`С уважением, ${a}`);
  }
}
getName();

// // Задача 4

function calcNumbers(a, b) {
    if (a && b >= 0) {
        return a ** b;
    } else if (b === undefined) {
        return a ** 2;
    }
}
console.log(calcNumbers(3,4))
