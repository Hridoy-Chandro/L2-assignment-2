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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
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
    }catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
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
    }catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
};

const updateSingleProduct = async (req: Request, res: Response) => {
    try{
      const {productId} = req.params;
        const result = await productServices.updateProductFromDB(productId)
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
          });
    }catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
    try{
      const {productId} = req.params;
        const result = await productServices.updateProductFromDB(productId)
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: result,
          });
    }catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
};



export const productControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct

}


