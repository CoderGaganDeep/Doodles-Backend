"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      teacher.hasMany(models.feed);
    }
  }
  teacher.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      username: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      branch: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "teacher",
    }
  );
  return teacher;
};
