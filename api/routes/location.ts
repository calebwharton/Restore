import { Router } from 'express';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import Location from '../db/Location';

const locationRoutes = Router();


//creating new event at location
//pass location in payload
locationRoutes.post("/", async (req: Request, res: Response) =>{
    const { locationName} = req.body;

    const newLocation = new Location({
        locationName: locationName,
    })

    try{
        const savedlocation = await newLocation.save();
        res.status(201).json(savedlocation);
    }catch (error: any){
        res.status(400).json({ message: error.message });
    }
});

//add events to location
locationRoutes.post("/add-event", async (req: Request, res: Response) =>{
    try{
        const {locationName, event} = req.body
        const location = await Location.findOne({locationName: locationName})
        if(!location){
            return res.status(404).json({ message: 'Invalid credentials' });
        }
        location.events.push(event)
        await location.save()
        res.status(200).json(location); 
        
    }catch (error: any){
        res.status(400).json({ message: error.message });
    }

})


export default locationRoutes;