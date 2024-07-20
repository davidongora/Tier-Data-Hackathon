const express = require('express');
const router = express.Router();
const prepaidBalanceController = require('../controllers/balanceController');
const authController = require('../controllers/authController'); // Import the authController for JWT verification

// Middleware for JWT verification
router.use(authController.verifyToken);

// Get prepaid balances and notify low balances
router.get('/prepaid-balances', prepaidBalanceController.getPrepaidBalances);

module.exports = router;
