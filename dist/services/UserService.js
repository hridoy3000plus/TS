"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_1 = require("../models/User");
class UserService {
    constructor() {
        this.users = [];
        this.nextId = 1;
    }
    addUser(name, email) {
        const newUser = new User_1.User(this.nextId++, name, email);
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id, name, email) {
        const user = this.users.find(user => user.id === id);
        if (user) {
            user.name = name;
            user.email = email;
            return user;
        }
        return null;
    }
    getUser(id) {
        return this.users.find(user => user.id === id);
    }
    getAllUsers() {
        return this.users;
    }
}
exports.UserService = UserService;
