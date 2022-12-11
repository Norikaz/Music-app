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
