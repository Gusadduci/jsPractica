let a = 2;
let estados = true;
let b = 0;
while (estados) {
  if (b < 50) {
    console.log(a);
    a = a + 2;
    b++;
  } else {
    estados = false;
  }
}

let z = 1;

while (z <= 10) {
  console.log(z * 2);
  z++;
}
