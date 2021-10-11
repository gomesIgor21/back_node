const { ok } = require('assert');
const axios = require('axios');
const crypto = require('crypto');
const postService = require('../service/postService');

const generate = function () {
	return crypto.randomBytes(20).toString('hex');
};

const request = function (url, method, data) {
	return axios({ url, method, data });
};

test('Should get posts', async function () {
	const post1 = await postService.savePost({
		title: generate(),
		content: generate(),
	});
	const post2 = await postService.savePost({
		title: generate(),
		content: generate(),
	});
	const post3 = await postService.savePost({
		title: generate(),
		content: generate(),
	});

	const response = await request('http://localhost:3000/posts', 'get');

	const posts = response.data;

	expect(posts).toHaveLength(3);

	await postService.deletePost(post1.id);
	await postService.deletePost(post2.id);
	await postService.deletePost(post3.id);
});

test('Should save posts', async function () {
	const data = { title: generate(), content: generate() };

	const response = await request('http://localhost:3000/posts', 'post', data);
	const post = response.data;

	expect(post.title).toBe(data.title);
	expect(post.content).toBe(data.content);

	await postService.deletePost(post.id);
});

test('Should update a post', async function () {
	const post = await postService.savePost({ title: generate(), content: generate() });
	post.title = generate();
	post.content = generate();

	await request(`http://localhost:3000/posts/${post.id}`, 'put', post);
	const updated = await postService.getPost(post.id);
	
	expect(updated.title).toBe(post.title);
	await postService.deletePost(post.id);
});
