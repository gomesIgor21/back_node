const Sequilize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Post = require('../models/Post');

const db = new Sequilize(dbConfig);

User.init(db);
Post.init(db);

module.exports = db;