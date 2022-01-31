 import { Sequelize } from "sequelize";
 import dotenv from "dotenv";

 const dados= dotenv.config()

const sequelize= new Sequelize('guiadeperguntas', process.env.DBuser, process.env.DBPasword,{
    host:'localhost',
    dialect:"mysql",
    port:3306 ,   
})
export default sequelize; 




