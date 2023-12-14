'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Appointment, Doctor}) {
      this.belongsTo(Appointment, {foreignKey:"appointmentId"})
      this.belongsTo(Doctor, {foreignKey:"doctorId"})
    }
  }
  Schedule.init({
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Doctors',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    timeSlot: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    appointmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Appointments',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};