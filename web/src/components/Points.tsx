import "../styles/Points.css"
import React, { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Points: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`color-key-container-new ${isCollapsed ? "collapsed" : ""}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        {isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        <span className="text-navy pl-2">Point System!</span>
      </button>
      {!isCollapsed && (
        <div className="flex flex-col mt-7.5 pb-2 px-2">
            <span className="text-navy pl-2">10 POINTS: Joining an event</span>
            <span className="text-navy pl-2">20 POINTS: Creating an event</span>
        </div>
      )}
    </div>
  );
};

export default Points;
