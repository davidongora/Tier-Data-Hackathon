const connection = require('../config/db.config'); // Adjust the path as needed

// Generate virtual meter readings hourly
exports.generateHourlyReadings = (req, res) => {
    const query = `
        INSERT INTO readings (meter_id, reading)
        SELECT id AS meter_id, (FLOOR(RAND() * 100) + 1) AS reading
        FROM meters
        WHERE status = 'On'
    `;

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json({ message: 'Hourly readings generated successfully', results });
    });
};

// Increment meter readings
exports.incrementReadings = (req, res) => {
    const { meter_id, incrementValue } = req.body;
    const query = 'UPDATE readings SET reading = reading + ? WHERE meter_id = ?';

    connection.query(query, [incrementValue, meter_id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Meter not found' });
        }
        res.status(200).json({ message: 'Reading incremented successfully' });
    });
};

// Add a manual reading
exports.addManualReading = (req, res) => {
    const { meter_id, reading } = req.body;
    const query = 'INSERT INTO readings (meter_id, reading) VALUES (?, ?)';

    connection.query(query, [meter_id, reading], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({ id: results.insertId, meter_id, reading });
    });
};

// Get all readings
exports.getAllReadings = (req, res) => {
    const query = 'SELECT * FROM readings';

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(results);
    });
};

// Get readings for a specific meter
exports.getReadingsByMeterId = (req, res) => {
    const { meter_id } = req.params;
    const query = 'SELECT * FROM readings WHERE meter_id = ?';

    connection.query(query, [meter_id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'No readings found for this meter' });
        }
        res.status(200).json(results);
    });
};
