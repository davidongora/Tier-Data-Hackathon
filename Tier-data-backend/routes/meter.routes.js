const express = require('express');
const router = express.Router();
const meterController = require('../controllers/meterController');
const { body } = require('express-validator');
const authController = require('../controllers/authController'); // Import the authController for JWT verification

// Middleware for JWT verification
router.use(authController.verifyToken);

// Add a new meter
router.post(
    '/meters',
    [
        body('identifier').notEmpty().withMessage('Identifier is required'),
        body('customer_id').isInt().withMessage('Valid customer ID is required'),
        body('status').isIn(['On', 'Off']).withMessage('Status must be either "On" or "Off"')
    ],
    meterController.addMeter
);

// Get all meters
router.get('/meters', meterController.getAllMeters);

// Get a single meter by ID
router.get('/meters/:id', meterController.getMeterById);

// Update a meter
router.put(
    '/meters/:id',
    [
        body('identifier').notEmpty().withMessage('Identifier is required'),
        body('customer_id').isInt().withMessage('Valid customer ID is required'),
        body('status').isIn(['On', 'Off']).withMessage('Status must be either "On" or "Off"')
    ],
    meterController.updateMeter
);

// Delete a meter
router.delete('/meters/:id', meterController.deleteMeter);

module.exports = router;
