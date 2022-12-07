"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MicroPost extends Model {}

  MicroPost.init(
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
        allowNull: false,
        validate: {
          min: 1,
          max: 10,
        },
      },
    },
    {
      sequelize,
      modelName: "MicroPost",
    }
  );

  MicroPost.associate = (models) => {
    // associations can be defined here
  };

  return MicroPost;
};
