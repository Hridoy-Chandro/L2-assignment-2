import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const {products: productData} = req.body;
    const result = await productServices.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err){
    console.log(err);
  }
};


const getAllProduct = async (req: Request, res: Response) => {
    try{
        const result = await productServices.getAllProductFromDB()
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
          });
    }catch(err){
        console.log(err);
    }
};

const getSingleProduct = async (req: Request, res: Response) => {
    try{
      const {productId} = req.params;
        const result = await productServices.getSingleProductFromDB(productId)
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
          });
    }catch(err){
        console.log(err);
    }
};

export const productControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    

}


