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

// Update an event by ID - idk if we need this - not gonna check it much
eventRoutes.put("/:id", async (req: Request, res: Response) => {
    const { title, description, price } = req.body;
    const id = req.params.id;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, { title, description, price }, { new: true });

        if (!updatedEvent) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json(updatedEvent);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default eventRoutes;

