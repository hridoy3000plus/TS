# User Management System (TypeScript)

A simple User Management System built using TypeScript and Object-Oriented Programming (OOP) principles. This application allows you to add, edit, and display users.

## Features

- Add users with a name and email.
- Update user details (name and email).
- Fetch details of a single user by ID.
- Fetch all users.

### Description of Components

- **User Model** (`src/models/User.ts`): Represents the user with properties like `id`, `name`, and `email`.
- **UserService** (`src/services/UserService.ts`): Handles the core logic for adding, editing, and retrieving users.
- **UserController** (`src/controllers/UserController.ts`): Provides methods for adding, updating, and retrieving users, interfacing with the `UserService`.
- **app.ts**: Contains the main code to run the application and demonstrate the functionality.

## Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/hridoy3000plus/TS.git
   cd TS
   ```

## Running the Application

1. **Build the TypeScript code** and start the application:

   ```bash
   npm start
   ```

   This will compile the TypeScript code and run the compiled JavaScript using Node.js.

2. **For Development Mode**:

   If you want to work on the code and auto-compile TypeScript files on change, you can run:

   ```bash
   npm run dev
   ```

   This will start a TypeScript watcher that recompiles code whenever a `.ts` file is changed.

## Example Usage

The `app.ts` file demonstrates the basic usage of the user management system. It adds users, updates user details, and fetches user information.

### Example Output:

```bash
Users added: User { id: 1, name: 'Alice', email: 'alice@example.com' } User { id: 2, name: 'Bob', email: 'bob@example.com' }
All users: [ User { id: 1, name: 'Alice', email: 'alice@example.com' }, User { id: 2, name: 'Bob', email: 'bob@example.com' } ]
Updated user: User { id: 1, name: 'Alice Cooper', email: 'alicecooper@example.com' }
Get user: User { id: 2, name: 'Bob', email: 'bob@example.com' }


```
