import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use("/", (req: Request, res: Response): void => {
    res.json({ message: "Hello world." });
});

export default app;