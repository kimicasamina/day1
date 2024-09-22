# day1 Habit Tracker

website: https://day1-habit-tracker.onrender.com

The Habit Tracker application is designed to help users build and maintain positive habits. Users can create, edit, and delete habits, track their progress, and visualize their performance over time. The application offers a user-friendly interface for easy interaction and engagement.

## Features

- User Authentication: Users can sign up, log in, and manage their accounts.
- Habit Management: Create, edit, and delete habits.
- Progress Tracking: Daily check-ins and visual representation of progress.
- Statistics Dashboard: View habit completion rates and trends over time.
- Responsive Design: Accessible on both desktop and mobile devices.

## Architecture

The application follows a client-server architecture:

- Frontend: Built with React and tailwindcss for a dynamic user interface.
- Backend: Node.js and Express for handling API requests and user authentication.
- Database: MongoDB for storing user data and habits.

## Technology Stack

- Frontend:
  React
  Tailwind CSS for styling
  Axios for API requests
  Redux for handling global states

- Backend:
  Node.js
  Express
  MongoDB
  Mongoose for data modeling

## API Documentation

### Endpoints

1. User Authentication

### Sign Up

- POST /users/register
- Request body

  ```js
      {
          "fullname": "string",
          "username": "string",
          "email": "string",
          "password": "string"
      }
  ```

#### Response

- Status: 201 Created
- Body:
  ```js
  {
    success: true;
  }
  ```

### Log in

- POST /users/login
- Request body

  ```js
      {
          "fullname": "string",
          "username": "string",
          "email": "string",
          "password": "string"
      }
  ```

#### Response:

- Status: 200 OK
- Token: JWT token
- Body:
  ```js
  {
    "success": "true",
    "user": {
        <!-- user details -->
      },
  }
  ```

### WIP

[x] - add navbar link active states
[] - custom toaster message
[] - store for list of entries
[] - implement calendar with weekdays
[] - dashboard and analytics
