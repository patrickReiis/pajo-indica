import type { Book, MatchStatus, ErrorDb }  from './types';
import { getAllBooksFromDb, getBookTargetFromDb } from './db/database'; 
import { targetNotFound as targetBookNotFound } from './messages';


export async function getRecommendedBooks(target: string, booksAmount: number):Promise<MatchStatus[]|ErrorDb>{

    const targetBook = await getBookTargetFromDb(target);  
    if (targetBook == null) return targetBookNotFound;

    const books = await getAllBooksFromDb();

    return filterBooks(targetBook, books, booksAmount);
}

/**
 * Returns top X books with the highest percentage match 
 * target:Book is removed from the allBooks[] when getting the top matches 
 */
function filterBooks(target: Book, allBooks: Book[], booksAmount: number):MatchStatus[] {
    const booksWithoutTarget = allBooks.filter(e => e.title!= target.title); 
    const booksStatus = bookRecommend(target, booksWithoutTarget);

    const booksFiltered: MatchStatus[] = []

    // Iterate through the amount of books desired, get the maximum match percentage between all the books
    for (let i = 0; i < booksAmount; i++){
        let maxMatch = 0;
        let index = 0;
        for (let j = 0; j < booksStatus.length; j++){
            if (maxMatch < booksStatus[j].percentage){
                maxMatch = booksStatus[j].percentage;
                index = j;
            }
        }
        if (booksStatus[index]) {
            booksFiltered.push(booksStatus[index])
            booksStatus.splice(index, 1);
        };
    }

    return  booksFiltered; 
}

/**
 * Returns all books and their percentage match
 * It does not remove the target book from the books database 
 * To call this function make sure the 'target:Book' is not inside the 'books:Book[]'
 */
function bookRecommend(target:Book, books: Book[]): MatchStatus[]{
    const booksRecommendedStts:MatchStatus[] = []
    const percentageLimit = 100;

    for (let i = 0; i < books.length; i++) {
        let count = 0;
        for (let j = 0; j < books[i].keywords.length; j++) {
            for (let k = 0; k < target.keywords.length; k++) {
                if (target.keywords[k] === books[i].keywords[j]) {
                    count ++
                }
            }
        }
        // Getting percentage match.
        //
        // A = Target Book 
        // B = Normal Book from the database
        //
        // If A has 5 keywords and that matches 5 out of 10 keywords of B then the match is 100%
        // If A has 10 keywords and it maches 5 out of 5 keywords of B then the match is 50%
        //
        // Percentage Formula = (numberOfMatches/A) * 100
        let percentage:number|string = `${(count/target.keywords.length) * 100}`; 
        percentage = Number.parseInt(percentage);
        
        if (books[i].genre == target.genre) percentage += 30; // If the genre is the same, add 30% 
        
        percentage = percentage > percentageLimit ? percentageLimit : percentage // If the percentage is greater than 100%, set percentage to 100%

        booksRecommendedStts.push({ book: books[i], percentage: percentage })
    } 

    return booksRecommendedStts 
}
