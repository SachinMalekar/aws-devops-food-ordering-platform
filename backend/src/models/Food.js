const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Food = sequelize.define("Food", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  imageUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Food;