"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      child.belongsTo(models.user, { foreignKey: "userId" });
      child.hasMany(models.feed);
    }
  }
  child.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
      branch: { type: DataTypes.STRING, allowNull: false },
      avatar: { type: DataTypes.STRING, allowNull: false },
      group: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "child",
    }
  );
  return child;
};
