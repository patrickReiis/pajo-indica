import express, {Application, Request, Response } from 'express';

export const app:Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req:Request, res:Response) => {
    res.end('Hi');
})

app.post('/api/v1/book/register', (req: Request, res: Response) => {
    console.log(req.body)
    res.end('Test')
})
