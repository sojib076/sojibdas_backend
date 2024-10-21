import express from 'express';
import { Request, Response } from 'express';
const app = express();
app.use(express.json());
import cors from 'cors';
import { studentRouter } from './App/modules/student/student.route';

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/v1/', studentRouter);

export default app;
