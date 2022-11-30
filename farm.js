let addZeros = (n, d = 3) => String(n).padStart(d, "0");

let numberOfAnimals = (animals, digits) => {
    for (const [key, value] of Object.entries(animals)) {
        console.log(`I have ${addZeros(value, digits)} ${key} `);
    }
}

numberOfAnimals({ cows: 5, dogs: 1, cats: 15});