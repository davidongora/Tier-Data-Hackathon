const express = require('express');
const router = express.Router();
const paymentTrackingController = require('../controllers/paymentController');
const authController = require('../controllers/authController');

// Middleware for JWT verification
router.use(authController.verifyToken);

// Record a payment
router.post('/add-payment', paymentTrackingController.addPayment);

// Get payments and balance
router.get('/payments-and-balance', paymentTrackingController.getPaymentsAndBalance);

module.exports = router;
