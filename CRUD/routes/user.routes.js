const express = require('express');
const router = express.Router();
const {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById,
} = require('../controllers/user.controller');

router.post('/createuser', createUser);
router.get('/getallusers', getAllUsers);
router.get('/getuser/:id', getUserById);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);


module.exports = router;