const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    updateUser,
    getUserByEmail,
    deleteUser,
    getUserById,
  } = require('../controllers/usercontrollers');

router.get('/getallusers', getAllUsers);
router.get('/getuser/:id', getUserById);
router.get('/getUserByEmail/:email', getUserByEmail);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);


module.exports = router;