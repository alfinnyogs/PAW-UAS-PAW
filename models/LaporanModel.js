import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Penjualans from './PenjualanModel.js';

const { DataTypes } = Sequelize;

const Laporans = db.define(
  'laporans',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    item_terjual: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hari: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },

    total_penjualan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Laporans;