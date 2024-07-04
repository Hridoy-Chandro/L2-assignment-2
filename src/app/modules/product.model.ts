import { Schema, model, connect } from 'mongoose';
import { coffeeProduct, gamingProduct, headphoneProduct, kettleProduct, phoneProduct, shoeProduct, speakerProduct, warlessProduct, watchProduct, yogaProduct } from './product/product.interface';


const phoneProductSchema = new Schema<phoneProduct>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    variants: [
      {
        type: String,
        required: true,
      },
    ],
    inventory: {
      type: String,
      required: true,
    },
  });
  


const warlessProductSchema = new Schema<warlessProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  variants: [
    {
      type: String,
      required: true,
    },
  ],
  inventory: {
    type: String,
    required: true,
  },
});


const speakerProductSchema = new Schema<speakerProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  variants: [
    {
      type: String,
      required: true,
    },
  ],
  inventory: {
    type: String,
    required: true,
  },
});


const yogaProductSchema = new Schema<yogaProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  variants: [
    {
      type: String,
      required: true,
    },
  ],
  inventory: {
    type: String,
    required: true,
  },
});


const shoeProductSchema = new Schema<shoeProduct>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    variants: [
      {
        type: String,
        required: true,
      },
    ],
    inventory: {
      type: String,
      required: true,
    },
  });
const kettleProductSchema = new Schema<kettleProduct>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    variants: [
      {
        type: String,
        required: true,
      },
    ],
    inventory: {
      type: String,
      required: true,
    },
  });
const gamingProductSchema = new Schema<gamingProduct>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    variants: [
      {
        type: String,
        required: true,
      },
    ],
    inventory: {
      type: String,
      required: true,
    },
  });
const watchProductSchema = new Schema<watchProduct>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    variants: [
      {
        type: String,
        required: true,
      },
    ],
    inventory: {
      type: String,
      required: true,
    },
  });
const headphoneProductSchema = new Schema<headphoneProduct>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    variants: [
      {
        type: String,
        required: true,
      },
    ],
    inventory: {
      type: String,
      required: true,
    },
  });

const coffeeProductSchema = new Schema<coffeeProduct>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    variants: [
      {
        type: String,
        required: true,
      },
    ],
    inventory: {
      type: String,
      required: true,
    },
  });




const phoneProduct = model<phoneProduct>('phoneProduct', phoneProductSchema)

