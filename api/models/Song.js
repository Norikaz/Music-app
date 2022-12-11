const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {}

  Song.init(
    {
      songName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artistName: {
        type: DataTypes.STRING,
        allowNull: false,
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