import {Sequelize} from "sequelize";

const db = new Sequelize('eco','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;