let i = 5;
let salida = true;

while (salida) {
  if (i == 0) {
    salida = false;
    console.log(i);
  } else {
    console.log(i);
    i = i - 1;
  }
}
