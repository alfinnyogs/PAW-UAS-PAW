import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Users from './UserModel.js';

const { DataTypes } = Sequelize;

const Saldologouts = db.define(
  'saldo_logouts',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    saldo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_terjual: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Users.hasMany(Saldologouts, {
  foreignKey: 'userId',
});
Saldologouts.belongsTo(Users);

export default Saldologouts;