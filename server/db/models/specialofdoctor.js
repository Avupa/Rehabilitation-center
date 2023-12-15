'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpecialOfDoctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Doctor, Specialization}) {
      this.belongsTo(Doctor, {foreignKey:"doctorId"})
      this.belongsTo(Specialization, {foreignKey:"specializationId"})
    }
  }
  SpecialOfDoctor.init({
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Doctors',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    specializationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Specializations',
        key: 'id',
      },
      onDelete: 'CASCADE',

    },
  }, {
    sequelize,
    modelName: 'SpecialOfDoctor',
  });
  return SpecialOfDoctor;
};