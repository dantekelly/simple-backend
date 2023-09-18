import { Request, Response, Router } from 'express';

export const healthCheckRouter: Router = Router();

healthCheckRouter.get('/', async (req: Request, res: Response) => {
  res.json({ message: 'Server is up and running!' });
});