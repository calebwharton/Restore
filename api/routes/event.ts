import { Router } from 'express';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import Event from '../db/Event';

const eventRoutes = Router();

// Create a new event
eventRoutes.post("/", async (req: Request, res: Response) => {
    const { eventName, description, place, eventCreator } = req.body;

    try {
        const newEvent = new Event({
            eventName: eventName,
            description: description,
            place: place,
            eventCreator: eventCreator
        });

        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// Get an event by ID
eventRoutes.get("/byid/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json(event);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// Get all events
eventRoutes.get("/get-all-events", async (req: Request, res: Response) => {
    console.log("hi")
    try {
        const events = await Event.find({});

        if (!events.length) {
            return res.status(404).json({ message: "No items found" });
        }

        res.status(200).json(events);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// add attendees
eventRoutes.post("/add-atendee", async (req:Request, res:Response) =>{
    const {eventId, userId} = req.body
    console.log(eventId, userId)
    try{
        const event = await Event.findOne({_id : eventId})
        if (!event){
            return res.status(404).json({ message: 'Invalid credentials' });
        }

        event.atendees.push(userId)
        await event.save()
        res.status(200).json(event); 
    }catch (error: any){
        res.status(400).json({ message: error.message });
    }
})

// Remove attendee
eventRoutes.post("/remove-attendee", async (req: Request, res: Response) => {
    const { eventId, userId } = req.body;
    try {
        const event = await Event.findOne({ _id: eventId });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        const attendeeIndex = event.atendees.indexOf(userId);
        if (attendeeIndex === -1) {
            return res.status(404).json({ message: 'User not found in attendees' });
        }

        event.atendees.splice(attendeeIndex, 1);
        await event.save();
        res.status(200).json(event);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default eventRoutes;

