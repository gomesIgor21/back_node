const express = require('express');
const router = express.Router();
const postService = require('../service/postService');

router.get('/posts', async function (req, res) {
	const post = await postService.getPosts();
	res.json(post);
});

router.get('/posts/:id', async function (req, res) {
	const post = await postService.getPost(req.params.id);
	res.json(post);
});

router.post('/posts', async function (req, res) {
	const post = req.body;
	const newPost = await postService.savePost(post);
	res.json(newPost);
});

router.put('/posts/:id', async function (req, res) {
	try{
		await postService.updatePost(req.params.id, req.body);
		res.status(201).end();
	} catch(e) {
		res.json(e.message);
	}
	
});

router.delete('/posts/:id', async function (req, res) {});

module.exports = router;
