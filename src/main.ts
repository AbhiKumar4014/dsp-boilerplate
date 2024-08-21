import express from "express";
import dotenv from 'dotenv';
import feedRouter from "./routes/feedRoutes";

const app = express();

app.use('/', feedRouter);

export default app;
