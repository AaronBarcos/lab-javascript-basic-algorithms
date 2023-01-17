// Iteration 1: Names and Input
let hacker1 = "Aarón";
let hacker2 = "Rebeca";
console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let capitalHacker1 = "";

for (let i = 0; i < hacker1.length; i++) {
  capitalHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(capitalHacker1);

let capitalHacker2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  capitalHacker2 += hacker2[i];
}

console.log(capitalHacker2);

let arr = [hacker1, hacker2];

for (let j = 0; j < arr.length; j++) {
  if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
} //Esto me da dos veces el resultado en la consola

for (let j = 0; j < hacker1[0]; j++) {
  for (let z = 0; z < hacker2.length; z++) {
    if (hacker1 < hacker2) {
      console.log("The driver's name goes first.");
    } else if (hacker1 > hacker2) {
      console.log("Yo, the navigator goes first definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }
  }
} // Esto me da 30 veces el resultado en la consola.
