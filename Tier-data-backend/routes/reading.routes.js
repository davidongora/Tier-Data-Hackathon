const express = require('express');
const router = express.Router();
const meterReadingController = require('../controllers/readingController');

// Route to generate hourly readings
router.post('/generate-hourly', meterReadingController.generateHourlyReadings);

// Route to increment meter readings
router.put('/increment', meterReadingController.incrementReadings);

// Route to add a manual reading
router.post('/manual', meterReadingController.addManualReading);

// Route to get all readings
router.get('/getReadings', meterReadingController.getAllReadings);

// Route to get readings for a specific meter
router.get('/:meter_id', meterReadingController.getReadingsByMeterId);

module.exports = router;
