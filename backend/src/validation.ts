import type { Book } from './types';

export function isBook(obj:any):boolean{

    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        return false
    }
    

    const userObjKeys = Object.keys(obj);

    const mockBook: Book = {title:'', author:'', genre:'poesia', keywords: [], imageBase64: 'any'} // Used for reference since types doesn't exist at runtime
    const mockBookKeys = Object.keys(mockBook);

    if (userObjKeys.length !== mockBookKeys.length) return false;

    if (Array.isArray(obj.keywords) === false) return false;

    for (let i = 0; i < userObjKeys.length; i++) {
        if ((userObjKeys[i] in mockBook) === false) { // 'X in object' checks if object has the property X
            return false
        } 

    }

    // Checking if the keywords array is only made of strings
    for (let i = 0; i < obj.keywords.length; i++) {
        if (typeof obj.keywords[i] !== 'string') {
            return false
        }
    } 

    // Checking if the values of the properties of the object are strings
    for (const i in obj) { 
        if (i == 'keywords') continue;
        if (typeof obj[i] !== 'string') return false;
    }


    return true
}
