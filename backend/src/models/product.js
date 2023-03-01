'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Subcategory, {foreignKey: 'subcat', targetKey:'id', as:'subcategoryData'} )
    }
  }
  Product.init({
    name: DataTypes.STRING,
    subcat: DataTypes.INTEGER,
    avaliable: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    expiry: DataTypes.STRING,
    brand: DataTypes.STRING,
    description: DataTypes.STRING,
    trash: DataTypes.TINYINT,
    filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};