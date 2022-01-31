import express from "express";//*importando o módulo express
import bodyParser from "body-parser";//* importando o módulo body-parser
import sequelize from "./database/database.js"; //* importando a função contrutora Sequelize
import Pergunta from "./database/Pergunta.js"//* importando o método de criaçãode tabela
import Respota from "./database/Resposta.js"

//*database
//*testa a autenticação da aplicação, se ocorrer bem, o then é executado, senão, o cath é executado
sequelize
    .authenticate()
    .then(()=> console.log('conexão feita co banco de dados'))
    .catch((msgErro)=>console.log(msgErro))

//*express
const app = express();//* recebe o modulo do express da const do app

//* configurando para o express usar o EJS como a VIEW ENGINE
app.set("view engine", "ejs");//*define para o Express usar o ejs como a VIEW engine, o que permite a marcação HTML com Javascript


app.use(express.static('public'));//* arquivos estéticos não são procesados do backend(css, js usado do front ends, img, etc)
//* ordena para o express usar  os arquivos etaicos da pasta public

//*bodyParser
//*é a bibloteca responsavel em traduzir os dados enviados do formulario em uma estrutura javascript

app.use(bodyParser.urlencoded({extended:false}))//*permiti que os dados do formulario seja decodificado

app.use(bodyParser.json())//*permiti que os dados do tipo json sejam lidos quando enviados por formularios

//*ROTAS
app.get("/", (req, res) => { //*criando uma rota inicial da aplicação

  Pergunta.findAll({raw:true, order:[//* ordena a lista de perguntas enviadas
    ['id', 'DESC']//*ASC=CRESCENTE||DESC= Decrescente

  ]}).then(perguntas =>{
    
    res.render("index", {//* recebendo as pergunats para usar da view Index
      perguntas:perguntas
    });
  })//*método que Retorna todas as perguntas enviadas pela aplicação(equivalente === SELECT ALL FROM perguntas)
  //* vai listar as perguntas e depois va utilizar o Then

});

app.get('/perguntar', (req,res)=>{//* cria uma rota para perguntas da aplicação
  res.render('perguntar')
})

app.post('/salvarpergunta', (req, res)=>{//* a aplicação recebe os dados do formulario
  const titulo = req.body.titulo;//* recebe os dados do formulário titulo
  const descricao = req.body.descricao//* recebe os dados dos formularios descrição

  Pergunta.create({//*metodo responsável por salvar uma pergunta do banco de dados(equivalente ==== INSERT INTO perguntas ....)
    titulo:titulo,//*recebe os dados da constatante titulo
    descricao:descricao//*recebe os dados da constatnte descrição
  })
  .then(()=>{
    res.redirect('/')//* redireciona o usuario para a página principal caso o app funcionasse corretamente
  })
})

app.get("/pergunta/:id",(req ,res) => {//* cria uma rota para cada pergunta pelo o id

  const id = req.params.id;//* pega o id digitado da rota
  const idNum= (id.match(/^[0-9]+$/g))?Number(id):undefined
  console.log(typeof idNum)//*verifica se o id contem letras e retorna o id em um tipo numero

  Pergunta.findOne({//*Chama o model pergunta e busca um dado espécificp
      where: {id: id}//*(obj json dentro de ouro json) usa po where para fazer busca atraves de condições
  }).then(pergunta => {//* usada após a validação da pesquisa
      if(pergunta != undefined && typeof idNum ==='number'){ //* Pergunta encontrada
      
        Respota.findAll({//*procura todas as respostas de um id espécifico
          where:{perguntaId: pergunta.id},
          order:[
            ['id','DESC']
          ]//* esta ordenando em ordem decrescente

        }).then(respostas=>{
          
          res.render('pergunta',{
            pergunta:pergunta,
            respostas:respostas//*passa as respostas para a view
          })//* vai para a página pergunta
        })


      }else{ //* pergunta não encontrada Não encontrada
          res.redirect("/");//*volta para a pagina inicial
      }
  });
})


app.post("/responder",(req, res) => {
  const corpo = req.body.corpo;
  const perguntaId = req.body.pergunta;
  Respota.create({
      corpo: corpo,
      perguntaId: perguntaId
  }).then(() => {
      res.redirect(`/pergunta/${perguntaId}`);
  });
});
app.listen(8080, () => console.log("app rodando"));//*cria uma rota para a aplicação
