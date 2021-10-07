const express = require('express');
const router = express.Router();
const postService = require('../service/postService');

router.get('/posts', async function (req, res){
  const post = await postService.getPosts();
   res.json(post);
});

router.get('/posts/:id', async function (req, res) {

});

router.post('/posts', async function (req, res) {

});

router.put('/posts/:id', async function (req, res) {

});

router.delete('/posts/:id', async function (req, res) {

});


module.exports = router;