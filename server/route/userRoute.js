const UserController = require('../controllers/UserController');

const router = require('express').Router();

router.post('/users', UserController.save);

router.delete('/users/:id', UserController.delete);

module.exports = router;