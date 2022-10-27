import { getImgFileType } from '../custom-utils';

describe('Testing if the image file type returns the right file type', () => {

    test('Should return png', () => {
        const pngDataURI = 'data:image/png;base64,'
        expect(getImgFileType(pngDataURI)).toBe('png')
    })
    
    test('Should return jpg', () => {
        const pngDataURI = 'data:image/jpg;base64,'
        expect(getImgFileType(pngDataURI)).toBe('jpg')
    })
    
    test('Should return jpeg', () => {
        const pngDataURI = 'data:image/jpeg;base64,'
        expect(getImgFileType(pngDataURI)).toBe('jpeg')
    })
})
