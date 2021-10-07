const axios = require('axios');
const crypto = require('crypto');
const postService = require('../service/postService');

const generate = function () {
  return crypto.randomBytes(20).toString('hex');
}

test('Should get posts', async function () {

  const post1 = await postService.savePost({title: generate(), content: generate()});
  const post2 = await postService.savePost({title: generate(), content: generate()});
  const post3 = await postService.savePost({title: generate(), content: generate()});


	const response = await axios({
		url: 'http://localhost:3000/posts',
		method: 'get',
	});

  const posts = response.data;

  expect(posts).toHaveLength(3); 

  await postService.deletePost(post1.id);
  await postService.deletePost(post2.id);
  await postService.deletePost(post3.id);

});
