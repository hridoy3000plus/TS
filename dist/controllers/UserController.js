"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    constructor() {
        this.userService = new UserService_1.UserService();
    }
    addUser(name, email) {
        return this.userService.addUser(name, email);
    }
    updateUser(id, name, email) {
        return this.userService.updateUser(id, name, email);
    }
    getUser(id) {
        return this.userService.getUser(id);
    }
    getAllUsers() {
        return this.userService.getAllUsers();
    }
}
exports.UserController = UserController;
