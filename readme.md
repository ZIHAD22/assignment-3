## Assignment 3 : <a href="https://www.facebook.com/" style="color: red;">Live website</a>

To develop the backend for the sports facility booking platform, we'll follow the requirements outlined, using TypeScript with Express.js for the web framework and Mongoose for MongoDB ODM. Below is a structured approach to implementing the key functionalities: error handling, CRUD operations, authentication & authorization, and transaction handling if needed.

### Technology Stack

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **ODM & Validation Library**: Mongoose for MongoDB

### Setup and Implementation

#### Step 1: Project Setup

Initialize a TypeScript project and install necessary packages:

**This command will install all package that need to run this project.**

```bash
npm install
```

**This command will convert ts file into js file.**

```bash
npm run build
```

**This command will run development server.**

```bash
npm run dev
```

**You will find all command in package.json file. You can also modify in your clone**
This will install all important packages for this project

### API Endpoints (Brief Overview)

#### User Routes

- POST `/api/auth/signup`: User registration.
- POST `/api/auth/login`: User login.

#### Facility Routes

- POST `/api/facility`: Create a new facility (admin only).
- PUT `/api/facility/:id`: Update a facility (admin only).
- DELETE `/api/facility/:id`: Soft delete a facility (admin only).
- GET `/api/facility`: Get all facilities.

#### Booking Routes

- GET `/api/check-availability`: Check availability of time slots for booking.
- POST `/api/bookings`: Create a booking (user only).
- GET `/api/bookings`: View all bookings (admin only).
- GET `/api/bookings/user`: View bookings by user (user only).
- DELETE `/api/bookings/:id`: Cancel a booking (user only).

### Conclusion

By following these steps, you can develop a robust backend for the sports facility booking platform using TypeScript, Express.js, Mongoose, and other necessary libraries. Ensure to handle errors effectively, implement proper authentication, and validate inputs to create a secure and reliable application.
