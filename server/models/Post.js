const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize){
    super.init({
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    }, { sequelize });
  }
}

module.exports = Post;