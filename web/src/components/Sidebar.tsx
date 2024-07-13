// Sidebar.tsx
import React, { useState } from 'react';
import "../styles/Sidebar.css"

interface SidebarProps {
    selectedMarker: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedMarker }) => {
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);
    const [isInterested, setIsInterested] = useState(false);
    const [eventDate, setEventDate] = useState('');

    const handleCreateEvent = () => {
        setIsCreatingEvent(true);
    };

    const handleSaveEvent = () => {
        // Save event logic here
        console.log(`Event created for ${selectedMarker} on ${eventDate}`);
        setIsCreatingEvent(false); // Reset state
    };

    return (
        <div className="sidebar">
            {isCreatingEvent ? (
                <div className="event-form">
                    <h2>Create Event for {selectedMarker}</h2>
                    <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                    <button onClick={handleSaveEvent}>Save Event</button>
                </div>
            ) : (
                <>
                    <h2 className="beach-name">{selectedMarker}</h2>
                    <hr className="title-line" />
                    <button
                        className={`interest-button ${isInterested ? 'active' : ''}`}
                        onClick={() => setIsInterested(!isInterested)}
                    >
                        {isInterested ? 'Interested' : 'Not Interested'}
                    </button>
                    <button className="create-event-button" onClick={handleCreateEvent}>
                        Create Event
                    </button>
                </>
            )}
        </div>
    );
};

export default Sidebar;
