const express = require("express");
const router = express.Router();
const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderSecondPage
} = require('../controllers/staticController');

router.get("/", renderSignupPage);

router.get("/login", renderLoginPage);

router.get("/home", renderHomePage);

router.get("/second",renderSecondPage);

module.exports = router;
