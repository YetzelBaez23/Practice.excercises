/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Print all people in the list
console.log(people);

// Remove "Dani" from the array
people.splice(people.indexOf("Dani"), 1);

// Remove "Juan" from the array
people = people.filter(person => person !== "Juan");

// Move "Luis" to the front of the array
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

// Add your name to the end of the array
people.push("Jetzel");

// Iterate through the array and exit after console.log "Maria" using break
for (let person of people) {
  console.log(person);
  if (person === "Maria") {
    break;
  }
}

// Get the indexOf where "Maria" is located
let mariaIndex = people.indexOf("Maria");

// Print the indexOf where "Maria" is located
console.log("Index of Maria:", mariaIndex);

// At the end of the exercise, there should be 4 people in the array.
console.log(people);