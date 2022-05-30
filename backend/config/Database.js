import { Sequelize } from "sequelize";
//*Sequelize(namaDatabase, user, pasword,{ host, dialect(versi sql)})
const db = new Sequelize('crud_db', 'root', 'toor',{
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

export default db;