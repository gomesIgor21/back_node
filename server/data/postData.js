const db = require('../infra/database');

exports.getPosts = function () {
	return db.query('select * from blog.post;');
};

exports.getPost = function (id) {
	return db.one('select * from blog.post where id = $1;', [id]);
};

exports.savePost = function (post) {
	return db.one(
		'insert into blog.post (title, content) values ($1, $2) returning *;',
		[post.title, post.content]
	);
};

exports.deletePost = function (id) {
	return db.none('delete from blog.post where id = $1;', [id]);
};

exports.updatePost = function (id, post) {
	return db.none(
		'update blog.post set title = $1, content = $2 where id = $3;',
		[post.title, post.content, id]
	);
};
