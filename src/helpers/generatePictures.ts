import axios from 'axios'

export const generatePictures = (numberOfRecords: number): any => {

    const promiseArray = []
    for(let i = 0; i < numberOfRecords; i++) {

        let promise = axios.get(`https://api.thecatapi.com/v1/images/search?api_key=${ze}`).then(
            (result) => result,
            (error) => console.log(error)
        )
        promiseArray.push(promise)
    }
    return Promise.all(promiseArray).then(
        (pictureArray) => {
            let newArray = [];
            for (const item of pictureArray) {
                //@ts-ignore
                newArray.push(item.data[0].url)
            }
            return newArray
        })
};