import { isBook } from '../validation';
import type { Book } from '../types';


describe('Testing if the user input is a valid Book', () => {

    test('Must be a book by isBook() returning true', () => {
        const fakeBook: Book = {title:'', author:'', genre:'poesia', keywords: [], imageBase64: 'any'}
       expect(isBook(fakeBook)).toEqual(true); 
    }) 

    test('Must NOT be a book by isBook() returning false', () => {
        const fakeBook: Book|any = {title:'', author:'', genre:'poesia', keywords: [], car: 'anything'} // object has more properties than the Book type
        expect(isBook(fakeBook)).toEqual(false); 

        const fakeBook2: Book|any = {title:'', author:''} // object misses some Book properties 

        expect(isBook(fakeBook2)).toEqual(false); 

        const fakeBook3: Book|any = {title:'', author:'', genre:'poesia', keywords: 'not array' } // keywords is not array 

        expect(isBook(fakeBook3)).toEqual(false); 
        
        const fakeBook4: Book|any = {title:'', author:'', genre:'poesia', keywords: [1, 'any message :D'] } // keywords is not an array of strings 

        expect(isBook(fakeBook4)).toEqual(false); 

        const fakeBook5: Book|any = {title: null, author:2, genre: false, keywords: [ 'any message :D'] } // object keys except for 'keywords' propertie are not strings 

        expect(isBook(fakeBook5)).toEqual(false); 

    }) 

})
