import { Request, RequestHandler, Response } from 'express';

const helloWorld: RequestHandler = (req: Request<never>, res: Response<string>) => {
  res.status(200).send('Hello world!');
}

export default helloWorld;