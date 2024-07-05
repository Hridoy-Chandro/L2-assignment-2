import express from 'express'
import { productControllers } from './product.controller'

const router = express.Router();



// will call controller func
router.post('/products', productControllers.createProduct);


router.get('/products', productControllers.getAllProduct);

router.get('/products/:productId', productControllers.getSingleProduct);


export const ProductRoutes = router;
