import { Schema, model } from 'mongoose';
import { coffeeProduct, gamingProduct, headphoneProduct, kettleProduct, phoneProduct, shoeProduct, speakerProduct, warlessProduct, watchProduct, yogaProduct } from './product.interface';


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
    inventory:{
      quantity: {type: Number, required: true},
      inStock: {type: Boolean, required: true}
    }
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
  inventory:{
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
  }
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
  inventory:{
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
  }
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
  inventory:{
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
  }
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
   inventory:{
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
  }
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
   inventory:{
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
  }
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
   inventory:{
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
  }
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
   inventory:{
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
  }
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
   inventory:{
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
  }
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
   inventory:{
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
  }
  });



export const phoneProductModel = model<phoneProduct>('product', phoneProductSchema)

