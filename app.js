// Задание 1

function calcNumbers(a, b, c) {
let result = a + b + c
return console.log(result)
}

calcNumbers("ffads",20,10) 


// // Заданиче 2

function getStrings(a, b, c) {
    const strings = [a, b, c];
    let calcStrings = strings.sort().join(' ');
    return console.log(calcStrings)
}
getStrings ("fort", "zero", "alpha")

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

// Задача 4


function calcNumbers(a, b) {
    if (a && b >= 0) {
        return console.log(Math.pow(a, b))
    } else if (b == undefined) {
        return console.log(Math.pow(a,a))
    }
}
calcNumbers(3,4)