import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

export { app, PORT };