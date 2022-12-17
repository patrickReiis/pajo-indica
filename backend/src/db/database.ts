import type { Book as BookType} from '../types';
import { dataSource } from './get-data-source';
import { Book } from './entity/Book';
const booksJSON = require('./books.json');

export async function getAllBooksFromDb(loadFromJSON=false): Promise<BookType[]>{
    if (loadFromJSON === true) {
        return booksJSON as BookType[]
    }

    const books = await dataSource.getRepository(Book).find({
        select: {
            title: true,
            author: true,
            imagePath: true,
            keywords: true,
            genre: true
        }
    })
    return books as  BookType[]; 
}

export async function getBookTargetFromDb(target: string):Promise<Book|null>{
    const targetBook = await dataSource.getRepository(Book).findOneBy({title: target});
    return targetBook ? targetBook : null 
}
