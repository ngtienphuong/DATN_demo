'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subcategory.init({
    name: DataTypes.STRING,
    category: DataTypes.INTEGER,
    status: DataTypes.TINYINT,
    trash: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  return Subcategory;
};