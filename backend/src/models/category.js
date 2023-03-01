'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Category.belongsTo(models.Subcategory, {foreignKey:'category', targetKey:'id', as:'categoryData'})
    }
  }
  Category.init({
    name: DataTypes.STRING,
    status: DataTypes.TINYINT,
    trash: DataTypes.TINYINT,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};