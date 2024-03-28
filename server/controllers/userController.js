const User = require('../models/userModel');


// login user

const loginUser = async (req, res) => {
    res.json({msg: 'login User'})
 };


// signup user
const signupUser = async (req, res) => {
    res.json({msg: 'signup User'})
 };


 module.exports = {
    loginUser,
    signupUser
 }

