const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {}

  Rating.init(
    {
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
      modelName: "Rating",
    }
  );

  Rating.associate = (models) => {
    // associations can be defined here
    Rating.belongsTo(models.Song);
    Rating.belongsTo(models.User);
  };

  return Rating;
};
