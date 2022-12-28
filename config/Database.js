import {Sequelize} from "sequelize";

const db = new Sequelize('db_albifinmart', 'root', '1207050010', {
    host: "localhost",
    dialect: "mysql"
});

export default db;