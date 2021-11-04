const axios = require('axios');
const crypto = require('crypto');
const UserController = require('../controllers/UserController');

const generate = function () {
	return crypto.randomBytes(20).toString('hex');
};

const request = function (url, method, data) {
	return axios({ url, method, data });
};

test.only('Should save user', async function() {
  jest.setTimeout(10000);
  const data = {username: generate(), password: generate()};

  const res = await request('http://localhost:3030/users', 'post', data);
  const user = res.data;

  expect(user.username).toBe(data.username);
  expect(user.password).toBe(data.password);
  
  await request(`http://localhost:3030/users/${user.id}`, 'delete');
})