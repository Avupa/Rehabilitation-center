"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ SpecialOfDoctor, Price, Schedule, Review }) {
      this.hasMany(SpecialOfDoctor, { foreignKey: "doctorId" });
      this.hasMany(Price, { foreignKey: "doctorId" });
      this.hasMany(Schedule, { foreignKey: "doctorId" });
      this.hasMany(Review, { foreignKey: "doctorId" });
    }
  }
  Doctor.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      secondName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      patronymic: {
        type: DataTypes.STRING,
      },
      shortDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
      },
      slot: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Doctor",
    }
  );
  return Doctor;
};
