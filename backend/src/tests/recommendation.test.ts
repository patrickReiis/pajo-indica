import { getAllBooksFromDb } from '../db/database'; 
import { getRecommendedBooks } from '../recommendation';
import { MatchStatus } from '../types';

describe('Testing the recommendation algorithm', () => {
    
    const books = getAllBooksFromDb();

    test('Percentage should be integer', () => {
        const percentage = [{percentage: 100}];
        const bookTitle = 'outros jeitos de usar a boca' 
        expect((getRecommendedBooks(bookTitle, 1) as MatchStatus[])).toMatchObject(percentage)
    });

    test('Length should be greater or equal than 3', () => {

        const bookTitle = 'histórias do povo'; 
        const booksAmount = 3

        expect((getRecommendedBooks(bookTitle, booksAmount) as MatchStatus[]).length).toBeLessThanOrEqual(3)
    });
})
