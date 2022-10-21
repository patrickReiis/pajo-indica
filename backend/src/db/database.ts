import books from './books.json';
import type { Book } from '../types';

export function getAllBooksFromDb(): Book[]{
    return books as Book[]; 
}

export function getBookTargetFromDb(target: string):Book|null{
    const targetBook = getAllBooksFromDb().filter(e => e.title == target)[0]
    return targetBook ? targetBook : null 
}
