"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("./controllers/UserController");
const userController = new UserController_1.UserController();
// Adding Users
const user1 = userController.addUser("Alice", "alice@example.com");
const user2 = userController.addUser("Bob", "bob@example.com");
console.log("Users added:", user1, user2);
// Get all users
console.log("All users:", userController.getAllUsers());
// Update user
const updatedUser = userController.updateUser(user1.id, "Alice Cooper", "alicecooper@example.com");
console.log("Updated user:", updatedUser);
// Get a specific user
const user = userController.getUser(user2.id);
console.log("Get user:", user);
