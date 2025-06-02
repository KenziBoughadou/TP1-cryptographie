const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

router.post('/register',
  body('username').isAlphanumeric().trim(),
  body('password').isLength({ min: 6 }),
  authController.register
);

router.post('/login',
  body('username').isString().trim(),
  body('password').isString(),
  authController.login
);

router.post('/refresh-token', authController.refreshToken);

router.get('/profile', authMiddleware, authController.profile);

module.exports = router;