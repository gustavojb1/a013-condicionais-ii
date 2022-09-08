const num = prompt("Digite um número");
/*
if (num % 2 == 0) {
  console.log("Número é divisível por 2");
  if (num % 3 == 0) {
    console.log("Número é divisível por 3");
  } else {
    console.log("Número não é divisível por 3");
  }
} else {
  console.log("Número não é divisível por 2");
  if (num % 3 == 0) {
    console.log("Número é divisível por 3");
  } else {
    console.log("Número não é divisível por 3");
  }
}*/

//2
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Número é divisível por 2 e 3");
} else {
  if (num % 2 == 0) {
    console.log("Número é divisível apenas por 2");
  } else if (num % 3 == 0) {
    console.log("Número é divisível apenas por 2");
  }else{
    console.log("Número não é divisível nem por 2 nem por 3");
  }
}
