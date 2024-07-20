-- Create Database
CREATE DATABASE water_management_db;

-- Use the database
USE water_management_db;

-- Table: customers
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    status ENUM('Active', 'Inactive') DEFAULT 'Active'
);

-- Table: meters
CREATE TABLE meters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    identifier VARCHAR(255) NOT NULL UNIQUE,
    customer_id INT,
    status ENUM('On', 'Off') DEFAULT 'On',
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Table: readings
CREATE TABLE readings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meter_id INT,
    reading DECIMAL(10, 2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meter_id) REFERENCES meters(id)
);

-- Table: balances
CREATE TABLE balances (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    balance DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Table: payments
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    amount DECIMAL(10, 2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
