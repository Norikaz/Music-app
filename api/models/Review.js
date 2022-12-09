"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {}

  Review.init(
    {
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 1,
          max: 10,
        },
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );

  Review.associate = (models) => {
    // associations can be defined here
    Review.belongsTo(models.Song);
    Review.belongsTo(models.User);
  };

  return Review;
};
