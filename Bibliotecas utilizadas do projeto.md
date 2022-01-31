# Bibliotecas utilizadas do projeto



## Express

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

O Express fornece uma camada fina de recursos fundamentais para aplicativos da web, sem obscurecer os recursos do Node.js 

## EJS

Chama-se Embedded JavaScript templating (EJS) e é uma linguagem de modelagem simples que permite gerar marcação HTML com JavaScript simples

- Uso de JavaScript
- Simples para desenvolver aplicações/serviços
- Muito fácil de fazer debugging
- Sintaxe simples
- Enorme comunidade que ajudam no desenvolvimento e utilização do EJS





## Bootstrap

Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.





## Sequelize

[Sequelize é uma ferramenta Node.js ](https://translate.google.com/website?sl=en&tl=pt&prev=search&u=https://nodejs.org/en/about/)[ORM](https://translate.google.com/website?sl=en&tl=pt&prev=search&u=https://en.wikipedia.org/wiki/Object-relational_mapping) baseada em promessas para [Postgres](https://translate.google.com/website?sl=en&tl=pt&prev=search&u=https://en.wikipedia.org/wiki/PostgreSQL) , [MySQL](https://translate.google.com/website?sl=en&tl=pt&prev=search&u=https://en.wikipedia.org/wiki/MySQL) , [MariaDB](https://translate.google.com/website?sl=en&tl=pt&prev=search&u=https://en.wikipedia.org/wiki/MariaDB) , [SQLite](https://translate.google.com/website?sl=en&tl=pt&prev=search&u=https://en.wikipedia.org/wiki/SQLite) , [DB2](https://translate.google.com/website?sl=en&tl=pt&prev=search&u=https://en.wikipedia.org/wiki/IBM_Db2_Family) e [Microsoft SQL Server](https://translate.google.com/website?sl=en&tl=pt&prev=search&u=https://en.wikipedia.org/wiki/Microsoft_SQL_Server) . Possui sólido suporte a transações, relações, carregamento rápido e lento, replicação de leitura 

- manipula os banco de dados através do NodeJs





## Mysql2

MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ss

Biblioteca com foco em perfomace, suporta promises , codificações uft8, compreemssões e etc.

```
app.get("/pergunta/:id",(req ,res) => {
  const id = req.params.id;
  Pergunta.findOne({
      where: {id: id}
  }).then(pergunta => {
      if(pergunta != undefined){ // Pergunta encontrada

          res.render('pergunta')

      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})
```

