const required = require('express');
const router = required.Router();
const { 
    createUser, 
    loginUser, 
    logoutUser,
    forgotPassword,
    resetPassword,
    verifyToken,
    refreshToken
} = require('../controllers/authcontrollers');

router.post ('/register', createUser);
router.post ('/login', loginUser);
router.post ('/logout', logoutUser);
router.post ('/forgotpassword', forgotPassword);
router.post ('/resetpassword', resetPassword);
router.post ('/verifytoken', verifyToken);
router.post ('/refreshtoken', refreshToken);

