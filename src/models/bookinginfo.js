'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingInfo.init({
    flightId: {
      type : DataTypes.INTEGER,
      allowNull:false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    status: {
      type:DataTypes.ENUM,
      values : ['InProcess', 'Booked' , 'Canceled'],
      defaultValue : 'InProcess',
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'BookingInfo',
  });
  return BookingInfo;
};