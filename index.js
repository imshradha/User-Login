import express from 'express';
import routes from './routes/route.js';
import dotenv from 'dotenv';
import connection from './database/db.js';

const app = express();

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.use('/', routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))