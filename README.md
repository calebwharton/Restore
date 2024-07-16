# Welcome to Restore!
This is a 48-hour project created by team Braincells which was awarded as an honourable mention at the 2024 DEVS Hackathon. 

The theme for this hackathon was "Address critical **social, humanitarian**, and **environmental** issues to make a positive impact on humanity. Innovate for a better world."

Restore is a dedicated social network focused on environmental cleanups. Our platform empowers communities by simplifying the process of creating, joining, and promoting cleanup events at local beaches, driving meaningful change to local environments!

<img width="1470" alt="img-1" src="https://github.com/user-attachments/assets/aa5805fd-ae04-40b4-a266-fdcc1c35eb3b">



## Background
Research by Sustainable Coastlines NZ reveals that New Zealand's beaches have an average of over 300 pieces of rubbish per kilometer, with some areas having thousands. This pollution harms local ecosystems, endangers native wildlife, and spoils the beaches. 

Despite 60% of people being concerned about ocean plastic pollution, Kiwis face challenges in beach cleaning efforts. These include difficulty in participating in cleanup events due to low visibility and limited frequency of cleanups due to volunteer organizations' resource constraints, focusing mainly on heavily polluted or urban areas.

To tackle these issues, the solution proposed is our web app "Restore," a dedicated social network for organizing beach cleanups.

<img width="1470" alt="about" src="https://github.com/user-attachments/assets/869201a5-9dda-4e46-9a6f-627eb3483f58">
<img width="1470" alt="about-2" src="https://github.com/user-attachments/assets/02ec9981-2fa8-462b-b327-df336188ee08">



## Target Audience
Based on our research, Restore's primary user demographic are young adults passionate about taking care of our environment. This generation's strong affinity for digital solutions and passion for climate activism make them an ideal target audience. Notably, 32% of Gen Z have taken action to help protect the environment in the past year, such as volunteering or donating. This inclination towards proactive environmental engagement makes them highly receptive to a platform like Restore, and their tech-savviness ensures they will effectively navigate and utilise Restore's features.

Additionally, Restore includes a local leaderboard that displays the top 10 active users in an area, fostering friendly competition. This gamified element targets Gen Z's competitive nature and desire for social recognition, further encouraging consistent participation in beach cleanups. By leveraging these motivations, Restore aims to build a strong, engaged community dedicated to maintaining the cleanliness of our beaches.

<img width="1470" alt="Leaderboard" src="web/src/assets/leaderboard.jpg">



## Benefits
Restore addresses the pain points of our target audience in three ways:

**Simple to Use:**

Restore is intuitive and accessible, allowing anyone to set up or join a cleanup in seconds. The platform includes a comprehensive map where users can see upcoming events in their area and RSVP.

**Community-Led:**

Restore focuses on local communities by ensuring that the events displayed are relevant to users. We’ve also included a local leaderboard that displays the top 10 active users in an area, fostering friendly competition. This local focus helps build a sense of community and collective responsibility for maintaining the cleanliness of our beaches.

**Frequent Local Events:**

Restore encourages regular events tailored to local needs. This provides more opportunities for community involvement and sustained efforts against plastic pollution compared to the infrequent nature of events organized by volunteer organizations.


We believe that this solution will be sustainable in the long run as the platform running costs are low. However, we are dependent on the site acquiring a large number of users to have an impact.

<img width="1470" alt="Screenshot 2024-07-16 at 2 58 04 AM" src="https://github.com/user-attachments/assets/7d5e9076-17f2-46df-a538-1ce0ea928afb">
<img width="1470" alt="Screenshot 2024-07-16 at 2 58 34 AM" src="https://github.com/user-attachments/assets/dceda4ee-4fef-4ad4-a693-63459b5c2686">

## Technologies
- ReactJS, NodeJS, ExpressJS, MongoDB, Google Maps API

<div style="display: flex; align-items: center;">
  <img src="https://github.com/user-attachments/assets/ac48e3ed-756b-4f91-bb18-d0f842f4d0e0" alt="Image 1" height="200" />
  <img src="https://github.com/user-attachments/assets/31ad0d31-b422-4ecb-b1c6-ac18c3f335bf" alt="Image 2" height="200" />
</div>


# How to Start
To get started with the project, follow these steps:

## 1. Setup Environment Variables

**For the Web Application:**

Create a .env file in the web directory with the following content. Replace the placeholders with your actual keys:

```
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
VITE_SERVER_URL=http://localhost:3000
```

**For the API:**
Create a .env file in the api directory with the following content. Replace the placeholder with your actual database URL:

```
DATABASE_URL="YOUR_MONGODB_CONNECTION_STRING"
```

## 2. Install Dependencies and Start the Servers
**For the API**
1. Open a terminal and navigate to the api directory:

```
cd api
```

2. Install the dependencies:

```
yarn install
```

3. Start the development server:
```
yarn run dev
```

**For the Web Application:**
1. Open a terminal and navigate to the web directory:
```
cd web
```

2. Install the dependencies:

```
yarn install
```

3. Start the development server:
```
yarn run dev
```

Following these steps will set up the project and start the development servers for both the web application and the API.


## Team
- Justin Huang - Tech Lead
- Caleb Wharton - Project Manager
- Rithvik Sharma - Backend
- Connie Ding - Design
- Oorja Gandhi - Frontend & Design
- Nancy Huang - Frontend & Design

![image](https://github.com/user-attachments/assets/e500a65d-b256-4f81-a85b-6a1d6bccd106)
