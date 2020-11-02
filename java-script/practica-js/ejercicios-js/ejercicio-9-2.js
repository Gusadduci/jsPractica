let numbers = 20;
let count = 0;
let state = true;
while (state) {
  if (count <= numbers) {
    let tree = count / 3;
    let five = count / 5;
    tree = tree % 1;
    five = five % 1;
    if (count == 0) {
      console.log(count);
    } else if (five == 0 && tree == 0) {
      console.log("FizzBuzz");
    } else if (tree == 0) {
      console.log("fizz");
    } else if (five == 0) {
      console.log("Buzz");
    } else {
      console.log(count);
    }
    count++;
  } else {
    state = false;
  }
}

for (let counts = 0; counts <= numbers; counts++) {
  if (counts == 0) {
    console.log(counts);
  } else if (counts % 5 == 0 && counts % 3 == 0) {
    console.log("FizzBuzz");
  } else if (counts % 3 == 0) {
    console.log("fizz");
  } else if (counts % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(counts);
  }
}



