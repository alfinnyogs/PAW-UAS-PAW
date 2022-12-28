import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Products from './ProductModel.js';
import Laporans from './LaporanModel.js';

const { DataTypes } = Sequelize;

const Penjualans = db.define(
  'penjualans',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    produk_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    total_penjualan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Products.hasMany(Penjualans, { foreignKey: 'produk_id' });
Penjualans.belongsTo(Products, { foreignKey: 'produk_id' });

export default Penjualans;