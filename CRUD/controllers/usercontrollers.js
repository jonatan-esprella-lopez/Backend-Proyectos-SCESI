const User = require('../models/user.model');

const getAllUsers = (req, res) => {
    try {
        const users = User.find();
        if (!users) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json({ message: "Get Users" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById = (req, res) => {
    try {
        res.status(200).json({ message: "Get User" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = (req, res) => {
    try {
        res.status(200).json({ message: "Update User" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUser = (req, res) => {
    try {
        res.status(200).json({ message: "Delete User" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}