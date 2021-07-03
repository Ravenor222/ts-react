import {
    uniqueNamesGenerator,
    adjectives,
    colors, animals, countries, languages
} from 'unique-names-generator'
import {LoremIpsum} from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 5,
        min: 2
    },
    wordsPerSentence: {
        max: 12,
        min: 4
    }
});


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
            name: name,
            description: lorem.generateParagraphs(1)
        };
        newArray.push(newTopic);
        counter++;
    }
    return newArray;

};