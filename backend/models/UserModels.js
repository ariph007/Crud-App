import { Sequelize } from "sequelize";
import db from "../config/Database.js";

//* Function Sequelize
const {DataTypes} = Sequelize;

//* Buat table users
//* db.define('namaTable', {fieldTable}, {Opsi})
const User = db.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName: true
});

export default User;
//* Async anonymous fn berguna untuk meng-generate 
//* table users jika table users tidak ada di database, 
//* () agar funtion dijalankan langsung ketika UserModels dipanggil
(async()=>{
    await db.sync()
})();