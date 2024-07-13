import React, { useState } from "react";
import "../styles/ColourKey.css";
import Pin from "@mui/icons-material/Place";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ColorKey: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`color-key-container ${isCollapsed ? "collapsed" : ""}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        {isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        <span className="text-navy pl-2">Icon Key</span>
      </button>
      {!isCollapsed && (
        <div className="flex flex-col mt-7.5 pb-2 px-2">
          <div className="pb-2">
            <Pin sx={{ color: "#c2c2c2" }} />
            <span className="text-navy pl-2">No Events</span>
          </div>
          <div className="pb-2">
            <Pin sx={{ color: "#ff4a4a" }} />
            <span className="text-navy pl-2">Event Soon</span>
          </div>
          <div className="pb-2">
            <Pin sx={{ color: "#0096ff" }} />
            <span className="text-navy pl-2">Event in a While</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorKey;
