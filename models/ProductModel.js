import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Kategoris from "./KategoriModel.js";

const {DataTypes} = Sequelize;

const Products = db.define('product',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_produk:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    harga:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    stok:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

Kategoris.hasMany(Products);
Products.belongsTo(Kategoris);

export default Products;