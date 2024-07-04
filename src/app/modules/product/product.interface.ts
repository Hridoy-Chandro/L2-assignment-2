import { Schema, model, connect } from 'mongoose';



export type phoneProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["smartphone", "mobile", "dual camera", "128GB"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };


export type warlessProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["computer", "peripherals", "wireless", "ergonomic"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };

  
export type speakerProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["audio", "portable", "wireless", "speaker"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };


export type yogaProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["yoga", "fitness", "eco-friendly", "non-slip"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };
export type shoeProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["running", "shoes", "lightweight", "breathable"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };
export type kettleProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["kitchen", "appliance", "electric", "kettle"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };



export type gamingProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["gaming", "keyboard", "mechanical", "RGB"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };


export type watchProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["smartwatch", "wearable", "fitness", "GPS"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };

export type headphoneProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["audio", "headphones", "wireless", "noise-cancelling"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };


export type coffeeProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: ["kitchen", "coffee", "appliance", "programmable"];
    variants: [
        {
           type: string,
           value: string
          },
         
    ];
    inventory:  {
        quantity: number,
        inStock : boolean
      };
  };

const Product = model<>



