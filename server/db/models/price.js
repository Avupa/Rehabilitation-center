'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Procedure, Doctor}) {
      this.belongsTo(Procedure, {foreignKey:"procedureId"})
      this.belongsTo(Doctor, {foreignKey:"doctorId"})
    }
  }
  Price.init({
    procedureId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Procedures',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    doctorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Doctors',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};