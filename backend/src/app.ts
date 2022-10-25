import express, {Application, Request, Response } from 'express';
import { isBook } from './validation';
import { notValidBookObj } from './messages';


export const app:Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req:Request, res:Response) => {
    res.end('Hi');
})

app.post('/api/v1/book/register', (req: Request, res: Response) => {
    if (isBook(req.body) === false) {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(notValidBookObj))
        return
    }

    res.end('It is book')
})
