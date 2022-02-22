const db = require('../infra/database');

exports.getPosts = function () {
	return db.query('select * from public.post;');
};

exports.getPost = function (id) {
	return db.one('select * from public.post where id = $1;', [id]);
};

exports.savePost = function (post) {
	return db.one(
		'insert into public.post (title, content) values ($1, $2) returning *;',
		[post.title, post.content]
	);
};

exports.deletePost = function (id) {
	return db.none('delete from public.post where id = $1;', [id]);
};

exports.updatePost = function (id, post) {
	return db.none(
		'update public.post set title = $1, content = $2 where id = $3;',
		[post.title, post.content, id]
	);
};
