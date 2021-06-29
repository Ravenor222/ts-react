const {
    uniqueNamesGenerator,
    adjectives,
    colors,
    animals
} = require("unique-names-generator");

export const generatePeople = (length: number) => {
    let newArray = [];
    let counter = 1;
    for (let i = 0; i < length; i++) {
        const name = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
            length: 2,
            style: "capital"
        });
        let newPerson = {
            id: counter,
            name: name
        };
        newArray.push(newPerson);
        counter++;
    }
    return newArray;
};