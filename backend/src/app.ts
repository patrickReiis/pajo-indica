import 'reflect-metadata';
import express, {Application, Request, Response } from 'express';
import { isBook } from './validation';
import { notValidBookObj, bookAlreadyExist, bookRecommendWrongFormat } from './messages';
import { getImgFileType, createImageFile } from './custom-utils';
import { dataSource } from './db/get-data-source';
import { Book } from './db/entity/Book';
import { getRecommendedBooks } from './recommendation';
import { ErrorDb, Book as BookType } from './types';
import { getAllBooksFromDb } from './db/database';
import * as path from 'path';
import * as fs from 'fs';

export const app:Application = express();
app.use(express.json( {limit: '10mb' } ));
app.use(express.urlencoded({ extended: true }));

app.get('/*', (req:Request, res:Response) => {
    const filePath = path.join(__dirname, 'public', req.url);
    const extName = path.extname(filePath);
    let contentType: string;

    switch(extName) {
        case '.jpg':
           contentType = 'image/jpeg';
           break; 
        case '.jpeg':
           contentType = 'image/jpeg';
           break; 
        case '.png':
            contentType = 'image/png';
            break
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end();
            return
        }
        res.writeHead(200, {'Content-Type': contentType })
        res.end(data);
    })
    
})

app.post('/loadScript', async (req: Request, res:Response) => {
    try {
        // script to save JSON in PostgreSQL database using TypeORM
        const books = await getAllBooksFromDb(true);
        books.forEach(async (e) => {
            const book = new Book()
            book.title = e.title;
            book.author = e.author;
            book.genre= e.genre as BookType['genre'];
            book.imagePath = e.imagePath as string;
            book.keywords = e.keywords;
            const bookRepo = await dataSource.getRepository(Book).save(book);
            console.log(bookRepo)
        })
        res.end('Loaded successfuly');
        return
    }
    catch (e) {
        console.log('Error during script database loading', e);
        res.end('Failed');
        return
    }
})

app.post('/api/v1/book/register', async (req: Request, res: Response) => {

    const bodyData = req.body 

    if (isBook(bodyData) === false) {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(notValidBookObj))
        return
    }

    try {

        await dataSource.transaction(async (transactionalEntityManager) => {

            const book = new Book();
            book.author = bodyData.author.toLowerCase(); 
            book.title = bodyData.title.toLowerCase(); 
            book.genre = bodyData.genre.toLowerCase(); 
            book.keywords = bodyData.keywords.map((element:string) => element.toLowerCase()); 

            const bookSaved = await transactionalEntityManager.save(book); // Saving so it can get the id
            const bookId = bookSaved.id;

            const imgType =  getImgFileType(bodyData.imageBase64);
            book.imagePath = `media/${bookId}.${imgType}`; 

            await transactionalEntityManager.save(book);

            createImageFile(book.imagePath, bodyData.imageBase64)
            res.json({success: 'Livro registrado com sucesso!'})
            return

        })
    }
    catch (err:any) {
        if (err.code == '23505'){ // This code means 'unique_violation' - See https://www.postgresql.org/docs/current/errcodes-appendix.html
            res.writeHead(403, {'Content-Type': 'application/json'}); // a request might be forbidden for reasons unrelated to credentials
            res.end(JSON.stringify( { error:  bookAlreadyExist.errorMsg })) 
            return
        } 
        else {
            console.log(err);
            res.writeHead(500);
            res.json({error: 'Erro do servidor'});
            return
        }

    }
})

app.post('/api/v1/book/recommend', async (req:Request, res:Response) => {
    const bookName = req.body['book'];

    if (typeof bookName !== typeof '') {
        res.status(400).json({error: bookRecommendWrongFormat})
        return
    }

    const similarBooks = await getRecommendedBooks(bookName, 3);

    if (((similarBooks as ErrorDb).code) === 'target-not-found') {
        res.status(404).json({errors: (similarBooks as ErrorDb).errorMsg })
        return
    }

    res.json(similarBooks)
    return
})
