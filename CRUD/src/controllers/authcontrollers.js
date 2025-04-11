const User = require('../models/user.model');
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
    try {
        const { name, lastname, email, country, city, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            lastname,
            email,
            country,
            city,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        
        const dataEmail = await User.findOne({ email });

        if (dataEmail) {
            const isPasswordValid = await bcrypt.compare(password, dataEmail.password);
            if (isPasswordValid) {
                res.status(200).json({ message: "Credenciales ingresados correctamente" });
            } else {
                res.status(401).json({ message: "Contraseña incorrecta" });
            }
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }

    }catch{
        res.status(500).json({ message: error.message });
    }
}

const logoutUser = async (req, res) => {

}

const forgotPassword = async (req, res) => {

}

const resetPassword = async (req, res) => {

}

const verifyToken = async (req, res) => {

}

const refreshToken = async (req, res) => {

}


module.exports = {
    createUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    verifyToken,
    refreshToken
}