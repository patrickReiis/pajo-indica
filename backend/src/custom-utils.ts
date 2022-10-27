export const validImages:string[] = [
        'data:image/jpeg;base64,',
        'data:image/png;base64,',
        'data:image/jpg;base64,',
    ]

/**
 * Accepts DATA URI format
 * Allowed image file types are: jpg, jpeg, png
 */
export function getImgFileType(imageBase64: string) {

    const imageFormats = ['jpg', 'jpeg', 'png'] 
    let dataURI = imageBase64.slice(0, 40); // 40 is an arbitrary number, it just needs to be greater than the DATA URI:w
    
    let arrWithImgType = dataURI.split(/[:,\/;]/) // should return [ 'data', 'image', '<img-type>', 'base64', '' ] 
    let imgType = arrWithImgType[2];

    for (let i = 0; i < imageFormats.length; i++) {
        if (imageFormats[i] === imgType) return imgType;
    }
    
}
