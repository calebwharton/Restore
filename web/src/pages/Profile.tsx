import React from 'react';
import NavBar from "@components/NavBar";
import '../styles/profile.css';

function Profile() {
    return (
        <div className="profile-container">
            <NavBar />
            <div className="profile-content">
                <h1 className="profile-title">MY  ACCOUNT</h1>
                <hr className="title-line" />
                <div className="profile-details">
                    <div className="picture-placeholder"></div>
                    <div className="profile-info">
                        <p className="profile-name">NAME</p>
                        <p className="events-attended">Events Attended: 5</p>
                        <p className="events-attended">Points: 10</p>
                        <p className="events-attended">placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
