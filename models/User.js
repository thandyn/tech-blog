const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

class Users extends Model {}

Users.init (
  {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }
    username: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedData) => {
        updatedData.password = await bcrypt.hash(updatedData.password, 10);
        return updatedData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
)



module.exports = Users;