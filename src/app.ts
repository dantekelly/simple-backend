import express, { Application, Request, Response } from 'express';
import { healthCheckRouter } from './routes/health-check';

const app: Application = express();

app.use('/health-check', healthCheckRouter);

export default app;
