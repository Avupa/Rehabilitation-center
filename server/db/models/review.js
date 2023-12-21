"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Doctor }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Doctor, { foreignKey: "doctorId" });
    }
  }
  Review.init(
    {
      grade: {
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      doctorId: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        references: {
          model: "Doctors",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
