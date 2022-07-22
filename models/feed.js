"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class feed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      feed.belongsTo(models.child, { foreignKey: "childId" });
      feed.belongsTo(models.teacher, { foreignKey: "teacherId" });
    }
  }
  feed.init(
    {
      feed: { type: DataTypes.STRING, allowNull: true },
      imageUrl: { type: DataTypes.TEXT, allowNull: true },
    },
    {
      sequelize,
      modelName: "feed",
    }
  );
  return feed;
};
