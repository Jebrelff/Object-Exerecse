// Code your crewMass function here:
const crewMass = (crew) => {
    let totalMass = 0;
    for (let i = 0; i < crew.length; i++) {
        totalMass += crew[i].mass;
    }
    return Math.round(totalMass * 10) / 10;
}

// Code your fuelRequired function here:
function fuelRequired(crew) {
    const rocketAndSuppliesMass = 75000; // Rocket mass plus supplies
    const fuelSafetyMarginDogCat = 200; // Extra fuel for dogs and cats
    const fuelSafetyMarginOther = 100; // Extra fuel for other species

    const crewMassTotal = crewMass(crew);
    const launchMass = rocketAndSuppliesMass + crewMassTotal;

    let fuelNeeded = 9.5 * launchMass;

    // Add safety margin for each dog or cat
    for(let i = 0; i < crew.length; i++) {
        if (crew[i].species === 'dog' || crew[i].species === 'cat') {
            fuelNeeded += fuelSafetyMarginDogCat;
        } else {
            fuelNeeded += fuelSafetyMarginOther;
        }
    };

    return Math.round(fuelNeeded);
}


let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
};
let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
};
let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
};
let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
};
let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
};
let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
};
  
let crew = [candidateB,candidateD,candidateF];

// Print the results
const totalCrewMass = crewMass(crew);
const totalFuelRequired = fuelRequired(crew);

console.log(`The mission has a launch mass of ${totalCrewMass + 75000} kg and requires ${totalFuelRequired} kg of fuel.`);
