const User = require('../models/user.model');

const getAllUsers = (req, res) => {

    try {
        const users = User.find();
        
        if (!users) {
            return res.status(404).json({ message: "No existen usuarios" });
        }
        
        res.status(200).json({ message: "Obtener a todos los usuarios" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById = (req, res) => {
    try {
        res.status(200).json({ message: "Obtener usuario" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    try {
        res.status(200).json({ message: "Usuario encontrado", user });
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
    getUserByEmail,
    updateUser,
    deleteUser
}