const express = require('express');
const { register, login, logout } = require('../controllers/AuthController');
const { renderLogin, renderRegister } = require('../controllers/viewController');
const router = express.Router();

router.get('/login', renderLogin);
router.get('/register', renderRegister);
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
