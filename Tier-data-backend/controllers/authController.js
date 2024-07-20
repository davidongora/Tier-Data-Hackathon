const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connection = require('../config/db.config'); // Adjust the path as needed
const { validationResult } = require('express-validator');

const SECRET_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyMTQyMDg5MCwiaWF0IjoxNzIxNDIwODkwfQ.HsT9AroynBmEj8VUolUg4TCCKUeyllAGiLv4WG_YupE'; // Replace with your actual secret key'

// Register a new user
exports.register = async (req, res) => {
    const { name, email, password, status } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO customers (name, email, password, status) VALUES (?, ?, ?, ?)';
        connection.query(query, [name, email, hashedPassword, status], (err, results) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            res.status(201).json({ id: results.insertId, name, email, status });
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Login a user
exports.login = (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM customers WHERE email = ?';

    connection.query(query, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, SECRET_KEY, {
            expiresIn: '1h'
        });

        res.status(200).json({ token });
    });
};

// Middleware to verify JWT
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }
        req.userId = decoded.id;
        next();
    });
};
