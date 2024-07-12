import { Router } from 'express';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import Item from '../db/Items';

const itemRoutes = Router();



itemRoutes.post("/", async (req: Request, res: Response) => {
    const{ title, description, price} = req.body
    // console.log(title, desc, price)

    try {
    //   creating new user
      const newItem = new Item({
        title: title,
        description: description,
        price: price
      })
  
      //uploading new user to mongo
      const savedUser = await newItem.save();
      
      res.status(201).json(savedUser);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  export default itemRoutes;
