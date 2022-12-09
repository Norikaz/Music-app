const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {}

  Song.init(
    {
      songName: {
        type: DataTypes.STRING,
      },
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
      modelName: "Song",
    }
  );

  Song.associate = (models) => {
    // associations can be defined here
    Song.hasMany(models.Review)
  };

  return Song;
};