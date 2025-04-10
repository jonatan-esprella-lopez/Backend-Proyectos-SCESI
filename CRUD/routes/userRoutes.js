const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById,
  } = require('../controllers/usercontrollers');

router.get('/getallusers', getAllUsers);
router.get('/getuser/:id', getUserById);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);


module.exports = router;