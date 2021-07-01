import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiRoutes from './routes';
import './config';

// initializations
const app: Express = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', apiRoutes);

export default app;
