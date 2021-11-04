const User = require('../models/User');

module.exports = {
  async save(req, res) {
    const { username, password } = req.body;

    const user = await User.create({ username, password});

    return res.json(user);
  },

  async delete(req, res) {
    User.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).end();
  }
}