// Code your orbitCircumference function here:
const orbitCircumference = (radius) => {
    return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:
const missionDuration = (orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000) => {
    let circumference = orbitCircumference(orbitRadius);
    let time = circumference / orbitalSpeed;
    
    let duration = time * orbitsCompleted;
    return Math.round(duration * 100) / 100;
}

// Copy/paste your selectRandomEntry function here:
const selectRandomEntry = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// Code your oxygenExpended function here:
const oxygenExpended = (candidate) => {
    let duration = missionDuration(3);
    let oxygen = Math.round(candidate.o2Used(duration) * 1000) / 1000;

    return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygen} kg of oxygen.`;
}

// Candidate data & crew array.
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
  
let crew = [candidateA,candidateC,candidateE];
  
// Print the mission duration for 5 orbit rounds.
let distance = orbitCircumference(2000) * 5;
let duration = missionDuration(5);

console.log(`Mission Duration for 5 orbital rounds: `);
console.log(`The mission will travel ${distance} km around the planet, and it will take ${duration} hours to complete.\n`);

// Print the mission duration for 3 orbit rounds.
distance = orbitCircumference(2000) * 3;
duration = missionDuration(3);

console.log(`Mission Duration for 3 orbital rounds: `);
console.log(`The mission will travel ${distance} km around the planet, and it will take ${duration} hours to complete.\n`);

// Print the oxygen expended for candidate
let candidate = selectRandomEntry(crew);
console.log(oxygenExpended(candidate));
