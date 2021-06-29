import {
    uniqueNamesGenerator,
    adjectives,
    colors, animals, countries, languages
} from 'unique-names-generator'

export const generateTopics = (length : number) => {
    let newArray = [];
    let counter = 1;
    for (let i = 0; i < length; i++) {
        const name = uniqueNamesGenerator({
            dictionaries: [adjectives, colors, countries, languages], // colors can be omitted here as not used
            length: 4,
            style: "capital"
        });
        let newTopic = {
            id: counter,
            name: name
        };
        newArray.push(newTopic);
        counter++;
    }
    return newArray;

};