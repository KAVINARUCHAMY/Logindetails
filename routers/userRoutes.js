const express = require("express");
const router = express.Router();
const{handleUserLogin,handleUserSignup,handleHomePage} = require('../controllers/userController');

router.post("/home",handleHomePage);

router.post('/login',handleUserLogin);

router.post("/signup",handleUserSignup);



module.exports = router;