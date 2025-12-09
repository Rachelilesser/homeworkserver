import express, { Request, Response }  from 'express';
import {router as usersRouter} from './users/Userrouter';
import {router as booksRouter} from './book/Bookrouter';
import {router as borrowriuter} from './borrow/Borrowrouter';
import {myDB} from './db';
const app = express();

app.use(express.json());
myDB.getDB();

app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/borrow', borrowriuter);

app.use((err: Error, req: Request , res: Response, next: any) => {
    res.status(500).send(err);
});

export default app;
