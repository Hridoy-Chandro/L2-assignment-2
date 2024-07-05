import { phoneProduct } from "./product.interface";
import { phoneProductModel } from "./product.model";

const createProductIntoDB = async (product: phoneProduct) => {
    const result = await phoneProductModel.create(product)
    return result;
};


const getAllProductFromDB = async () => {
    const result = await phoneProductModel.find();
    return result;
};

const getSingleProductFromDB = async (_id: string) => {
    const result = await phoneProductModel.findOne({_id});
    return result;
};


export const productServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB

}



