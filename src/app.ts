import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());



// application routes
app.use('/api', ProductRoutes)




const getAController = (req: Request, res: Response) => {
  const a = 20;
  res.send(a);
}

app.get('/', getAController);

export default app;
