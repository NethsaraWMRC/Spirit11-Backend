# Spirit11-Backend

A robust Node.js backend system powering the Spirit11 cricket management platform with secure API endpoints and MongoDB integration.

## 📋 Project Overview

Spirit11-Backend provides the server-side infrastructure for the Spirit11 cricket management system, featuring:

-RESTful API for player and team data management

-MongoDB database integration with Mongoose

-Authentication and authorization with JWT

-Data validation and error handling

## ⚙️ Setup & Installation

### Prerequisites

-Node.js (v14+)
-MongoDB
-Git

### Backend Setup

#### Run backend

1. Install dependencies:

sh
npm install


2. Create a .env file with the following variables:

`sh
PORT=5000
MONGODB_URI=mongodb://localhost:27017/spirit11
JWT_SECRET=your_jwt_secret_key


3. Start the server:

sh
npm run dev
`

## Note

### Player Model

The backend uses a Player model that differs from the dataset provided. Below is the mapping between our model and the dataset:

### Our Player Table

sh
name: { type: String, required: true },
  unversity: { type: String, required: true },
  category: { type: String, required: true },
  totalRuns: { type: Number, required: true },
  ballsFaced: { type: Number, required: true },
  inningsPlayed: { type: Number, required: true },
  wickets: { type: Number, required: true },
  oversBowled: { type: Number, required: true },
  runsConceded: { type: Number, required: true },
  isNewPlayer: { type: Boolean, default: true },


### Given Player Table

sh
Name: string;
  University: string;
  Category: string;
  "Total Runs": number;
  "Balls Faced": number;
  "Innings Played": number;
  Wickets: number;
  "Overs Bowled": number;
  "Runs Conceded": number;


## 🚀 Features

### Player Management

View comprehensive player statistics including batting average, strike rate, bowling economy
Filter and search players by various criteria
Add new players to the database
View detailed player profiles with performance metrics

### Tournament Management

View tournament summaries and statistics
Track team and player performance across matches
Data visualization for key performance indicators

### User Interface

Responsive design for mobile and desktop views
Dark/light mode toggle
Interactive tables and charts
Pop-up modals for detailed information

## 🧪 Using the Application

### Player Management

-Navigate to the "Players" section from the sidebar
-View the player list with key statistics
-Use search and filters to find specific players
-Click on a player to view detailed statistics
-Admin users can add or remove players marked as "New Players"

### Admin Features

-View tournament summaries with aggregated statistics
-Monitor player performance across tournaments
-Track team statistics and match results

## 🛠️ Technology Stack

-Runtime: Node.js
-Framework: Express.js
-Database: MongoDB
-ODM: Mongoose
-Authentication: JWT
-Validation: Express Validator

```

```
