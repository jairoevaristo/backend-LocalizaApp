import express from 'express';
import cors from 'cors';

import './database/connect';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(router);

export { app, PORT };