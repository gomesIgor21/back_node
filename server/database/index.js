const Sequilize = require('sequelize');
const dbConfig = require('../config/database');

const db = new Sequilize(dbConfig);

module.exports = db;