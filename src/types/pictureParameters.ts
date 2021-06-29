export interface PictureParameters {
    numberOfRecords: number,
    imageWidth?: number,
    imageHeight?: number
}
export const PictureParameterConstructor = (numberOfRecords: number, imageWidth?: number, imageHeight?: number): PictureParameters => {
    let width  = (imageWidth ? imageWidth : 250);
    let height = (imageHeight ? imageHeight : 250);

    return {
        numberOfRecords,
        imageHeight: height,
        imageWidth: width
    }
};