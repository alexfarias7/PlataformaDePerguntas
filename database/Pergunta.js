
import { Sequelize } from "sequelize"; // * IMPORTANDO o modulo sequelize
import sequelize from "./database.js";//* importando a constante sequelize do arquivo databse.js

const Pergunta = sequelize.define('perguntas', {//*cria o nome da tabela

  titulo:{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
    type:Sequelize.STRING,//* para rexros curtos
    allowNull:false
  },//* cria a propriedade titulo da tabela
  descricao:{
    type:Sequelize.TEXT,  //*para textos longos
    allowNull:false
  }//* cria a propiedade descriçãoda tabela

})

Pergunta.sync({force:null}).then(()=>{
  console.log('tabel criada')
})//*cria a tabela

//*MOdel é a representação da tabela de banco de daos em um objeto javascript

export default Pergunta//* exportando a função pergunta contrutora