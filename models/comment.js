"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.article, { foreignKey: "articleId" });
    }
  }
  comment.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      comment: { type: DataTypes.STRING, allowNull: false },
      articleId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
