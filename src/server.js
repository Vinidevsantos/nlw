const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")

//configurar pasta publica
server.use(express.static("public"))



//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicacao
//pagina incial
//req: requisicao
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um titulo"}) //rotas
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html") //rotas
})

server.get("/search", (req, res) => {

    //pegar os dados no banco de dados

    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        //mostrar a pagina html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total}) //rotas

    })
})

//ligar o servidor
server.listen(3000)