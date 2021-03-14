import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes.js';

class App {
    public express: express.Application;

    public constructor () {
        this.express = express();

        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares () {
        this.express.use(cors());
        this.express.use(express.json());
    }

    private database () {
        mongoose.connect('mongodb://localhost/tsnode', {
            useNewUrlParser: true
        });
    }

    private routes () {
        this.express.get('/', (req, resp) => {
            return resp.send('hello world.');
        });

        this.express.use(routes);
    }
}

export default new App().express;
