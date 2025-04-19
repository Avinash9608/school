# School Management System

A comprehensive school management system built with React, Node.js, Express, and MongoDB.

## Features

- **User Management**: Admin, Teachers, Students, Parents, Librarian, Staff roles
- **Student Management**: Student profiles, class-wise listings, attendance, fees, results
- **Class Management**: Class creation, subject assignment, scheduling
- **Attendance Tracking**: Student and staff attendance management
- **Fee Management**: Fee collection, receipts, reports
- **Result Management**: Exam results, grade calculation, report cards
- **Library Management**: Book inventory, issue/return tracking, overdue management
- **Staff Management**: Staff profiles, attendance, salary management
- **Facility Management**: Computer labs, smart classes, educational resources

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/school-management-system.git
   cd school-management-system
   ```

2. Install dependencies for both frontend and backend:
   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/school-management
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. Start the development servers:
   ```
   # Start backend server
   cd server
   npm run dev

   # In a new terminal, start frontend server
   cd ../client
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
school-system/
├── client/                 # Frontend React application
│   ├── public/             # Public assets
│   └── src/                # React source files
│       ├── components/     # React components
│       ├── context/        # Context API files
│       ├── utils/          # Utility functions
│       ├── assets/         # Static assets
│       ├── App.js          # Main App component
│       └── index.js        # Entry point
├── server/                 # Backend Node.js application
│   ├── src/                # Source files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   ├── config/         # Configuration files
│   │   └── index.js        # Entry point
│   └── package.json        # Backend dependencies
└── package.json            # Project configuration
```

## License

This project is licensed under the MIT License.
