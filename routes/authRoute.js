const express = require("express");
const login = require("../controllers/authController/login");
const signup = require("../controllers/authController/signup");
const updateUser = require("../controllers/authController/update");
const deleteUser = require("../controllers/authController/deleteUser");

const router = express.Router();

router.post('/login',login);
router.post('/signup',signup);
router.put('/update',updateUser);
router.delete('/delete',deleteUser)

module.exports = router;