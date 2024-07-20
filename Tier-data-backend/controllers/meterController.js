const connection = require('../config/db.config'); // Adjust the path as needed

// Add a new meter
exports.addMeter = (req, res) => {
    const { identifier, customer_id, status } = req.body;

    const query = 'INSERT INTO meters (identifier, customer_id, status) VALUES (?, ?, ?)';
    connection.query(query, [identifier, customer_id, status], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({ id: results.insertId, identifier, customer_id, status });
    });
};

// Get all meters
exports.getAllMeters = (req, res) => {
    const query = 'SELECT * FROM meters';

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(results);
    });
};

// Get a single meter by ID
exports.getMeterById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM meters WHERE id = ?';

    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Meter not found' });
        }
        res.status(200).json(results[0]);
    });
};

// Update a meter
exports.updateMeter = (req, res) => {
    const { id } = req.params;
    const { identifier, customer_id, status } = req.body;

    const query = 'UPDATE meters SET identifier = ?, customer_id = ?, status = ? WHERE id = ?';
    connection.query(query, [identifier, customer_id, status, id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Meter not found' });
        }
        res.status(200).json({ message: 'Meter updated successfully' });
    });
};

// Delete a meter
exports.deleteMeter = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM meters WHERE id = ?';

    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Meter not found' });
        }
        res.status(200).json({ message: 'Meter deleted successfully' });
    });
};
