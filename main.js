const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];


// 1. Get an array of all names

const namesArray = characters.map(character => character.name);
console.log(namesArray)


// 2. Get an array of all heights


const heightArray = characters.map(character => character.height);
console.log(heightArray)


// 3. Get an array of objects with just name and height properties
const nameAndHeightArray = characters.map(({ name, height }) => ({ name, height }));

console.log(nameAndHeightArray);


// 4. Get an array of all first names

const firstNamesArray = characters.map(character => character.name.split(' ')[0]);

console.log(firstNamesArray);

// 5. Get the total mass of all characters

const totalMass = characters.reduce((total, character) => total + parseInt(character.mass), 0);

console.log(totalMass);

// 6. Get the total height of all characters

const totalHeight = characters.reduce((total, character) => total + parseInt(character.height), 0);

console.log(totalHeight);



// 7. Get the total number of characters in all the character names

const totalNameLength = characters.reduce((total, character) => total + character.name.length, 0);

console.log(totalNameLength);



// 8. Get the total number of characters by eye color (hint. a map of eye color to count)



// 9. Get characters with mass greater than 100

const charactersMassGreaterThan100 = characters.filter(character => parseInt(character.mass) > 100);

console.log(charactersMassGreaterThan100);


// 10. Get characters with height less than 200
const charactersHeightLessThan200 = characters.filter(character => parseInt(character.height)< 200);

console.log(charactersHeightLessThan200);

// 11. Get all male characters
const maleCharacters = characters.filter(character => character.gender === "male");

console.log(maleCharacters);


// 12. Get all female characters

const femaleCharacters = characters.filter(character => character.gender === "female");

console.log(femaleCharacters);


// // 13. Sort by name





// 14. Sort by mass

const sortedByMass = characters.sort((a, b) => parseInt(a.mass) - parseInt(b.mass));

console.log(sortedByMass);

// 15. Sort by height

const sortedByHeight = characters.sort((a, b) => parseInt(a.height) - parseInt(b.height));

console.log(sortedByHeight);



// 16. Sort by gender



// 17. Does every character have blue eyes?

const blueEyes = characters.every(character => character.eye_color === "blue");

console.log(blueEyes); 

//18.  Does every character have mass more than 40?

const massMoreThan40 = characters.every(characters => characters.mass > 40);

console.log(massMoreThan40);

// 19. Is every character shorter than 200?

const shorterThan200 = characters.every(characters => characters.height < 200);

console.log(shorterThan200);

// 20. Is every character male?

const characterGender = characters.every(characters => characters.gender === "male");

console.log(characterGender);


//21. Is there at least one male character?
const checkMaleCharacter = characters.some(character => character.gender === "male");

console.log(checkMaleCharacter);

// 22. Is there at least one character with blue eyes?

const checkBlueEyeColor = characters.some(character => character.eye_color === "blue");

console.log(checkBlueEyeColor);


// 23. Is there at least one character taller than 200?

const checkCharacterHaight = characters.some(character => character.height > 200);

console.log(checkCharacterHaight);

// 24.  Is there at least one character that has mass less than 50?

const checkCharacterMassMoreThan50 = characters.some(character => character.mass < 50);
console.log(checkCharacterMassMoreThan50);
