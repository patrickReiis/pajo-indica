import express, {Application, Request, Response } from 'express';
import { isBook } from './validation';
import { notValidBookObj, bookAlreadyExist } from './messages';
import { getImgFileType, createImageFile } from './custom-utils';
import { dataSource } from './db/get-data-source';
import { Book } from './db/entity/Book';

export const app:Application = express();
app.use(express.json( {limit: '10mb' } ));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req:Request, res:Response) => {

    res.end('Hi');
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
