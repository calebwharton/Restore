import { Router } from "express";
import type { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../db/User";

const userRoutes = Router();

//create new user route
userRoutes.post("/", async (req: Request, res: Response) => {
    const { name, phoneNumber, email, password } = req.body;
    console.log(name, phoneNumber, email, password);
    try {
        //creating new user
        const newUser = new User({
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
        });

        //uploading new user to mongo
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

//for login page
//assuming email and password passed in payload
userRoutes.post("/check-user", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);

    try {
        //find user w the email and pass
        const user = await User.findOne({ email: email, password: password });

        console.log(user);
        if (!user) {
            //if no such user
            return res.status(404).json({ message: "Invalid credentials" });
        }

        //if user exists
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

//eventsAttended, + points
//need user id and event id
userRoutes.post("/add-event-attended", async (req: Request, res: Response) => {
    const { id, eventId } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            //if no such user
            return res.status(404).json({ message: "Invalid credentials" });
        }
        user.eventsAttended.push(eventId);
        user.points += 10;
        await user.save();

        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

//eventsCreated + points
//need user id and event id
userRoutes.post("/add-event-created", async (req: Request, res: Response) => {
    const { id, eventId } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            //if no such user
            return res.status(404).json({ message: "Invalid credentials" });
        }
        user.eventsCreated.push(eventId);
        user.points += 20;
        await user.save();

        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

userRoutes.get("/get/:id", async (req: Request, res: Response) =>{
  const { id } = req.params;
  console.log(id)
  try{
    const user = await User.findById(id);
    if (!user){
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user); 
  }catch (error: any){
    res.status(400).json({ message: error.message });
  }
})

userRoutes.get("/get-all-users", async (req: Request, res: Response) =>{
  try{
    const users = await User.find();
    res.status(200).json(users); 
  }catch (error: any){
    res.status(400).json({ message: error.message });
  }
})
export default userRoutes;  
