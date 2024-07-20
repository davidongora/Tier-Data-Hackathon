const connection = require('../config/db.config');

exports.addCustomer = (req, res) => {
  const { username, email, password, status } = req.body;
  const query = 'INSERT INTO customers (name, email, password, status) VALUES (?, ?, ?,?)';
  connection.query(query, [username, email, password, status], (err, results) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    res.status(201).json({ id: results.insertId, username, email, password, status });
  });
};

exports.getAllCustomers = (req, res) => {
  const query = 'SELECT * FROM customers';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    res.status(200).json(results);
  });
};

exports.getCustomerById = (req, res) => {
  const query = 'SELECT * FROM customers WHERE id = ?';
  connection.query(query, [req.params.id], (err, results) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(results[0]);
  });
};

exports.updateCustomer = (req, res) => {
  const { name, email, password, status } = req.body;
  const query = 'UPDATE customers SET name = ?, email = ?, password = ?, status = ? WHERE id = ?';
  connection.query(query, [name, email, password, status, req.params.id], (err, results) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ id: req.params.id, name, email, password, status });
  });
};

exports.deleteCustomer = (req, res) => {
  const query = 'DELETE FROM customers WHERE id = ?';
  connection.query(query, [req.params.id], (err, results) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer has been successfully deleted' });
  });
};

