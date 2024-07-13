import React, { useState } from 'react';
import '../styles/ColourKey.css'

const ColorKey: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`color-key-container ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="collapse-button" onClick={toggleCollapse}>
                {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
            {!isCollapsed && (
                <div className="color-key-content">
                    <div className="color-key-item">
                        <div className="color-flag no-event"></div>
                        <span>No Events</span>
                    </div>
                    <div className="color-key-item">
                        <div className="color-flag event-soon"></div>
                        <span>Event Soon</span>
                    </div>
                    <div className="color-key-item">
                        <div className="color-flag event-later"></div>
                        <span>Event in a While</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorKey;
