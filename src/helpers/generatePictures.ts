import {PictureParameters} from "../types/pictureParameters";
import axios from 'axios'

export const generatePictures = (config: PictureParameters): any => {
    const {numberOfRecords, imageWidth, imageHeight} = config
    let width  = (imageWidth ? imageWidth : 250);
    let height = (imageHeight ? imageHeight : 250);

    // for(let i = 0; i < numberOfRecords; i++) {
    // }
    const promiseArray = []
    for(let i = 0; i < numberOfRecords; i++) {
        let promise = axios.get(`https://picsum.photos/${width}/${height}`).then(
            (result) => result,
            (error) => console.log(error)
        )
        promiseArray.push(promise)
    }
    return Promise.all(promiseArray).then((x) => x)

    // let width =
};