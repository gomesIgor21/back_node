const db = require('../infra/database');

exports.getPosts = function() {
  return db.query('select * from blog.post');
}