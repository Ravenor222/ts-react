import {generateTopics} from "./generateTopics";
import {generatePictures} from "./generatePictures";

export const generateTopicsWithPictures = async (numberOfRecords: number) => {
    let topics = generateTopics(numberOfRecords)
    let pictures = await generatePictures(numberOfRecords)
    return {topics, pictures}
};