// starter code
let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 1,
    move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 2,
    move: function () {return Math.floor(Math.random()*11)}
};

// Object literals for 3 more provided animals
let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 3,
    move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID: 4,
    move: function () {return Math.floor(Math.random()*11)}
};

let waterBear = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID: 5,
    move: function () {return Math.floor(Math.random()*11)}
};

// Crew Array
let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

// Function to return the report of the parameter animal
const crewReports = (animal) => {
    return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

// Function to return the report of the fitness test
const fitnessTest = (crew) => {
    let results = [];
    for (let i = 0; i < crew.length; i++){
        let steps = 0, turns = 0;
        while(steps < 20){
            steps += crew[i].move();
            turns++;
        }
        results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
    }
    return results;
}

// Print out the relevant information about each animal.
for (let i = 0; i < crew.length; i++){
    let report = crewReports(crew[i]);
    console.log(`Crew Report for Animal ${i+1}: `);
    console.log(report, '\n');
}

// Start an animal race and print the results
let testResults = fitnessTest(crew);
for (let i = 0; i < testResults.length; i++){
    console.log(`Fitness Test Result for Animal ${i+1}: `);
    console.log(testResults[i], '\n');
}