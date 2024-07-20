// models/meter.model.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config'); // Adjust the path as necessary

const Meter = sequelize.define('Meter', {
  identifier: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'customers',
      key: 'id',
    },
  },
  status: {
    type: DataTypes.ENUM('On', 'Off'),
    defaultValue: 'On',
  },
});

module.exports = Meter;
