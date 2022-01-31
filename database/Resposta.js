import { Sequelize } from "sequelize"; // * IMPORTANDO o modulo sequelize
import sequelize from "./database.js";//* importando a constante sequelize do arquivo databse.js

const Respota= sequelize.define('respostas',{
    corpo:{
        type:Sequelize.TEXT,
        allowNull:false
    },//*Criando um corpo para a pergunta
    perguntaId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }//*criando um campo para o id da pergunta que a resposta pertence
    //* relaciona uma tabela com a outra(relacionamento cru)
})//*criando uma tabela para as respostas

Respota.sync({force:false})//*sicroniza a resposta com o banco de dados

export default Respota